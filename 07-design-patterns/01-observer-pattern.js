/**
 * Observer pattern: subscribers are notified when the subject changes.
 */
export class EventPublisher {
  #listeners = new Set();

  subscribe(listener) {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  publish(event) {
    for (const listener of this.#listeners) listener(event);
  }
}

const publisher = new EventPublisher();
const unsubscribe = publisher.subscribe(event => console.log("Received:", event));
publisher.publish({ type: "ORDER_CREATED", orderId: 101 });
unsubscribe();
