// Write a function, compress, that takes in a string as an argument.
// The function should return a compressed version of the string where consecutive occurrences 
// of the same characters are compressed into the number of occurrences followed by the character.
// Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
    // let compressed=''; strings are inmutable so when we modify 
    //  it in the for loop that's creating O(n) inside O(n)
    let compressed = [];
    let count = 1;


    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count += 1;
        } else {
            count != 1 ? compressed.push(count, s[i]) : compressed.push(s[i]);
            count = 1;

        }
    }
    return compressed.join('');
};

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');// -> '127y'