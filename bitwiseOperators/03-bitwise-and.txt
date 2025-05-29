// 1. Bitwise AND (&)
// Rule: 1 & 1 = 1, otherwise 0.

// 5 & 3 → 0101 & 0011 = 0001 (1)
// Use Case: Checking if a number is even/odd (n & 1).


// 2. Bitwise OR (|)
// Rule: 0 | 0 = 0, otherwise 1.
// 5 | 3 → 0101 | 0011 = 0111 (7)
// Use Case: Combining flags/permissions.

// 3. Bitwise XOR (^)
// Rule: 1 ^ 1 = 0, 0 ^ 0 = 0, otherwise 1.

// 5 ^ 3 → 0101 ^ 0011 = 0110 (6)
// Use Case: Swapping variables without a temporary variable.

// 4. Bitwise NOT (~)
// Rule: Flips all bits (0→1, 1→0).
// ~5 → ~0101 = 1010 (-6 in two's complement)
// Note: Results in negative numbers due to two's complement representation.

// 5. Left Shift (<<)
// Rule: Shifts bits left, fills with 0.
// 5 << 1 → 0101 << 1 = 1010 (10)
// Use Case: Fast multiplication by powers of 2 (x << n = x * 2ⁿ).

