const numbers = [90, 50, 80, 92, 82];
const sumNumbers = (arr:number[]): number => {
    let result = 0;
    for(let i of arr ){
        result += i;
    }
    return result
}

const multiplyNumbers = (arr:number[]):number =>{
    let result = 1;
    for(let i =0; i<arr.length; i++){
        result *= arr[i]
    }
    return result;
}

const average = sumNumbers(numbers)/numbers.length;

console.log(sumNumbers(numbers));
console.log(multiplyNumbers(numbers));
console.log(average);