This is for the Typescript project

Here are short notes on the requested TypeScript topics:

### 1. Basic Types in TypeScript
TypeScript provides several basic types to help developers define variables more precisely. Common basic types include:
- **`number`**: Represents both integer and floating-point numbers. E.g., `let num: number = 42;`
- **`string`**: Represents textual data. E.g., `let name: string = "Alice";`
- **`boolean`**: Represents a logical entity with two values: true and false. E.g., `let isActive: boolean = true;`
- **`void`**: Used in functions that do not return a value. E.g., `function log(): void { console.log("Hello"); }`
- **`null` and `undefined`**: Represent absence of a value. E.g., `let value: null = null; let data: undefined = undefined;`
- **`any`**: A flexible type that allows any value, bypassing type checking. E.g., `let variable: any = 42;`
- **`array`**: Represents a collection of items of a specific type. E.g., `let numbers: number[] = [1, 2, 3];`
- **`tuple`**: A fixed-length array with different types. E.g., `let tuple: [string, number] = ["Alice", 30];`

### 2. Interfaces, Classes, and Functions
- **Interfaces**: Define a contract for objects. They specify properties and methods without implementation. E.g.,
  ```typescript
  interface Person {
      name: string;
      age: number;
  }
  ```
- **Classes**: Blueprints for creating objects. They can implement interfaces and use access modifiers (public, private, protected). E.g.,
  ```typescript
  class Employee implements Person {
      constructor(public name: string, public age: number) {}
  }
  ```
- **Functions**: TypeScript allows specifying parameter and return types for functions. E.g.,
  ```typescript
  function add(x: number, y: number): number {
      return x + y;
  }
  ```

### 3. How to Work with the DOM and TypeScript
TypeScript provides type definitions for DOM elements, enabling developers to interact with HTML elements safely. Use type assertions to access properties and methods. E.g.,
```typescript
const button = document.getElementById("myButton") as HTMLButtonElement;
button.addEventListener("click", () => {
    alert("Button clicked!");
});
```
Use `querySelector` for more complex selections:
```typescript
const input = document.querySelector("input[type='text']") as HTMLInputElement;
```

### 4. Generic Types
Generics allow creating reusable components and functions that work with a variety of types without losing type safety. E.g.,
```typescript
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("Hello");
```
Generics can also be used with classes and interfaces:
```typescript
class Box<T> {
    content: T;
    constructor(value: T) {
        this.content = value;
    }
}
```

### 5. How to Use Namespaces
Namespaces provide a way to group related code and avoid naming collisions. They can contain variables, interfaces, functions, and classes. E.g.,
```typescript
namespace Shapes {
    export class Circle {
        constructor(public radius: number) {}
    }
    export function calculateArea(circle: Circle): number {
        return Math.PI * circle.radius ** 2;
    }
}
const myCircle = new Shapes.Circle(5);
```

### 6. How to Merge Declarations
Declaration merging allows you to define multiple declarations with the same name, which TypeScript will combine into a single entity. This is useful for extending existing interfaces or classes. E.g.,
```typescript
interface User {
    name: string;
}
interface User {
    age: number;
}
const user: User = { name: "Alice", age: 25 };
```

### 7. How to Use an Ambient Namespace to Import an External Library
Ambient namespaces can be used to declare types for libraries that don’t have TypeScript definitions. This allows TypeScript to recognize these types. E.g.,
```typescript
declare namespace MyLibrary {
    function myFunction(param: string): void;
}
// Usage
MyLibrary.myFunction("Hello");
```
You can also create a `.d.ts` file to declare these types.

### 8. Basic Nominal Typing with TypeScript
TypeScript primarily uses structural typing, but you can achieve nominal typing through unique symbols or classes. Nominal typing checks if two types are the same based on their declaration. E.g.,
```typescript
type UserID = { __brand: "UserID" } & string;  // Creates a nominal type
let userId: UserID = "123" as UserID; // This must be cast, enforcing nominal typing
```
This ensures that `UserID` is treated differently from other string types.

These notes cover the basics of each topic in TypeScript, providing a foundation for further exploration and implementation. Let me know if you need more details on any specific topic!