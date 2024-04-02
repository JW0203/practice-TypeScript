class Person{
    constructor(private _name:string,
                private _age:number,
                private _university:boolean,
                private _weight:number,
                ) {
    }

    get getProfileStrictWay():{name: string, age:number, university:boolean, weight: number}{
        return {
            name: this._name,
            age: this._age,
            university: this._university,
            weight: this._weight};
    }
    get getProfile():{[key:string] : string | number | boolean}{
        return {
            name: this._name,
            age: this._age,
            university: this._university,
            weight: this._weight};
    }

    printProfileEasyWay(): void{
        const profile = this.getProfile;
        console.log(` 이름 : ${profile.name}`)
        console.log(` 나이 : ${profile.age}`)
        console.log(` 대학생인가요? : ${profile.university}`)
        console.log(` 몸무게 : ${profile.weight}`)
    }

    printProfile():void{
        const profile = this.getProfile;
        const KeyKorean:{[key:string] : string} = {
            name : "이름",
            age : "나이",
            university :"대학생인가요?",
            weight : "몸무게"
        }

        for(const key in profile){
            let korKey = KeyKorean[key];
            let value = profile[key];
            console.log(`${korKey} : ${value}`)
        }
    }
}

const person = new Person("아이유", 30, true, 40.5);
person.printProfileEasyWay()
person.printProfile()

interface StudentScore {
    name:string;
    korean: number;
    english: number;
}
class Student {
    private _name: string;
    private _korean: number;
    private _english: number;
    constructor(private _data :StudentScore) {
        this._data = _data;
        this._name = this._data.name;
        this._korean = this._data.korean;
        this._english = this._data.english;
    }
    get studentInfo():{[key:string] : string | number | boolean}{
        return {
            name: this._name,
            korean: this._korean,
            english: this._english};
    }
    returnKoreanKey(): { [key:string]:string }{
        return {
            name: "이름",
            korean: "국어",
            english: "영어"
        }

    }
    printStudent():void{
        const koreanKey = this.returnKoreanKey();
        const newStudent = this.studentInfo;
        for (const i in newStudent){
            console.log(`${koreanKey[i]} : ${newStudent[i]}`)
        }
        console.log("\n")
    }
}
console.log("\n")

const student1:StudentScore = {
    name : "제이슨",
    korean: 87,
    english: 92
}
const student2:StudentScore = {
    name : "레이첼",
    korean: 82,
    english: 92
}
const student3:StudentScore = {
    name : "리사",
    korean: 92,
    english: 88
}

const studentList:StudentScore[]=[
    student1,
    student2,
    student3
]

for (const i of studentList ) {
    let newStudent = new Student(i);
    newStudent.printStudent()
}

