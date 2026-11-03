/**
 * Groups objects by the value of a selected property.
 */
export function groupBy(items, property) {
  return items.reduce((groups, item) => {
    const key = String(item[property]);
    (groups[key] ??= []).push(item);
    return groups;
  }, {});
}

const employees = [
  { name: "Asha", department: "Engineering" },
  { name: "Ravi", department: "Finance" },
  { name: "Maya", department: "Engineering" }
];
console.log(groupBy(employees, "department"));
