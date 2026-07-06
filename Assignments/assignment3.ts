// Exercise 1: Create interfaces for a blog system
// TODO: Create interface 'Author' with: id, name, email, joinDate
// TODO: Create interface 'Post' with: id, title, content, author (Author), tags (string[]), publishedDate
// TODO: Create at least 2 post objects that follow the interface
// TODO: Create interface 'Book' with:
//   - isbn (readonly string)
//   - title (string)
//   - author (string)
//   - publishedYear (number)
//   - pages (optional number)

interface Author {
  readonly id: number;
  name: string;
  email: string;
  joinDate: number;
}

interface Post {
  readonly id: number;
  title: string;
  content: string;
  author: Author;
  tags: string[];
  date: number;
}

const posts: Post = {
  id: 123,
  title: "Title",
  content: "Content",
  author: {
    id: 234,
    name: "pavi",
    email: "pavi@gmail.com",
    joinDate: 12 - 12 - 1212,
  },
  tags: ["tech", "lifestyle"],
  date: 12 - 12 - 1212,
};

// Exercise 4: Type aliases with union types
// TODO: Create a type 'Status' that can be: "active" | "inactive" | "pending"
// TODO: Create a type 'UserResponse' that is either a User object or an error string
// TODO: Create 2 variables with different types from UserResponse

type status = string | string | string;
