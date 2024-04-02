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


