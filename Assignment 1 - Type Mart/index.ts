import products from "./products.js";
import { type Product } from "./products.js";

// 1. Pick a product name to "shop for" (just a string variable for now)
let product_name = "hoodie";

// 2. Find the matching product object in `products` using .find()
//    - Remember .find() can return `undefined`, so the type will be
//      `Product | undefined` — you'll need to handle that
let product: Product | undefined = products.find(
  (p) => p.name === product_name,
);

// 3. Log the product, and if it's a pre-order item, log a heads-up message
//    - Use the `preOrder` boolean + optional chaining (`?.`) since the
//      product might be undefined
if (product?.preOrder) {
  console.log(`Heads up: "${product.name}" is a pre-order item.`);
}

// 5. Declare a shippingAddress string
let shippingAddress: string = "New York, NY";
console.log(`Shipping to: ${shippingAddress}`);

// 6. Calculate shipping:
//    - if price >= 25 → free shipping (0)
//    - else → flat $5 fee

let price: number = product?.price || 0;
let shipping: number;

if (price < 25) {
  shipping = 5;
} else {
  shipping = 0;
}

// 7. Calculate taxPercent based on price:
//    if price > 50 → 10% tax (0.1)
//    else → 5% tax (0.05)
let taxPercent: number;
taxPercent = price > 50 ? 0.1 : 0.05;

// 8. Calculate taxTotal = price * taxPercent
let taxTotal: number;
taxTotal = price * taxPercent;

// 9. Calculate total = price + taxTotal + shipping
let total: number;
total = price + taxTotal + shipping;

// 10. Log a nice formatted receipt with template literals
console.log(`Total:${total.toFixed(2)}`);
