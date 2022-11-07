/**
 * Decode String
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside
 * the square brackets is being repeated exactly k times. Note that k is
 * guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra
 * white spaces, square brackets are well-formed, etc. Furthermore, you may
 * assume that the original data does not contain any digits and that digits
 * are only for those repeat numbers, k. For example, there will not be input
 * like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never
 * exceed 105.
 **/

export default function decodeString(s: string): string {
    const stack: string[] = [];
    let i = 0;
    while (i < s.length) {
        if (s[i] === '[') {
            stack.push('[');
            i++;
        } else if (s[i] === ']') {
            i++;
            // decode repeating pattern

            // first get repeating string
            let curToken = stack.pop();
            const repeatTokens = [];
            while (curToken !== '[') {
                repeatTokens.push(curToken);
                curToken = stack.pop();
            }
            let repeatStr = '';
            while (repeatTokens.length > 0) {
                repeatStr += repeatTokens.pop();
            }

            // get repeat number
            const countToken = stack.pop();
            const count = parseInt(countToken ?? 'ERR!', 10);

            // repeat string and put it back on the stack
            const result = [];
            for (let i=0; i<count; i++) {
                result.push(repeatStr);
            }
            stack.push(result.join(''));
        } else if (isCharNumber(s[i])) {
            // read number token
            const tokenChars = [];
            while (isCharNumber(s[i])) {
                tokenChars.push(s[i]);
                i++;
            }
            const token = tokenChars.join('');
            stack.push(token);
        } else {
            // read string token
            const tokenChars = [];
            while (i < s.length 
                   && s[i] !== '[' && s[i] !== ']'
                   && !isCharNumber(s[i])) {
                tokenChars.push(s[i]);
                i++;
            }
            const token = tokenChars.join('');
            stack.push(token);
        }
    }

    return stack.join('');
}

function isCharNumber(char: string): boolean {
    return char >= '0' && char <= '9';
}

