// Normal async function
async function normal_fetchdata(a: number, b: number): Promise<number> {
  return a + b;
}

console.log(normal_fetchdata(2, 3));

// Arrow async function
const arrow_function = async (a: number, b: number): Promise<number> => {
  return a + b;
};
console.log(arrow_function(2, 3));

// Async and await normal function

async function normal_sum() {
  const response = await fetch("url");
  const data = await response.json();
  return data;
}

const arrow_sum = async () => {
  const response = await fetch("url");
  const data = await response.json();
  return data;
};

// Example 1

interface User {
  id: number;
  name: string;
}

async function getUser(id: number): Promise<User> {
  const response = await fetch("url");
  const data = await response.json();
  return data;
}

async function main() {
  try {
    const user = await getUser(3);
    console.log(user.name);
  } catch (error) {
    console.error;
    error;
  }
}
