export {};

// Practice 3: Interfaces and Object Arrays

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mouse", price: 700, inStock: true },
  { id: 3, name: "Keyboard", price: 1500, inStock: false },
];

function getAvailableProducts(products: Product[]): Product[] {
  return products.filter((product) => product.inStock);
}

function getTotalValue(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}

console.log(getAvailableProducts(products));
console.log(getTotalValue(products));

function findProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

console.log(findProductById(2));
