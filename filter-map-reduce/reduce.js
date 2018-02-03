const arr = ["builder", "of", "really", "awesome", "things"];


const sum = (total, currentVal) => {
    const currentSum = total + currentVal + ' ';
    return currentSum;
};

console.log(arr.reduce(sum, ""));