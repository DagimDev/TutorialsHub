// BigInt Constructor
// Definition:
// Creates arbitrary-precision integers (beyond Number's safe integer limit).

// Deep Dive:

const big = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log(big); // 9007199254740992n

// Literal syntax
// const hexBigInt = 0x1fffffffffffffn;
// Features:

// Suffixed with n in literals

// Can represent extremely large integers (limited only by memory)

// Cannot mix with Numbers in operations (must explicitly convert)

// Methods:

// BigInt.asIntN(width, value) - Clamps to signed width

// BigInt.asUintN(width, value) - Clamps to unsigned width

// Use Cases:

// Cryptography

// Financial calculations requiring precision

// Large ID values