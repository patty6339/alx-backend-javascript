Thi repo is for the ES6 classes task

[200~Here are brief notes on ES6 classes covering the requested topics:

### 1. **How to Define a Class**
   - A class in ES6 is a blueprint for creating objects with predefined properties and methods.
   - **Syntax**:
     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
     }
     ```
   - In the example above, `Person` is a class with a `constructor` method that initializes an object with `name` and `age` properties.

### 2. **How to Add Methods to a Class**
   - You can add methods to a class by defining them within the class body, outside the `constructor`.
   - **Syntax**:
     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }

       greet() {
         return `Hello, my name is ${this.name}.`;
       }
     }
     ```
   - In this example, `greet()` is a method that can be called on instances of the `Person` class.

### 3. **Why and How to Add a Static Method to a Class**
   - **Why**: Static methods are methods that belong to the class itself, not to the instances of the class. They are often used for utility functions that are related to the class but do not require an instance to be created.
   - **How**: Use the `static` keyword to define a static method.
   - **Syntax**:
     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }

       static welcome() {
         return 'Welcome to the Person class!';
       }
     }

     console.log(Person.welcome());  // No instance required to call static method
     ```
   - `welcome()` is a static method, so you can call it directly on the `Person` class without creating an instance.

### 4. **How to Extend a Class from Another**
   - **Why**: Class inheritance allows you to create a new class based on an existing class, inheriting its properties and methods while adding new ones.
   - **How**: Use the `extends` keyword to create a subclass.
   - **Syntax**:
     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }

       greet() {
         return `Hello, my name is ${this.name}.`;
       }
     }

     class Employee extends Person {
       constructor(name, age, jobTitle) {
         super(name, age);  // Call parent class constructor
         this.jobTitle = jobTitle;
       }

       work() {
         return `${this.name} is working as a ${this.jobTitle}.`;
       }
     }
     ```
   - The `Employee` class inherits from the `Person` class, and the `super()` function is used to call the constructor of the parent class.

### 5. **Metaprogramming and Symbols**
   - **Metaprogramming**: In JavaScript, metaprogramming allows the modification of the behavior of programs at runtime. It can be achieved using features like `Proxy`, `Reflect`, and `Symbols`.
   - **Symbols**: Symbols are unique and immutable data types that can be used as keys for object properties to avoid name collisions.
   - **Example of a Symbol in a Class**:
     ```javascript
     const uniqueId = Symbol('id');

     class Person {
       constructor(name) {
         this.name = name;
         this[uniqueId] = Math.random();  // Use Symbol as a property key
       }
     }

     const person1 = new Person('Alice');
     console.log(person1[uniqueId]);  // Accessing the Symbol-based property
     ```
   - Symbols are often used in metaprogramming to create hidden properties that are not exposed by normal object property enumerations, providing better encapsulation.
