package exercisesMultiLanguages;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.*;

public class UtilityToolkitJava {

    // 1. Isogram (HashSet)
    public static boolean isIsogramSet(String word) {
        String lower = word.toLowerCase();
        Set<Character> seen = new HashSet<>();
        for (char c : lower.toCharArray()) {
            if (Character.isLetter(c) && !seen.add(c)) {
                return false;
            }
        }
        return true;
    }

    // 2. Isogram (boolean[26])
    public static boolean isIsogramArray(String word) {
        String lower = word.toLowerCase();
        boolean[] seen = new boolean[26];
        for (char c : lower.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                int idx = c - 'a';
                if (seen[idx]) return false;
                seen[idx] = true;
            }
        }
        return true;
    }

    // 3. Isogram (bitmask)
    public static boolean isIsogramBitmask(String word) {
        String lower = word.toLowerCase();
        int mask = 0;
        for (char c : lower.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                int bit = 1 << (c - 'a');
                if ((mask & bit) != 0) return false;
                mask |= bit;
            }
        }
        return true;
    }

    // 4. Isogram (functional, Set)
    public static boolean isIsogramSetFunctional(String word) {
        String lower = word.toLowerCase();
        long letters = lower.chars().filter(Character::isLetter).count();
        long unique  = lower.chars()
                            .filter(Character::isLetter)
                            .mapToObj(c -> (char)c)
                            .collect(Collectors.toSet())
                            .size();
        return letters == unique;
    }

    // 5. Isogram (functional, boolean[] via stream)
    public static boolean isIsogramArrayFunctional(String word) {
        String lower = word.toLowerCase();
        AtomicInteger seen = new AtomicInteger(0);
        return lower.chars()
                    .filter(c -> c >= 'a' && c <= 'z')
                    .allMatch(c -> {
                        int bit = 1 << (c - 'a');
                        if ((seen.get() & bit) != 0) return false;
                        seen.getAndUpdate(m -> m | bit);
                        return true;
                    });
    }

    // 6. Isogram (functional, bitmask via reduce)
    public static boolean isIsogramBitmaskFunctional(String word) {
        try {
            word.toLowerCase().chars()
                .filter(c -> c >= 'a' && c <= 'z')
                .reduce(0, (mask, c) -> {
                    int bit = 1 << (c - 'a');
                    if ((mask & bit) != 0) throw new IllegalStateException();
                    return mask | bit;
                });
            return true;
        } catch (IllegalStateException ex) {
            return false;
        }
    }

    // 7. Binary (powers-of-2 method)
    public static String toBinary(int number) {
        if (number == 0) return "0";
        StringBuilder sb = new StringBuilder();
        int power = 1;
        while (power <= number) power <<= 1;
        power >>= 1;
        while (power > 0) {
            sb.append((number & power) != 0 ? '1' : '0');
            power >>= 1;
        }
        return sb.toString();
    }

    // 8. Binary (bitwise-shift method)
    public static String toBinaryBitwise(int number) {
        if (number == 0) return "0";
        StringBuilder sb = new StringBuilder();
        while (number > 0) {
            sb.append((number & 1) == 1 ? '1' : '0');
            number >>= 1;
        }
        return sb.reverse().toString();
    }

    // 9. Binary (functional, powers-of-2 via IntStream)
    public static String toBinaryFunctional(int number) {
        if (number == 0) return "0";
        List<String> bits = new ArrayList<>();
        int power = 1;
        while (power <= number) power <<= 1;
        power >>= 1;
        while (power > 0) {
            bits.add((number & power) != 0 ? "1" : "0");
            power >>= 1;
        }
        return String.join("", bits);
    }

    // 10. Binary (functional, bitwise-shift via IntStream.iterate)
    public static String toBinaryBitwiseFunctional(int number) {
        if (number == 0) return "0";
        List<String> bits = IntStream.iterate(number, n -> n > 0, n -> n >> 1)
                                     .map(n -> n & 1)
                                     .mapToObj(String::valueOf)
                                     .collect(Collectors.toList());
        Collections.reverse(bits);
        return String.join("", bits);
    }

    public static void main(String[] args) {
        String[] testWords = {
                "Machine",         // true
                "Programming",     // false
                "Isogram",         // true
                "Hello",           // false
                "Subdermatoglyphic"// true
        };

        int[] testNumbers = {0, 1, 12, 19, 33};

        System.out.println("=== ISOGRAM CHECKS ===");
        for (String word : testWords) {
            System.out.printf("Word: %-20s | Set: %-5s | Array: %-5s | Bitmask: %-5s%n",
                    word,
                    isIsogramSet(word),
                    isIsogramArray(word),
                    isIsogramBitmask(word)
            );
        }

        System.out.println("\n=== ISOGRAM CHECKS (Functional) ===");
        for (String word : testWords) {
            System.out.printf("Word: %-20s | SetFP: %-5s | ArrayFP: %-5s | BitmaskFP: %-5s%n",
                    word,
                    isIsogramSetFunctional(word),
                    isIsogramArrayFunctional(word),
                    isIsogramBitmaskFunctional(word)
            );
        }

        System.out.println("\n=== BINARY CONVERSION ===");
        for (int num : testNumbers) {
            System.out.printf("Number: %-3d | Binary: %-10s | Bitwise: %-10s%n",
                    num,
                    toBinary(num),
                    toBinaryBitwise(num)
            );
        }

        System.out.println("\n=== BINARY CONVERSION (Functional) ===");
        for (int num : testNumbers) {
            System.out.printf("Number: %-3d | BinaryFP: %-10s | BitwiseFP: %-10s%n",
                    num,
                    toBinaryFunctional(num),
                    toBinaryBitwiseFunctional(num)
            );
        }
    }
}
