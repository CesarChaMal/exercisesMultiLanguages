# 1. Isogram (set)
def is_isogram_set(word):
    seen = set()
    for c in word.lower():
        if c.isalpha():
            if c in seen: return False
            seen.add(c)
    return True

# 2. Isogram (array)
def is_isogram_array(word):
    seen = [False]*26
    for c in word.lower():
        if 'a' <= c <= 'z':
            i = ord(c)-97
            if seen[i]: return False
            seen[i] = True
    return True

# 3. Isogram (bitmask)
def is_isogram_bitmask(word):
    mask = 0
    for c in word.lower():
        if 'a' <= c <= 'z':
            bit = 1 << (ord(c)-97)
            if mask & bit: return False
            mask |= bit
    return True

# 4. Isogram (functional, set)
def is_isogram_set_fp(word):
    letters = [c for c in word.lower() if c.isalpha()]
    return len(set(letters)) == len(letters)

# 5. Isogram (functional, mask via reduce)
from functools import reduce
def is_isogram_array_fp(word):
    def reducer(mask, c):
        bit = 1 << (ord(c)-97)
        if mask & bit: raise ValueError()
        return mask | bit
    try:
        reduce(reducer, [c for c in word.lower() if 'a' <= c <= 'z'], 0)
        return True
    except ValueError:
        return False

# 6. Isogram (functional, every)
def is_isogram_bitmask_fp(word):
    mask = 0
    for c in word.lower():
        if 'a' <= c <= 'z':
            bit = 1 << (ord(c)-97)
            if mask & bit: return False
            mask |= bit
    return True

# 7. Binary (powers-of-2)
def to_binary(n):
    if n==0: return "0"
    s, p = "", 1
    while p<=n: p<<=1
    p>>=1
    while p>0:
        s += "1" if n & p else "0"
        p >>=1
    return s

# 8. Binary (bitwise)
def to_binary_bitwise(n):
    if n==0: return "0"
    s=""
    while n>0:
        s = str(n&1)+s
        n >>=1
    return s

# 9. Binary (functional, powers-of-2)
def to_binary_fp(n): return to_binary(n)

# 10. Binary (functional, bitwise)
def to_binary_bitwise_fp(n):
    if n==0: return "0"
    bits = [str((n>>i)&1) for i in range(n.bit_length())]
    return "".join(reversed(bits))

def run_tests():
    test_words = [
        "Machine",         # True
        "Programming",     # False
        "Isogram",         # True
        "Hello",           # False
        "Subdermatoglyphic" # True
    ]

    test_numbers = [0, 1, 12, 19, 33]

    print("=== ISOGRAM CHECKS ===")
    for word in test_words:
        print(f"Word: {word:<20} | Set: {is_isogram_set(word)} | Array: {is_isogram_array(word)} | Bitmask: {is_isogram_bitmask(word)}")

    print("\n=== ISOGRAM CHECKS (Functional) ===")
    for word in test_words:
        print(f"Word: {word:<20} | SetFP: {is_isogram_set_fp(word)} | ArrayFP: {is_isogram_array_fp(word)} | BitmaskFP: {is_isogram_bitmask_fp(word)}")

    print("\n=== BINARY CONVERSION ===")
    for num in test_numbers:
        print(f"Number: {num:<3} | Binary: {to_binary(num):<10} | Bitwise: {to_binary_bitwise(num):<10}")

    print("\n=== BINARY CONVERSION (Functional) ===")
    for num in test_numbers:
        print(f"Number: {num:<3} | BinaryFP: {to_binary_fp(num):<10} | BitwiseFP: {to_binary_bitwise_fp(num):<10}")

run_tests()
