// Write a function, mostFrequentChar, that takes in a string as an argument
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non - empty.

const mostFrequentChar = (s) => {
    let container = {};

    for (let letter of s) {
        if (container[letter]) {
            container[letter] += 1;
        } else {
            container[letter] = 1;
        }
    }
    console.log("container", container)
    let mostFrequent;
    let num = 0;
    for (let char in container) {
        if (container[char] > num) {
            mostFrequent = char;
            num = container[char];
        }
    }
    return mostFrequent;
};

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
