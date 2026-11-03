/**
 * A small educational Promise-like implementation.
 * It demonstrates pending/fulfilled/rejected states and thenable chaining.
 * It is not a full replacement for the native Promise specification.
 */
export class TinyPromise {
  #state = "pending";
  #value;
  #handlers = [];

  constructor(executor) {
    const resolve = value => this.#settle("fulfilled", value);
    const reject = reason => this.#settle("rejected", reason);
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  #settle(state, value) {
    if (this.#state !== "pending") return;
    if (value === this) return this.#settle("rejected", new TypeError("Promise cannot resolve itself"));
    if (value && typeof value.then === "function") {
      value.then(
        resolved => this.#settle("fulfilled", resolved),
        rejected => this.#settle("rejected", rejected)
      );
      return;
    }
    this.#state = state;
    this.#value = value;
    queueMicrotask(() => this.#flush());
  }

  #flush() {
    for (const handler of this.#handlers.splice(0)) this.#run(handler);
  }

  #run({ onFulfilled, onRejected, resolve, reject }) {
    try {
      const callback = this.#state === "fulfilled" ? onFulfilled : onRejected;
      if (typeof callback !== "function") {
        (this.#state === "fulfilled" ? resolve : reject)(this.#value);
        return;
      }
      resolve(callback(this.#value));
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new TinyPromise((resolve, reject) => {
      const handler = { onFulfilled, onRejected, resolve, reject };
      this.#handlers.push(handler);
      if (this.#state !== "pending") queueMicrotask(() => this.#flush());
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}

new TinyPromise(resolve => setTimeout(() => resolve("Completed"), 50))
  .then(console.log);
