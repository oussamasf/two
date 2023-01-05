let data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

// let last = "";
data = data.filter((el) => {
  console.log(el.name.toLocaleLowerCase().includes("apple"));
  return el.name.toLocaleLowerCase().includes("apple");
});
console.log(data);
// data.forEach((el) => {
//   if (last !== el.category) {
//     last = el.category;
//     console.log("====", last);
//   }
//   console.log(el.name);
// });
