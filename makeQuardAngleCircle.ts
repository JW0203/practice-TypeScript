class Square{
    constructor(private _width: number,
                private _height: number,) {
    }

    get getWidth(){
        return this._width;
    }

    get getHeight(){
        return this._height;
    }

    calculateArea() :number{
        return this._width*this._height;
    }
}

const square = new Square(10, 15);

console.log(`가로 길이 : ${square.getWidth}`);
console.log(`세로 길이 : ${square.getHeight}`);
console.log(`넓이 : ${square.calculateArea()}`);

class Circle{
    pi:number = 3.14;
    constructor(private _radius : number,){
    }

    get getRadius() {
        return this._radius;
    }

    power(base:number, exponent:number):number{
        // base : 밑 , exponent: 지수
        return base**exponent
    }

    calculateArea():number{
        return this.pi*Math.pow(this._radius,2);
    }
}

console.log('---원의 넓이 구하기')
const circle = new Circle(10);
console.log(`반지름 길이 : ${circle.getRadius}`);
console.log(`넓이 : ${circle.calculateArea()}`);