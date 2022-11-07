/**
 * Bulls and Cows
 *
 * You are playing the Bulls and Cows game with your friend.
 *
 * You write down a secret number and ask your friend to guess what
 * the number is. When your friend makes a guess, you provide a hint
 * with the following info:
 *
 *  - The number of "bulls", which are digits in the guess that are in
 *    the correct position.
 *  - The number of "cows", which are digits in the guess that are in
 *    your secret number but are located in the wrong position. Specifically,
 *    the non-bull digits in the guess that could be rearranged such that
 *    they become bulls.
 *
 * Given the secret number secret and your friend's guess guess, return
 * the hint for your friend's guess.
 *
 * The hint should be formatted as "xAyB", where x is the number of bulls
 * and y is the number of cows. Note that both secret and guess may contain
 * duplicate digits.
 **/

export default function getHint(secret: string, guess: string): string {
    let bulls = 0, cows = 0;

    if (secret.length === guess.length) {
        const secretMap: CharsCountMap = {};
        const guessMap: CharsCountMap = {};
        for (let i = 0; i < guess.length; i++) {
            const gChar = guess[i];
            const sChar = secret[i]
            if (gChar === sChar) {
                bulls++;
            } else {
                secretMap[sChar] = (secretMap[sChar] ?? 0) + 1;
                guessMap[gChar] = (guessMap[gChar] ?? 0) + 1;
            }
        }

        for (let i = 0; i < 10; i++) {
            const char = i.toString();
            cows += Math.min((secretMap[char] ?? 0), (guessMap[char] ?? 0));
        }
    }

    return `${bulls}A${cows}B`;
}

type CharsCountMap = {
    [key: string]: number;
}

