function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw error for null values
  }
  return a + b; // Perform addition
}

console.log(foo(10, 20)); // Output: 30
try {
  console.log(foo(null, 20)); // Throws Error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}
try {
  console.log(foo(10, null)); // Throws Error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}
try {
  console.log(foo(null, null)); // Throws Error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
} 