/**
 * Longest Repeating Character Replacement
 *
 * You are given a string s and an integer k. You can choose any character
 * of the string and change it to any other uppercase English character.
 * You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter
 * you can get after performing the above operations.
 **/

export default function characterReplacement(s: string, k: number): number {
    const map: CharsCountMap = {};
    let maxWindow = 0;
    let begin = 0, end = 0;
    while (end < s.length) {
        const endChar = s[end];
        let endCount = map[endChar] ?? 0;
        map[endChar] = ++endCount;

        const charCounts = Object.values(map)
            .sort((a, b) => a - b);
        charCounts.pop(); // remove the last most freq count, so that we can count the replacible count
        const replacableCount = charCounts.reduce((acc, i) => acc + i, 0);
        if (replacableCount <= k) {
            // we can replace characters in this window
            // and get repeating string
            maxWindow = Math.max(maxWindow, end - begin + 1);
        } else {
            const begChar = s[begin];
            const begCount = map[begChar];
            map[begChar] = begCount-1;
            begin++;
        }

        end++;
    }
    return maxWindow;
}

type CharsCountMap = {
    [key: string]: number;
};

