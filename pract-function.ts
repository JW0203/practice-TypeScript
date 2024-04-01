
//덧셈 함수
const sum=(a:number, b:number) :number =>a+b;

const [a,b] = [5, 6]
console.log(`${a} 와 ${b}의 합은 ${sum(a,b)} 입니다.`);

//곱셈 함수

const multiply = (a: number, b: number) : number =>{
    let result = 1;
    for (let i= a;  i <= b; i++){
        result *=  i
    }
    return result;
}
const [c,d] = [1, 10]
console.log(`${c} 부터 ${d} 까지의 곱은 ${multiply(c,d)} 입니다.`);