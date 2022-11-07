/**
 * Find All Anagrams in a String
 *
 * Given two strings s and p, return an array of all the start 
 * indices of p's anagrams in s. You may return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of 
 * a different word or phrase, typically using all the original letters exactly once.
 **/

export default function findAnagrams(s: string, p: string): number[] {
    const result: number[] = [];
    const map: AnagramsMap = {};
    for (const char of p) {
        const cnt = map[char];
        if (cnt) {
            map[char] = cnt + 1;
        } else {
            map[char] = 1;
        }
    }

    // Use sliding window, increase counter in the map for the in char.
    // Decrease counter for the out char.
    const pSize = p.length;
    const sSize = s.length;
    let begin = 0, end = 0;
    let counter = Object.keys(map).length;
    while (end < sSize) {
        const char = s[end];
        let count = map[char]
        if (count !== undefined) {
            map[char] = --count;
            if (count === 0) {
                counter--;
            }
        }
        end++;

        if (counter === 0) {
            result.push(begin);
        }

        if (end - begin >= pSize) {
            const begChar = s[begin];
            const begCount = map[begChar];
            if (begCount !== undefined) {
                if (begCount === 0) {
                    counter++;
                }
                map[begChar] = begCount + 1;
           }
           begin++;
        }
    }

    return result;
}

type AnagramsMap = {
    [key: string]: number;
}

