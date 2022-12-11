const fiveSort = (nums) => {
    let toBeDeleted = []
    let last = nums.length
    for (let i = 0; i < last; i++) {
        if (nums[i] === 5) {
            toBeDeleted.push(i);
            nums.push(5);
        }
    }

    for(let i = 0; i < toBeDeleted.length; i++){
        nums.splice(toBeDeleted[i], 1)
    }

    return nums;
};

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));