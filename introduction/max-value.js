// structy - logo
// structy
// premium
// favorite
// max value
// Write a function, maxValue, that takes in array of numbers as an argument.The function should return the largest number in the array.
// Solve this without using any built -in array methods.
// You can assume that the array is non - empty.

const maxValue = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > result) result = nums[i];
    }
    return result;
};

maxValue([4, 7, 2, 8, 10, 9]); // -> 10
maxValue([10, 5, 40, 40.3]); // -> 40.3
