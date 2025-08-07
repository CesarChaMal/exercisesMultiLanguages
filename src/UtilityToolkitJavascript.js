// 1. Isogram (Set)
function isIsogramSet(word) {
  let seen = new Set();
  for (let c of word.toLowerCase()) {
    if (/[a-z]/.test(c)) {
      if (seen.has(c)) return false;
      seen.add(c);
    }
  }
  return true;
}

// 2. Isogram (boolean array)
function isIsogramArray(word) {
  let seen = Array(26).fill(false);
  for (let c of word.toLowerCase()) {
    if (c >= 'a' && c <= 'z') {
      let idx = c.charCodeAt(0) - 97;
      if (seen[idx]) return false;
      seen[idx] = true;
    }
  }
  return true;
}

// 3. Isogram (bitmask)
function isIsogramBitmask(word) {
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
function isIsogramSetFunctional(word) {
  let letters = [...word.toLowerCase()].filter(c => /[a-z]/.test(c));
  return new Set(letters).size === letters.length;
}

// 5. Isogram (functional, bitmask via reduce)
function isIsogramArrayFunctional(word) {
  try {
    [...word.toLowerCase()]
      .filter(c => c >= 'a' && c <= 'z')
      .reduce((mask, c) => {
        let bit = 1 << (c.charCodeAt(0) - 97);
        if ((mask & bit) !== 0) throw new Error();
        return mask | bit;
      }, 0);
    return true;
  } catch (_) {
    return false;
  }
}

// 6. Isogram (functional, boolean array via every)
function isIsogramBitmaskFunctional(word) {
  let mask = 0;
  return [...word.toLowerCase()]
    .filter(c => c >= 'a' && c <= 'z')
    .every(c => {
      let bit = 1 << (c.charCodeAt(0) - 97);
      if ((mask & bit) !== 0) return false;
      mask |= bit;
      return true;
    });
}

// 7. Binary (powers-of-2)
function toBinary(n) {
  if (n === 0) return "0";
  let s = "";
  let p = 1;
  while (p <= n) p <<= 1;
  p >>= 1;
  while (p > 0) {
    s += (n & p) ? "1" : "0";
    p >>= 1;
  }
  return s;
}

// 8. Binary (bitwise)
function toBinaryBitwise(n) {
  if (n === 0) return "0";
  let s = "";
  while (n > 0) {
    s = (n & 1) + s;
    n >>= 1;
  }
  return s;
}

// 9. Binary (functional, powers-of-2)
function toBinaryFunctional(n) {
  return toBinary(n);
}

// 10. Binary (functional, bitwise)
function toBinaryBitwiseFunctional(n) {
  if (n === 0) return "0";
  let bits = [];
  for (let x = n; x > 0; x >>= 1) bits.push(x & 1);
  return bits.reverse().join("");
}

function runTests() {
    const testWords = [
        "Machine",         // true
        "Programming",     // false
        "Isogram",         // true
        "Hello",           // false
        "Subdermatoglyphic"// true
    ];

    const testNumbers = [0, 1, 12, 19, 33];

    console.log("=== ISOGRAM CHECKS ===");
    for (let word of testWords) {
        console.log(`Word: ${word.padEnd(20)} | Set: ${isIsogramSet(word)} | Array: ${isIsogramArray(word)} | Bitmask: ${isIsogramBitmask(word)}`);
    }

    console.log("\n=== ISOGRAM CHECKS (Functional) ===");
    for (let word of testWords) {
        console.log(`Word: ${word.padEnd(20)} | SetFP: ${isIsogramSetFunctional(word)} | ArrayFP: ${isIsogramArrayFunctional(word)} | BitmaskFP: ${isIsogramBitmaskFunctional(word)}`);
    }

    console.log("\n=== BINARY CONVERSION ===");
    for (let num of testNumbers) {
        console.log(`Number: ${String(num).padEnd(3)} | Binary: ${toBinary(num).padEnd(10)} | Bitwise: ${toBinaryBitwise(num).padEnd(10)}`);
    }

    console.log("\n=== BINARY CONVERSION (Functional) ===");
    for (let num of testNumbers) {
        console.log(`Number: ${String(num).padEnd(3)} | BinaryFP: ${toBinaryFunctional(num).padEnd(10)} | BitwiseFP: ${toBinaryBitwiseFunctional(num).padEnd(10)}`);
    }
}

runTests();
