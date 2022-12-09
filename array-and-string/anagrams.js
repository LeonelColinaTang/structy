// Write a function, anagrams, that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters, but in any order.
const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false;

    let word = {}
    let result = true;
    for (let i = 0; i < s1.length; i++) {
        if (word[s1[i]]) {
            word[s1[i]] += 1;
        } else {
            word[s1[i]] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (word[s2[i]]) {
            word[s2[i]] -= 1;
        } else {
            word[s2[i]] = 1;
        }
    }

    // Object.values(word).forEach((letter)=> {
    //   console.log(word, ' ',letter)
    //   if(letter!==0) {
    //     return false
    //   };
    // })

    for (let letter in word) {
        if (word[letter] !== 0) {
            return false;
        }
    }

    return true;
};
anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false
