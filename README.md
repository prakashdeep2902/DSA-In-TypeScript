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

Great question! Let's dive deeper into how **logarithms** work, and what it means when we see complexities like `O(log n)`, `O(n log n)`, and `O(2ⁿ)`. I'll explain step-by-step and include examples to make it clear.

---

## **1. What is a Logarithm?**

A **logarithm** is the inverse of exponentiation. If you understand powers (like \( 2^x \)), then a logarithm just "reverses" it.

### **Definition**

If:
\[
a^b = c
\]
Then:
\[
\log_a(c) = b
\]
This means that a logarithm tells you **"how many times you multiply the base (`a`) to get `c`."**

### **Common Base in Computer Science**

We almost always use **base 2** in computer science because data (bits, binary) is processed in powers of 2.

For example:

- \( \log_2(8) = 3 \), because \( 2^3 = 8 \).
- \( \log_2(16) = 4 \), because \( 2^4 = 16 \).

---

## **2. What Does `O(log n)` Mean?**

`O(log n)` means that as the input size (`n`) increases, the time it takes to process grows **logarithmically**. The algorithm cuts the input size down in each step, which is why it’s efficient.

### **Examples of O(log n) Algorithms**

#### **Binary Search**

- **Idea**: Split the input in half at each step.
- **Time Complexity**: `O(log n)` because the input size is divided by 2 at every step.

**Code Example**:

```typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Target not found
}
```

- **Explanation**:
  - If `arr` has 16 elements, you check the middle first, then 8, then 4, then 2, then 1. That's \( \log_2(16) = 4 \) steps.

---

## **3. What Does `O(n log n)` Mean?**

`O(n log n)` means the algorithm performs a `O(log n)` operation for each of the `n` elements in the input. This is common in sorting algorithms.

### **Examples of O(n log n) Algorithms**

#### **Merge Sort**

- **Idea**: Recursively divide the array into halves, then merge them back in sorted order.
- **Time Complexity**: Dividing takes `O(log n)` (like binary search), and merging takes `O(n)` at each level. Together: \( O(n \cdot \log n) \).

**Code Example**:

```typescript
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

- **Explanation**:
  - At each recursion level, the array is split in half (\( O(log n) \)).
  - At each level, all elements are merged (\( O(n) \)).
  - Total = \( O(n \cdot \log n) \).

---

## **4. What Does `O(2ⁿ)` Mean?**

`O(2ⁿ)` means the algorithm's execution time doubles with every additional unit of input size. This is very inefficient and is usually found in recursive solutions that don't optimize overlapping subproblems (like naive recursion).

### **Examples of O(2ⁿ) Algorithms**

#### **Fibonacci (Naive Recursive Solution)**

- **Idea**: Calculate the nth Fibonacci number by recursively calling for smaller Fibonacci numbers.
- **Time Complexity**: `O(2ⁿ)` because each call generates two more calls.

**Code Example**:

```typescript
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

- **Explanation**:
  - For `fibonacci(5)`, the recursion tree looks like this:
    ```
          fib(5)
         /      \
      fib(4)   fib(3)
      /   \     /   \
    fib(3) fib(2) fib(2) fib(1)
    ```
  - The tree doubles at every level, resulting in `O(2ⁿ)` growth.

---

## **5. Comparison of O(log n), O(n log n), and O(2ⁿ)**

### **Efficiency Chart**

| Input Size (`n`) | O(log n) | O(n log n) | O(2ⁿ)                |
| ---------------- | -------- | ---------- | -------------------- |
| 1                | 0        | 0          | 2                    |
| 10               | ~3       | ~30        | 1024                 |
| 100              | ~6       | ~600       | Huge (>10³⁰)         |
| 1000             | ~10      | ~10,000    | Unrealistically huge |

### **Key Takeaways**

- **O(log n)**: Efficient, found in algorithms that divide the input size (e.g., binary search).
- **O(n log n)**: Moderately efficient, found in divide-and-conquer algorithms (e.g., merge sort).
- **O(2ⁿ)**: Inefficient, often due to brute-force or naive recursion.

---

## **6. Visual Intuition**

Imagine you have a list of books:

- **O(log n)**: You use a binary search to find a book by dividing the list in half at each step.
- **O(n log n)**: You need to sort the books, so you repeatedly divide the list and merge sorted parts.
- **O(2ⁿ)**: You ask for every possible subset of books—combinatorially exploding.

---
