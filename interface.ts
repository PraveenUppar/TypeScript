interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

interface Employee {
  id: number;
  name: string;
  position: string;
  address: Address;
  contact: {
    email: string;
    phone: string;
  };
}

const employee: Employee = {
  id: 1,
  name: "John",
  position: "Developer",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
    country: "USA",
  },
  contact: {
    email: "john@example.com",
    phone: "+1-555-0100",
  },
};
