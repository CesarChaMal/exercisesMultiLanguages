// 1. Isogram (Set)
function isIsogramSet(word: string): boolean {
  let seen = new Set<string>();
  for (let c of word.toLowerCase()) {
    if (/[a-z]/.test(c)) {
      if (seen.has(c)) return false;
      seen.add(c);
    }
  }
  return true;
}

// 2. Isogram (array)
function isIsogramArray(word: string): boolean {
  let seen: boolean[] = Array(26).fill(false);
  for (let c of word.toLowerCase()) {
    if (c >= 'a' && c <= 'z') {
      let i = c.charCodeAt(0) - 97;
      if (seen[i]) return false;
      seen[i] = true;
    }
  }
  return true;
}

// 3. Isogram (bitmask)
function isIsogramBitmask(word: string): boolean {
  let mask = 0;
  for (let c of word.toLowerCase()) {
    if (c >= 'a' && c <= 'z') {
      let bit = 1 << (c.charCodeAt(0) - 97);
      if ((mask & bit) !== 0) return false;
      mask |= bit;
    }
  }
  return true;
}

// 4. Isogram (functional, Set)
function isIsogramSetFp(word: string): boolean {
  let letters = Array.from(word.toLowerCase()).filter(c => /[a-z]/.test(c));
  return new Set(letters).size === letters.length;
}

// 5. Isogram (functional, mask via reduce)
function isIsogramArrayFp(word: string): boolean {
  try {
    Array.from(word.toLowerCase())
      .filter(c => c >= 'a' && c <= 'z')
      .reduce((mask, c) => {
        let bit = 1 << (c.charCodeAt(0) - 97);
        if ((mask & bit) !== 0) throw Error();
        return mask | bit;
      }, 0);
    return true;
  } catch {
    return false;
  }
}

// 6. Isogram (functional, every)
function isIsogramBitmaskFp(word: string): boolean {
  let mask = 0;
  return Array.from(word.toLowerCase())
    .filter(c => c >= 'a' && c <= 'z')
    .every(c => {
      let bit = 1 << (c.charCodeAt(0) - 97);
      if ((mask & bit) !== 0) return false;
      mask |= bit;
      return true;
    });
}

// 7. Binary (powers-of-2)
function toBinary(n: number): string {
  if (n === 0) return "0";
  let s = "", p = 1;
  while (p <= n) p <<= 1;
  p >>= 1;
  while (p > 0) {
    s += (n & p) ? "1" : "0";
    p >>= 1;
  }
  return s;
}

// 8. Binary (bitwise)
function toBinaryBitwise(n: number): string {
  if (n === 0) return "0";
  let s = "";
  while (n > 0) {
    s = ((n & 1) === 1 ? "1" : "0") + s;
    n >>= 1;
  }
  return s;
}

// 9. Binary (functional, powers-of-2)
const toBinaryFp = toBinary;

// 10. Binary (functional, bitwise)
function toBinaryBitwiseFp(n: number): string {
  if (n === 0) return "0";
  let bits: string[] = [];
  for (let x = n; x > 0; x >>= 1) bits.push(String(x & 1));
  return bits.reverse().join("");
}

function runTests(): void {
    const testWords: string[] = [
        "Machine",         // true
        "Programming",     // false
        "Isogram",         // true
        "Hello",           // false
        "Subdermatoglyphic"// true
    ];

    const testNumbers: number[] = [0, 1, 12, 19, 33];

    console.log("=== ISOGRAM CHECKS ===");
    for (const word of testWords) {
        console.log(`Word: ${word.padEnd(20)} | Set: ${isIsogramSet(word)} | Array: ${isIsogramArray(word)} | Bitmask: ${isIsogramBitmask(word)}`);
    }

    console.log("\n=== ISOGRAM CHECKS (Functional) ===");
    for (const word of testWords) {
        console.log(`Word: ${word.padEnd(20)} | SetFP: ${isIsogramSetFp(word)} | ArrayFP: ${isIsogramArrayFp(word)} | BitmaskFP: ${isIsogramBitmaskFp(word)}`);
    }

    console.log("\n=== BINARY CONVERSION ===");
    for (const num of testNumbers) {
        console.log(`Number: ${String(num).padEnd(3)} | Binary: ${toBinary(num).padEnd(10)} | Bitwise: ${toBinaryBitwise(num).padEnd(10)}`);
    }

    console.log("\n=== BINARY CONVERSION (Functional) ===");
    for (const num of testNumbers) {
        console.log(`Number: ${String(num).padEnd(3)} | BinaryFP: ${toBinaryFp(num).padEnd(10)} | BitwiseFP: ${toBinaryBitwiseFp(num).padEnd(10)}`);
    }
}

runTests();
