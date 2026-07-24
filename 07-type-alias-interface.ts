export {};

// Type Aliases and Interfaces

type Student = {
  id: number;
  name: string;
  marks: number[];
};

const student: Student = {
  id: 1,
  name: "Praveen",
  marks: [90, 80, 95],
};

console.log(student);

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const product: Product = {
  id: 1,
  name: "Keyboard",
  price: 1500,
  inStock: true,
};

console.log(product);

// Interface extension
interface DigitalProduct extends Product {
  downloadUrl: string;
}

const ebook: DigitalProduct = {
  id: 2,
  name: "TS Guide",
  price: 499,
  inStock: true,
  downloadUrl: "https://example.com/book",
};

console.log(ebook);
