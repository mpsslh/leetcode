const products = [
  { name: "Mobile", price: 1000 },
  { name: "TV", price: 800 },
  { name: "Washing Machine", price: 500 },
  { name: "Iphone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Camera", price: 3000 },
  { name: "Desktop", price: 1500 },
  { name: "Ipad", price: 300 },
];

//Q1
console.log(
  products.filter((product) => product.price >= 1500 && product.price <= 2500)
);

//Q2
const filtered = products.filter((product) => product.price < 1000);
filtered.forEach((product) => console.log(product.name));

//Q3
products.forEach((product) => console.log(product));

//Q4
const results = products.find((product) => product.name === "BenQ Monitor");

if (results) {
  //window.alert("Product Found");
  console.log("Product Found");
} else {
  console.log("Product not found");
}
