function oddOrEven(number : number) :void{
    let result : string;
    if (number %2 === 0){
        result =  "짝수" // even
    }
    if (number %2 !== 0){
        result = "홀수" // odd
    }
    return console.log(`${number}은 ${result} 입니다.`)
}

oddOrEven(17);
oddOrEven(18)