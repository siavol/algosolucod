import findAnagrams from "./find-all-anagrams-in-a-string";

describe('[Find All Anagrams in a String]', () => {
    test('returns correct result for the string "cbaebabacd" and anagram of "abc"', () => {
        expect(findAnagrams("cbaebabacd", "abc")).toStrictEqual([0, 6]);
    });

    test('returns correct result for the string "abab" and anagram of "ab"', () => {
        expect(findAnagrams("abab", "ab")).toStrictEqual([0, 1, 2]);
    });

    test('returns correct result for the string "baa" and anagram of "aa"', () => {
        expect(findAnagrams("baa", "aa")).toStrictEqual([1]);
    });
})

