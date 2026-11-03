const list = document.querySelector("#items");
const addButton = document.querySelector("#add-item");

list.addEventListener("click", event => {
  const item = event.target.closest("li");
  if (!item || !list.contains(item)) return;
  console.log("Selected:", item.textContent);
});

let nextItem = 1;
addButton.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `Dynamically added item ${nextItem++}`;
  list.append(item);
});
