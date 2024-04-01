interface Student{
    korean: number;
    english: number;
    math: number;
}

const student4: Student ={
    korean: 90,
    english: 100,
    math: 100,
}


const isHonorStudent = (student:Student) =>{
    let result:boolean =false;
    const numberScoresOverNinety = Object.keys(student).filter(key =>
        student[key as keyof Student] >= 90).length;
    const numberHundredScores = Object.keys(student).filter(key =>
        student[key as keyof Student] === 100).length;

    if ((numberHundredScores >1) || (numberScoresOverNinety === 3)){
        result = true;
    }
    return result
}

const student1: Student ={
    korean: 90,
    english: 93,
    math: 92
}

const student2: Student ={
    korean:100,
    english:100,
    math:68
}

const student3: Student ={
    korean:88,
    english:91,
    math:89
}


console.log(isHonorStudent(student1));
console.log(isHonorStudent(student2));
console.log(isHonorStudent(student3));