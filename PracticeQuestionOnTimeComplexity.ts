function example1(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Outer loop: runs n times
    for (let j = 1; j <= i; j++) {
      // Inner loop: runs i times
      console.log(i, j); // Constant-time operation
    }
  }
}

/*

You're on the right track, Prakash, but let's go through the analysis together!

The time complexity of **Tough Example 1** is **not \( O(n) \)**. It’s actually **\( O(n^2) \)**.

Here’s why:

---

### **Tough Example 1: Code Analysis**
```typescript
function example1(n: number): void {
  for (let i = 1; i <= n; i++) {               // Outer loop: runs n times
    for (let j = 1; j <= i; j++) {             // Inner loop: runs i times
      console.log(i, j);                       // Constant-time operation
    }
  }
}
```

---

### **Step-by-Step Analysis**

1. **Outer Loop**:
   - The outer loop runs **n times** because `i` goes from 1 to `n`.

2. **Inner Loop**:
   - The inner loop’s iteration count **depends on `i`**. When `i = 1`, the inner loop runs **1 time**; when `i = 2`, the inner loop runs **2 times**, and so on, until `i = n`, where the inner loop runs **n times**.

   This means:
   - When \( i = 1 \), the inner loop runs 1 time.
   - When \( i = 2 \), the inner loop runs 2 times.
   - ...
   - When \( i = n \), the inner loop runs \( n \) times.

3. **Total Iterations**:
   The total number of iterations is the sum of the iterations of the inner loop for each value of `i`:
   \[
   1 + 2 + 3 + \dots + n
   \]
   This is the sum of the first `n` integers, which can be calculated as:
   \[
   \frac{n \times (n + 1)}{2}
   \]
   This simplifies to \( O(n^2) \).

---

### **Final Time Complexity**
Since the total number of operations grows quadratically with `n`, the time complexity is \( O(n^2) \).

---

### **How to Explain in an Interview**
> "The outer loop runs `n` times, and for each iteration of the outer loop, the inner loop runs `i` times (where `i` starts at 1 and increases until `n`). The total number of iterations is the sum of the first `n` integers, which is \( O(n^2) \). The constant-time operation inside the loop does not affect the overall complexity."

---


*/

function example2(n: number): number {
  if (n <= 1) return 1; // Base case
  return example2(Math.floor(n / 2)) + 1; // Recursive call with division
}

/*
  You're on the right path, Prakash, but let's clarify this one further!

The time complexity of **Tough Example 2** is actually **\( O(\log n) \)**, not \( O(n \log n) \). Let me explain why:

---

### **Tough Example 2: Code Analysis**
```typescript
function example2(n: number): number {
  if (n <= 1) return 1;                        // Base case
  return example2(Math.floor(n / 2)) + 1;      // Recursive call with division
}
```

---

### **Step-by-Step Analysis**

1. **Recursive Function Breakdown**:
   - This function works by dividing `n` by 2 with each recursive call (`Math.floor(n / 2)`).
   - In each call, the input size decreases significantly because the input `n` is halved. This is typical of **logarithmic behavior**.

2. **Recursion Tree**:
   - If you visualize the recursive calls, you'll see that the depth of the recursion is determined by how many times you can divide `n` by 2 before reaching the base case. This is equivalent to the number of times you can halve `n` (or the number of times you need to divide `n` by 2 to get 1), which is \( \log_2(n) \).

3. **Number of Recursive Calls**:
   - Each recursive call reduces `n` to `n / 2`, which means the recursion depth is **logarithmic**: \( O(\log n) \).
   - Therefore, the number of recursive calls is proportional to \( \log n \).

4. **Constant-Time Operations**:
   - The `+1` operation inside the function is a **constant-time operation** \( O(1) \), and it happens during each recursive call.

---

### **Final Time Complexity**
Since the number of recursive calls is proportional to \( \log n \) and each call performs a constant-time operation, the total time complexity is \( O(\log n) \).

---

### **How to Explain in an Interview**
> "This recursive function divides the input `n` by 2 in each call (`n / 2`). The depth of the recursion is determined by how many times you can divide `n` by 2 before reaching the base case, which is logarithmic. Therefore, the time complexity of the function is \( O(\log n) \)."

---

Let me know if you'd like to discuss **Tough Example 3** or any other question! 😊
  */

function example3(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Outer loop: runs n times
    recursiveHelper(i); // Recursive function
  }
}

function recursiveHelper(m: number): void {
  if (m <= 0) return; // Base case
  console.log(m); // Constant-time operation
  recursiveHelper(m - 1); // Recursive call
}

/*
You're very close, Prakash! The time complexity of **Tough Example 3** is indeed **\( O(2n) \)**, but let’s break it down in detail to clarify.

---

### **Tough Example 3: Code Analysis**
```typescript
function example3(n: number): void {
  for (let i = 1; i <= n; i++) {               // Outer loop: runs n times
    recursiveHelper(i);                        // Recursive function
  }
}

function recursiveHelper(m: number): void {
  if (m <= 0) return;                          // Base case
  console.log(m);                              // Constant-time operation
  recursiveHelper(m - 1);                      // Recursive call
}
```

---

### **Step-by-Step Analysis**

1. **Outer Loop**:
   - The outer loop runs **n times** because it iterates from \( i = 1 \) to \( i = n \).

2. **Inner Recursive Call**:
   - Inside each iteration of the outer loop, the `recursiveHelper(i)` function is called with the value of `i`.
   - **`recursiveHelper(i)`** is a recursive function that performs \( i \) recursive calls before reaching the base case.

3. **Recursion Breakdown**:
   - The `recursiveHelper(i)` function starts with the value `i` and keeps calling itself with `m - 1` until `m` reaches 0.
   - So, for each value of `i`, the recursive function performs **i recursive calls**. For example:
     - For `i = 1`, the function performs 1 call.
     - For `i = 2`, the function performs 2 calls.
     - For `i = 3`, the function performs 3 calls.
     - ...
     - For `i = n`, the function performs `n` calls.

4. **Total Number of Operations**:
   - For each iteration of the outer loop, the recursive function performs a number of operations proportional to `i`.
   - The total number of recursive calls across all iterations of the loop is the sum of the first `n` integers:
     \[
     1 + 2 + 3 + \dots + n = \frac{n \cdot (n + 1)}{2}
     \]
     This is \( O(n^2) \) operations.

---

### **Final Time Complexity**
- While the recursion inside the helper function grows linearly with each iteration, the total number of operations from the outer loop and the inner recursive calls leads to a **quadratic** time complexity of \( O(n^2) \).

---

### **Correction to Your Answer**
- The time complexity of this code is **\( O(n^2) \)**, not \( O(2n) \). The reason is that for each value of `i`, the recursion performs `i` operations, leading to a total of \( O(n^2) \) operations across the entire execution.

---

### **How to Explain in an Interview**
> "The function consists of an outer loop that runs `n` times, and within each iteration, a recursive helper function is called. The recursive helper function performs `i` operations when `i` is the current value of the loop. The total number of operations across all iterations is the sum of the first `n` integers, which is \( O(n^2) \)."

---

Let me know if you'd like to move to **Tough Example 4** or if you have any further questions! 😊
*/

function example4(n: number): void {
  for (let i = 0; i < Math.pow(2, n); i++) {
    // Outer loop: runs 2^n times
    console.log(i); // Constant-time operation
  }
}

/*

You're very close, Prakash, but the time complexity of **Tough Example 4** is actually **\( O(2^n) \)**, not \( O(n) \). Let me explain why.

---

### **Tough Example 4: Code Analysis**
```typescript
function example4(n: number): void {
  for (let i = 0; i < Math.pow(2, n); i++) {   // Outer loop: runs 2^n times
    console.log(i);                            // Constant-time operation
  }
}
```

---

### **Step-by-Step Analysis**

1. **Outer Loop**:
   - The loop runs from `i = 0` to `i < Math.pow(2, n)`, which means it will run **\( 2^n \) times**.

2. **Constant-Time Operation**:
   - The `console.log(i)` inside the loop is a constant-time operation, \( O(1) \). It doesn’t change the time complexity.

3. **Total Iterations**:
   - The total number of iterations the loop executes is directly related to the value \( 2^n \), so the time complexity is \( O(2^n) \).

---

### **Final Time Complexity**
Since the loop runs \( 2^n \) times and each iteration does a constant-time operation, the total time complexity is **\( O(2^n) \)**.

---

### **How to Explain in an Interview**
> "The loop runs \( 2^n \) times because the upper limit of the loop is \( 2^n \). In each iteration, it performs a constant-time operation, so the overall time complexity is \( O(2^n) \), which grows exponentially with the input size."

---

### **Why Not \( O(n) \)?**
- The reason it's not \( O(n) \) is that the number of iterations grows exponentially as \( n \) increases, rather than linearly.

---

Let me know if you'd like to discuss **Tough Example 5** or if you need further clarification! 😊
*/

function fibonacci(n: number): number {
  if (n <= 1) return n; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Two recursive calls
}

/*
You're almost there, Prakash! The time complexity of **Tough Example 5: Fibonacci Recursion** is actually **\( O(2^n) \)**, not \( O(2n^2) \). Let’s break it down and clarify why.

---

### **Tough Example 5: Code Analysis**
```typescript
function fibonacci(n: number): number {
  if (n <= 1) return n;                        // Base case
  return fibonacci(n - 1) + fibonacci(n - 2);  // Two recursive calls
}
```

---

### **Step-by-Step Analysis**

1. **Recursive Structure**:
   - The function calls itself twice for each value of `n`: once with `n - 1` and once with `n - 2`.
   - This creates a **binary recursion** because each call generates two more calls.

2. **Recursion Tree**:
   - If you visualize the recursive calls as a tree, each node branches into two more nodes. At each level, the number of nodes doubles.
   - The recursion tree has a height of \( n \), and at each level, there are approximately \( 2^n \) nodes. 

3. **Number of Calls**:
   - The total number of calls in this recursion grows exponentially because each recursive call branches into two more calls. So the total number of function calls is proportional to \( 2^n \).

4. **Constant-Time Operations**:
   - Each function call performs a constant-time operation (the addition of two numbers), so the time complexity is determined by the number of calls.

---

### **Final Time Complexity**
- The total time complexity is dominated by the number of recursive calls, which is **exponential**, \( O(2^n) \).

---

### **Why Not \( O(2n^2) \)?**
- The time complexity is not \( O(2n^2) \) because the growth rate of recursive calls follows a **binary tree** structure, where each level of the recursion doubles the number of calls. The correct time complexity is \( O(2^n) \), reflecting this exponential growth.

---

### **How to Explain in an Interview**
> "The Fibonacci function uses recursion with two calls per function invocation (`fibonacci(n - 1)` and `fibonacci(n - 2)`), leading to a binary recursion tree. Since the number of calls grows exponentially, the time complexity is \( O(2^n) \)."

---

Would you like to explore ways to optimize this (such as using **dynamic programming**) or discuss other concepts? 😊

*/
