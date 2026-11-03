/**
 * Educational Promise.all implementation using native Promise resolution.
 */
export function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const values = Array.from(iterable);
    if (values.length === 0) return resolve([]);

    const results = new Array(values.length);
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value).then(result => {
        results[index] = result;
        completed++;
        if (completed === values.length) resolve(results);
      }, reject);
    });
  });
}

promiseAll([Promise.resolve(1), 2, Promise.resolve(3)]).then(console.log);
