# System methods

The following system methods can be used in smart contracts.

For convenience, **T (T₁, T₂)** is used here instead of integers, e.g. **byte / sbyte / short / ushort / int / uint / long / ulong**.

**ST** is used here instead of signed integers, e.g. **sbyte / short / int / long**.

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
| ToString()                                    | Converts the numeric value of the current BigInteger object to its equivalent string representation. |
| Equals(BigInteger x)                          | Returns a value that indicates whether the current instance and a specified BigInteger object have the same value. |

### Static Methods

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
| BigInteger.Parse(string x)                                   | Converts the string representation of a number to its BigInteger equivalent. |
| BigInteger.PopCount(BigInteger x)                            | Computes the number of bits that are set in a value.         |
| BigInteger.Abs(BigInteger x)                                 | Gets the absolute value of a BigInteger object.              |
| BigInteger.Max(BigInteger x, BigInteger y)                   | Returns the larger of two BigInteger values.                 |
| BigInteger.Min(BigInteger x, BigInteger y)                   | Returns the smaller of two BigInteger values.                |

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

### Methods

| Name              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| Equals(T x)       | Returns a value that indicates whether the current instance and a specified object have the same value. |
| Equals(object? x) | Returns a value that indicates whether the current instance and a specified object have the same value. |

### Static Methods

| Name                                | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| T.RotateLeft(T x, int y)            | Rotates a value left by a given amount.                      |
| T.RotateRight(T x, int y)           | Rotates a value right by a given amount.                     |
| T.IsEvenInteger(T x)                | Determines if a value represents an even integral number.    |
| T.IsOddInteger(T x)                 | Determines if a value represents an odd integral number.     |
| ST.IsNegative(ST x)                 | Determines if a value is negative.                           |
| ST.IsPositive(ST x)                 | Determines if a value is positive.                           |
| T.IsPow2(T x)                       | Determines if a value is a power of two.                     |
| T.LeadingZeroCount(T x)             | Computes the number of leading zeros in a value.             |
| T.Log2(T x)                         | Computes the log2 of a value.                                |
| T.Sign(T x)                         | Gets a number that indicates the sign (negative, positive, or zero) of the current value. |
| T.DivRem(T x, T y)                  | Computes the quotient and remainder of two values.           |
| T.Clamp(T value, T min, T max)      | Clamps a value to an inclusive minimum and maximum value.    |
| ST.CopySign(ST x, ST y)             | Copies the sign of a value to the sign of another value.     |
| T₁.CreateChecked(T₂ x)              | Creates an instance of the current type from a value, throwing an overflow exception for any values that fall outside the representable range of the current type. |
| T.CreateChecked(BigInteger x)       | Creates an instance of the current type from a value, throwing an overflow exception for any values that fall outside the representable range of the current type. |
| T₁.CreateSaturating(T₂ x)           | Creates an instance of the current type from a value, saturating any values that fall outside the representable range of the current type. |
| T.CreateSaturating(BigInteger x)    | Creates an instance of the current type from a value, saturating any values that fall outside the representable range of the current type. |
| T.ToString()                        | Converts the numeric value to its equivalent string representation. |
| T.Parse(string x)                   | Converts the string representation of a number to its T equivalent. |
| T.PopCount(T x)                     | Computes the number of bits that are set in a value.         |
| T.TryParse(string? s, out T result) | Tries to convert the string representation of a number to its T equivalent, and returns a value that indicates whether the conversion succeeded. |

# Boolean Struct

Represents a Boolean (true or false) value.

### Methods

| Name       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| ToString() | Converts the value of this instance to its equivalent string representation (either "True" or "False"). |

### Static Methods

| Name                                      | Description                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| bool.TryParse(string? s, out bool result) | Tries to convert the specified string representation of a logical value to its Boolean equivalent. |

## Math Class

Provides constants and static methods for trigonometric, logarithmic, and other common mathematical functions.

### Static Methods

| Name                              | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| Math.Abs(ST x)                    | Gets the absolute value of a object.                         |
| Math.Sign(ST x)                   | Gets a number that indicates the sign (negative, positive, or zero) of the current object. |
| Math.Max(T x, T y)                | Returns the larger of two values.                            |
| Math.Min(T x, T y)                | Returns the smaller of two values.                           |
| Math.DivRem(T x, T y)             | Computes the quotient and remainder of two values.           |
| Math.Clamp(T value, T min, T max) | Clamps a value to an inclusive minimum and maximum value.    |
| Math.BigMul(int x, int y)         | Produces the full product of two 32-bit numbers.             |

## String Class

Represents text as a sequence of UTF-16 code units.

### Properties

| Name         | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Chars[Int32] | Gets the Char object at a specified position in the current String object. |
| Length       | Gets the number of characters in the current String object.  |

### Methods

| Name                                      | Description                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| ToString()                                | Returns this instance of String; no actual conversion is performed. |
| Substring(int startIndex, int length)     | Retrieves a substring from this instance. The substring starts at a specified character position and has a specified length. |
| Substring(int startIndex)                 | Retrieves a substring from this instance. The substring starts at a specified character position and continues to the end of the string. |
| Contains(string value)                    | Returns a value indicating whether a specified substring occurs within this string. |
| EndsWith(string value)                    | Determines whether the end of this string instance matches the specified string. |
| IndexOf(string value)                     | Reports the zero-based index of the first occurrence of the specified string in this instance. |
| IndexOf(char c)                           | Reports the zero-based index of the first occurrence of the specified Unicode character in this string. |
| ToLower()                                 | Returns a copy of this string converted to lowercase.        |
| ToUpper()                                 | Returns a copy of this string converted to uppercase.        |
| Trim()                                    | Removes all leading and trailing white-space characters from the current string. |
| Trim(char trimChar)                       | Removes all leading and trailing instances of a character from the current string. |
| Replace(string oldValue, string newValue) | Returns a new string in which all occurrences of a specified string in the current instance are replaced with another specified string. |

### Static Methods

| Name                                | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| string.IsNullOrEmpty(string? s)     | Indicates whether the specified string is null or an empty string (""). |
| string.Concat(string s1, string s2) |                                                              |

## Array Class

Provides methods for creating, manipulating, searching, and sorting arrays, thereby serving as the base class for all arrays in the common language runtime.

### Properties

| Name   | Description                                                  |
| ------ | ------------------------------------------------------------ |
| Length | Gets the total number of elements in all the dimensions of the Array. |

### Static Methods

| Name                       | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| Array.Reverse(Array array) | Reverses the sequence of the elements in the entire one-dimensional Array. |

## Char Struct

Represents a character as a UTF-16 code unit.

### Static Methods

| Name                                       | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| char.IsDigit(char c)                       | Indicates whether the specified Unicode character is categorized as a decimal digit. |
| char.IsLetter(char c)                      | Indicates whether the specified Unicode character is categorized as a Unicode letter. |
| char.IsWhiteSpace(char c)                  | Indicates whether the specified Unicode character is categorized as white space. |
| char.IsLower(char c)                       | Indicates whether the specified Unicode character is categorized as a lowercase letter. |
| char.ToLower(char c)                       | Converts the value of a Unicode character to its lowercase equivalent. |
| char.IsUpper(char c)                       | Indicates whether the specified Unicode character is categorized as an uppercase letter. |
| char.ToUpper(char c)                       | Converts the value of a Unicode character to its uppercase equivalent. |
| char.IsPunctuation(char c)                 | Indicates whether the specified Unicode character is categorized as a punctuation mark. |
| char.IsSymbol(char c)                      | Indicates whether the specified Unicode character is categorized as a symbol character. |
| char.IsControl(char c)                     | Indicates whether the specified Unicode character is categorized as a control character. |
| char.IsSurrogate(char c)                   | Indicates whether the specified character has a surrogate code unit. |
| char.IsHighSurrogate(char c)               | Indicates whether the specified Char object is a high surrogate. |
| char.IsLowSurrogate(char c)                | Indicates whether the specified Char object is a low surrogate. |
| char.GetNumericValue(char c)               | Converts the specified numeric Unicode character to a double-precision floating point number. |
| char.IsLetterOrDigit(char c)               | Indicates whether the specified Unicode character is categorized as a letter or a decimal digit. |
| char.IsBetween(char c, char min, char max) | Indicates whether a character is within the specified inclusive range. |
| char.ToLowerInvariant(char c)              | Converts the value of a Unicode character to its lowercase equivalent using the casing rules of the invariant culture. |
| char.ToUpperInvariant(char c)              | Converts the value of a Unicode character to its uppercase equivalent using the casing rules of the invariant culture. |
| char.IsAscii(char c)                       | Returns true if c is an ASCII character ([ U+0000..U+007F ]). |
| char.IsAsciiDigit(char c)                  | Indicates whether a character is categorized as an ASCII digit. |
| char.IsAsciiLetter(char c)                 | Indicates whether a character is categorized as an ASCII letter. |

## Nullable\<T\> Struct

Represents a value type that can be assigned `null`.

### Properties

| Name     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| HasValue | Gets a value indicating whether the current Nullable\<T\> object has a valid value of its underlying type. |
| Value    | Gets the value of the current Nullable\<T\> object if it has been assigned a valid underlying value. |

### Methods

| Name                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| GetValueOrDefault() | Retrieves the value of the current Nullable\<T\> object, or the default value of the underlying type. |
| ToString()          | Returns the text representation of the value of the current Nullable\<T\> object. |
| Equals(object? x)   | Indicates whether the current Nullable\<T\> object is equal to a specified object. |

## BitOperations Class

Provides utility methods for intrinsic bit-twiddling operations. The methods use hardware intrinsics when available on the underlying platform; otherwise, they use optimized software fallbacks.

### Static Methods

| Name                                 | Description                                          |
| ------------------------------------ | ---------------------------------------------------- |
| LeadingZeroCount(uint value)         | Computes the number of leading zeros in a value.     |
| LeadingZeroCount(ulong value)        | Computes the number of leading zeros in a value.     |
| Log2(uint value)                     | Computes the log2 of a value.                        |
| Log2(ulong value)                    | Computes the log2 of a value.                        |
| PopCount(uint value)                 | Computes the number of bits that are set in a value. |
| PopCount(ulong value)                | Computes the number of bits that are set in a value. |
| RotateLeft(uint value, int offset)   | Rotates a value left by a given amount.              |
| RotateLeft(ulong value, int offset)  | Rotates a value left by a given amount.              |
| RotateRight(uint value, int offset)  | Rotates a value right by a given amount.             |
| RotateRight(ulong value, int offset) | Rotates a value right by a given amount.             |

## Reference

https://github.com/neo-project/neo-devpack-dotnet/blob/master/src/Neo.Compiler.CSharp/MethodConvert/System/SystemCall.Register.cs
