const numbers = [90, 50, 80, 92, 82];
const sumNumbers = (arr: number[]): number =>{
    let result = 0;
    for(let i of arr){
        result += i;
    }
    return result;
}
console.log(sumNumbers(numbers))

// for each
const sumNumbersForeach = (arr:number[]) : number =>{
    let result = 0;
    arr.forEach(number =>
    {result += number;}
    )
    return result
}

console.log(sumNumbersForeach(numbers))
// for
const sumNumbersFor = (arr:number[]) : number =>{
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

console.log(sumNumbersFor(numbers))

// reduce 이용
const sumNumbersReduce = (arr: number[]):number =>{
    // total 을 0 으로 초기화
    return arr.reduce((total:number ,n:number) => total + n, 0);
};
console.log(sumNumbersReduce(numbers))


// map 복습 및  이용
const sumNumbersMap = (arr: number[]):number => {
    let result = 0;
    arr.map(number => {result += number;})
    return result
};
console.log(sumNumbersMap(numbers))

let result = 0;
const sumNumbersMap2 = (arr:number[]):number =>{
    arr.map((number,i) => result += arr[i]);
    return result
}
console.log(sumNumbersMap2(numbers))


// filter 복습 및  이용
result = 0
const sumNumbersFilter = (arr: number[]):number =>{
    arr.filter((num, index)=>{
        console.log(`${num} from index ${index}`)
        result += num;
    } )
    return result;
}
console.log(sumNumbersFilter(numbers));