Understanding **time complexity** and **space complexity** is crucial for analyzing the efficiency of algorithms. Let’s break them down in a simple and clear way.

---

## **1. Time Complexity**

Time complexity measures **how the execution time of an algorithm changes as the input size grows**.

### **Key Concepts**

- **Input Size (`n`)**: The size of the data you’re processing.
- **Operations**: Actions performed in the algorithm (e.g., loops, function calls, etc.).
- **Growth Rate**: How the number of operations grows relative to `n`.

### **Common Time Complexities**

| Notation     | Name             | Explanation                                                                        |
| ------------ | ---------------- | ---------------------------------------------------------------------------------- |
| `O(1)`       | Constant Time    | Execution time doesn't depend on input size (e.g., accessing an array index).      |
| `O(log n)`   | Logarithmic Time | Time grows logarithmically (e.g., Binary Search).                                  |
| `O(n)`       | Linear Time      | Time grows directly proportional to input size (e.g., iterating through an array). |
| `O(n log n)` | Log-Linear Time  | Common for efficient sorting algorithms (e.g., Merge Sort, Quick Sort).            |
| `O(n²)`      | Quadratic Time   | Time grows quadratically (e.g., nested loops over the input).                      |
| `O(2ⁿ)`      | Exponential Time | Grows exponentially (e.g., recursive algorithms without optimization).             |

---

### **Examples**

#### Example 1: Constant Time `O(1)`

```typescript
function getFirstElement(arr: number[]): number {
  return arr[0]; // Always 1 operation, regardless of array size
}
```

#### Example 2: Linear Time `O(n)`

```typescript
function printArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Executes `n` times for `n` elements
  }
}
```

#### Example 3: Quadratic Time `O(n²)`

```typescript
function printPairs(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // Nested loop → `n * n = n²`
    }
  }
}
```

---

## **2. Space Complexity**

Space complexity measures **how much extra memory (space) an algorithm needs as the input size grows**.

### **Key Components**

1. **Fixed Space**: Memory required for variables, constants, and function calls (independent of input size).
2. **Dynamic Space**: Memory required for data structures like arrays, hashmaps, recursion stack, etc.

---

### **Common Space Complexities**

| Notation | Explanation                                                            |
| -------- | ---------------------------------------------------------------------- |
| `O(1)`   | Constant Space: The algorithm uses a fixed amount of memory.           |
| `O(n)`   | Linear Space: Memory usage grows linearly with the input size.         |
| `O(n²)`  | Quadratic Space: Memory usage grows quadratically (e.g., 2D matrices). |

---

### **Examples**

#### Example 1: Constant Space `O(1)`

```typescript
function sumArray(arr: number[]): number {
  let sum = 0; // Only 1 variable
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

#### Example 2: Linear Space `O(n)`

```typescript
function duplicateArray(arr: number[]): number[] {
  const result = []; // Extra memory grows linearly with input size
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
```

#### Example 3: Recursive Algorithm with Stack Space

Each recursive call uses memory for its own execution.

```typescript
function factorial(n: number): number {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}
```

- Space Complexity: **O(n)** due to the recursion stack (maximum `n` recursive calls).

---

## **3. Analyzing Both Together**

### Sorting Example: Merge Sort

Merge Sort has:

- **Time Complexity**: `O(n log n)` (dividing the array + merging subarrays).
- **Space Complexity**: `O(n)` (temporary arrays for merging).

---

## **How to Calculate Complexity**

1. **Count operations** (loops, function calls, etc.).
2. **Focus on the dominant term** (ignore constants and smaller terms as `n` grows).
   - Example: `O(2n + 5)` simplifies to `O(n)`.

---

## **Comparison of Complexities**

### Time Complexity Growth

- `O(1)`: Fastest (constant time).
- `O(log n)`: Slightly slower, but still efficient.
- `O(n)`: Reasonable for most cases.
- `O(n²)` or worse: Avoid for large inputs if possible.

---

Let me know if you'd like me to walk through specific algorithms (e.g., Binary Search or Merge Sort) with step-by-step complexity analysis! 😊
