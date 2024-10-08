This is for the project 0x03-ES6_data_manipulation

### **How to Use `map`, `filter`, and `reduce` on Arrays:**

- **`map()`**: Iterates through an array and applies a function to each element, returning a new array with the transformed elements.
  ```js
  let arr = [1, 2, 3];
  let doubled = arr.map(x => x * 2); // [2, 4, 6]
  ```

- **`filter()`**: Filters elements from an array based on a condition, returning a new array with only the elements that meet the condition.
  ```js
  let arr = [1, 2, 3, 4];
  let even = arr.filter(x => x % 2 === 0); // [2, 4]
  ```

- **`reduce()`**: Reduces an array to a single value by applying a function to accumulate the results.
  ```js
  let arr = [1, 2, 3, 4];
  let sum = arr.reduce((acc, x) => acc + x, 0); // 10
  ```

---

### **Typed Arrays:**

Typed arrays are array-like objects that provide a way to handle binary data efficiently. They come in different types, allowing you to work with specific binary data formats like integers, floats, and more.

- **Example**:
  ```js
  let intArray = new Int32Array(3);
  intArray[0] = 42;
  intArray[1] = 100;
  intArray[2] = -12;
  console.log(intArray); // Int32Array(3) [42, 100, -12]
  ```

- **Common Typed Arrays**:
  - `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Float32Array`, `Float64Array`
  - These arrays allocate memory for binary data types, improving performance for operations involving raw data.

---

### **The `Set`, `Map`, and `Weak` Link Data Structures:**

1. **`Set`**: A collection of unique values. It cannot contain duplicate elements.
   - **Usage**:
     ```js
     let set = new Set([1, 2, 3, 3]);
     set.add(4);
     console.log(set); // Set(4) {1, 2, 3, 4}
     ```

2. **`Map`**: A collection of key-value pairs. It allows any data type for both keys and values.
   - **Usage**:
     ```js
     let map = new Map();
     map.set('key1', 'value1');
     map.set('key2', 'value2');
     console.log(map.get('key1')); // 'value1'
     ```

3. **`WeakSet`**: Similar to `Set`, but its elements must be objects, and it does not prevent garbage collection of these objects.
   - **Usage**:
     ```js
     let obj = {};
     let weakSet = new WeakSet();
     weakSet.add(obj);
     ```

4. **`WeakMap`**: Like `Map`, but keys must be objects and are weakly referenced, allowing for garbage collection when they are no longer needed.
   - **Usage**:
     ```js
     let obj = {};
     let weakMap = new WeakMap();
     weakMap.set(obj, 'value');
     ```
