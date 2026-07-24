export {};

// Async TypeScript

type User = {
  id: number;
  name: string;
};

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Praveen" });
    }, 500);
  });
}

async function showUser(): Promise<void> {
  try {
    const user = await getUser();
    console.log(user.name);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

showUser();

async function getPost(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data: unknown = await response.json();

  console.log(data);
}

getPost().catch((error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
  }
});
