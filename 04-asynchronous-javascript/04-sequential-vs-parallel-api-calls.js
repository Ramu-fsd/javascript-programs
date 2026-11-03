/**
 * Compares sequential and parallel asynchronous work.
 */
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function fetchRecord(id) {
  await wait(100);
  return { id, name: `Record ${id}` };
}

export async function fetchSequential(ids) {
  const results = [];
  for (const id of ids) results.push(await fetchRecord(id));
  return results;
}

export async function fetchParallel(ids) {
  return Promise.all(ids.map(fetchRecord));
}

const ids = [1, 2, 3];
console.time("sequential");
console.log(await fetchSequential(ids));
console.timeEnd("sequential");
console.time("parallel");
console.log(await fetchParallel(ids));
console.timeEnd("parallel");
