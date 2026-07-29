// Assignment 4: Product Inventory
// ===============================
//
// Build a typed inventory manager.
//
// Requirements:
// 1. Create Product interface
// 2. Product should have id, name, price, stock, category
// 3. Create addProduct(product)
// 4. Create updateStock(id, quantity)
// 5. Create getLowStockProducts(limit)
// 6. Create getInventoryValue()
// 7. Create searchProducts(query)
// 8. Validate price and stock are not negative
//
// Bonus:
// - Use readonly id
// - Use Category union type

type Category = "Electronics" | "Clothing" | "Food" | "Books" | "Other";
interface Product {
  readonly id: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
}
const Products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    stock: 10,
    category: "Electronics",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 19.99,
    stock: 50,
    category: "Clothing",
  },
];

function addProduct(product: Product): Product[] {
  const newProduct: Product = {
    id: Products.length + 1,
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category,
  };
  Products.push(newProduct);
  return Products;
}

function updateStock(id: number, quantity: number): Product[] {
  const product = Products.find((p) => p.id === id);
  if (product) {
    product.stock = quantity;
  } else {
    console.log(`Product with id ${id} not found.`);
  }
  return Products;
}

function getLowStockProducts(limit: number): Product[] {
  return Products.filter((p) => p.stock < limit);
}

function getInventoryValue(): number {
  return Products.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );
}

function searchProducts(query: string): Product[] {
  return Products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );
}

function validateProduct(product: Product): boolean {
  if (product.price < 0 || product.stock < 0) {
    console.log("Price and stock cannot be negative.");
    return false;
  }
  return true;
}
