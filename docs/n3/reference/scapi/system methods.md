# System methods

The following system methods can be used in smart contracts.

## BigInteger Class

Represents an arbitrarily large signed integer.

### Properties

| Name     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| One      | Gets a value that represents the number one (1).             |
| MinusOne | Gets a value that represents the number negative one (-1).   |
| Zero     | Gets a value that represents the number 0 (zero).            |
| IsZero   | Indicates whether the value of the current BigInteger object is Zero. |
| IsOne    | Indicates whether the value of the current BigInteger object is One. |
| IsEven   | Indicates whether the value of the current BigInteger object is an even number. |
| Sign     | Gets a number that indicates the sign (negative, positive, or zero) of the current BigInteger object. |

### Methods

| Name                                          | Description                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| Pow(BigInteger, Int32)                        | Raises a BigInteger value to the power of a specified value. |
| ModPow(BigInteger, BigInteger, BigInteger)    | Performs modulus division on a number raised to the power of another number. |
| Add(BigInteger, BigInteger)                   | Adds two BigInteger values and returns the result.           |
| Subtract(BigInteger, BigInteger)              | Subtracts one BigInteger value from another and returns the result. |
| Negate(BigInteger)                            | Negates a specified BigInteger value.                        |
| Multiply(BigInteger, BigInteger)              | Multiplies two specified BigInteger values.                  |
| Divide(BigInteger, BigInteger)                | Divides one BigInteger value by another and returns the result. |
| Remainder(BigInteger, BigInteger)             | Performs integer division on two BigInteger values and returns the remainder. |
| Compare(BigInteger, BigInteger)               | Compares two BigInteger values and returns an integer that indicates whether the first value is less than, equal to, or greater than the second value. |
| GreatestCommonDivisor(BigInteger, BigInteger) | Finds the greatest common divisor of two BigInteger values.  |
| ToByteArray()                                 | Converts a BigInteger value to a byte array.                 |

### Static Methods

*  For convenience, **T** is used here instead of integers, e.g. **byte / sbyte / short / ushort / int / uint / long / ulong**.

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| BigInteger.IsEvenInteger(BigInteger x)                       | Determines if a value represents an even integral number.    |
| BigInteger.IsOddInteger(BigInteger x)                        | Determines if a value represents an odd integral number.     |
| BigInteger.IsNegative(BigInteger x)                          | Determines if a value is negative.                           |
| BigInteger.IsPositive(BigInteger x)                          | Determines if a value is positive.                           |
| BigInteger.IsPow2(BigInteger x)                              | Determines if a value is a power of two.                     |
| BigInteger.Log2(BigInteger x)                                | Computes the log2 of a value.                                |
| BigInteger.LeadingZeroCount(BigInteger x)                    | Computes the number of leading zeros in a value.             |
| BigInteger.DivRem(BigInteger x, BigInteger y)                | Computes the quotient and remainder of two values.           |
| BigInteger.Clamp(BigInteger value, BigInteger min, BigInteger max) | Clamps a value to an inclusive minimum and maximum value.    |
| BigInteger.CopySign(BigInteger x, BigInteger y)              | Copies the sign of a value to the sign of another value.     |
| BigInteger.CreateChecked(T x)                                | Creates an instance of the current type from a value, throwing an overflow exception for any values that fall outside the representable range of the current type. |
| BigInteger.CreateSaturating(T x)                             | Creates an instance of the current type from a value, saturating any values that fall outside the representable range of the current type. |
| BigInteger.ToString()                                        | Converts the numeric value of the current BigInteger object to its equivalent string representation. |
|                                                              |                                                              |
|                                                              |                                                              |
|                                                              |                                                              |
|                                                              |                                                              |
|                                                              |                                                              |
|                                                              |                                                              |

### Operators

| Name                           | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| Explicit(BigInteger to SByte)  | Defines an explicit conversion of a BigInteger object to a signed 8-bit value. |
| Explicit(BigInteger to Byte)   | Defines an explicit conversion of a BigInteger object to an unsigned byte value. |
| Explicit(BigInteger to Int16)  | Defines an explicit conversion of a BigInteger object to a 16-bit signed integer value. |
| Explicit(BigInteger to UInt16) | Defines an explicit conversion of a BigInteger object to an unsigned 16-bit integer value. |
| Explicit(BigInteger to Char)   | Explicitly converts a big integer to a Char value.           |
| Explicit(BigInteger to Int32)  | Defines an explicit conversion of a BigInteger object to a 32-bit signed integer value. |
| Explicit(BigInteger to UInt32) | Defines an explicit conversion of a BigInteger object to an unsigned 32-bit integer value. |
| Explicit(BigInteger to Int64)  | Defines an explicit conversion of a BigInteger object to a 64-bit signed integer value. |
| Explicit(BigInteger to UInt64) | Defines an explicit conversion of a BigInteger object to an unsigned 64-bit integer value. |
| Explicit(Char to BigInteger)   | Explicitly converts a Char value to a BigInteger value.      |
| Explicit(SByte to BigInteger)  | Explicitly converts a signed 8-bit value to a BigInteger value. |
| Explicit(Byte to BigInteger)   | Explicitly converts a unsigned byte value to a BigInteger value. |
| Explicit(Int16 to BigInteger)  | Explicitly converts a 16-bit signed integer value to a BigInteger value. |
| Explicit(UInt16 to BigInteger) | Explicitly converts a unsigned 16-bit integer value to a BigInteger value. |
| Explicit(Int32 to BigInteger)  | Explicitly converts a 32-bit signed integer value to a BigInteger value. |
| Explicit(UInt32 to BigInteger) | Explicitly converts a unsigned 32-bit integer value to a BigInteger value. |
| Explicit(Int64 to BigInteger)  | Explicitly converts a 64-bit signed integer value to a BigInteger value. |
| Explicit(UInt64 to BigInteger) | Explicitly converts a unsigned 64-bit integer value to a BigInteger value. |

## Numeric Struct

For convenience, **T (T₁, T₂)** is used here instead of integers, e.g. **byte / sbyte / short / ushort / int / uint / long / ulong**.

**ST** is used here instead of signed integers, e.g. **sbyte / short / int / long**.

### Static Methods

| Name                             | Description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| T.RotateLeft(T x, int y)         | Rotates a value left by a given amount.                      |
| T.RotateRight(T x, int y)        | Rotates a value right by a given amount.                     |
| T.IsEvenInteger(T x)             | Determines if a value represents an even integral number.    |
| T.IsOddInteger(T x)              | Determines if a value represents an odd integral number.     |
| ST.IsNegative(ST x)              | Determines if a value is negative.                           |
| ST.IsPositive(ST x)              | Determines if a value is positive.                           |
| T.IsPow2(T x)                    | Determines if a value is a power of two.                     |
| T.LeadingZeroCount(T x)          | Computes the number of leading zeros in a value.             |
| T.Log2(T x)                      | Computes the log2 of a value.                                |
| T.Sign(T x)                      | Gets a number that indicates the sign (negative, positive, or zero) of the current value. |
| T.DivRem(T x, T y)               | Computes the quotient and remainder of two values.           |
| T.Clamp(T value, T min, T max)   | Clamps a value to an inclusive minimum and maximum value.    |
| ST.CopySign(ST x, ST y)          | Copies the sign of a value to the sign of another value.     |
| T₁.CreateChecked(T₂ x)           | Creates an instance of the current type from a value, throwing an overflow exception for any values that fall outside the representable range of the current type. |
| T.CreateChecked(BigInteger x)    | Creates an instance of the current type from a value, throwing an overflow exception for any values that fall outside the representable range of the current type. |
| T₁.CreateSaturating(T₂ x)        | Creates an instance of the current type from a value, saturating any values that fall outside the representable range of the current type. |
| T.CreateSaturating(BigInteger x) | Creates an instance of the current type from a value, saturating any values that fall outside the representable range of the current type. |
| T.ToString()                     | Converts the numeric value to its equivalent string representation. |
|                                  |                                                              |
|                                  |                                                              |
|                                  |                                                              |

## Math Class

### Static Methods

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

## String Class

### Properties

| Name | Description |
| ---- | ----------- |
|      |             |

### Methods

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

### Static Methods

| Name | Description |
| ---- | ----------- |
|      |             |

## Array Class

### Properties

| Name | Description |
| ---- | ----------- |
|      |             |

### Static Methods

| Name | Description |
| ---- | ----------- |
|      |             |

## Char Struct

### Properties

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |
|      |             |

### Static Methods

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

## Nullable Type

### Properties

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |

### Methods

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

## Bit Operations

### Static Methods

| Name | Description |
| ---- | ----------- |
|      |             |
|      |             |
|      |             |
|      |             |

