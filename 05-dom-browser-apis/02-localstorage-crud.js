const STORAGE_KEY = "javascript-programs-items";
const form = document.querySelector("#item-form");
const input = document.querySelector("#item-input");
const list = document.querySelector("#item-list");

function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

let items = loadItems();

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function render() {
  list.replaceChildren();
  for (const item of items) {
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = item.name;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.dataset.id = item.id;
    removeButton.addEventListener("click", () => {
      items = items.filter(entry => entry.id !== item.id);
      saveItems();
      render();
    });
    li.append(label, removeButton);
    list.append(li);
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = input.value.trim();
  if (!name) return;
  items.push({ id: crypto.randomUUID(), name });
  saveItems();
  form.reset();
  render();
});

render();
