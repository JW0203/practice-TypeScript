const students = ["경훈", "연진", "재훈", "사라"];

const callNames =(students :string[]):void =>{
    for(let student of students){
        console.log(student)
    }
}
callNames(students)

interface User{
    firstName: string;
    lastName: string
}
const users:User[] = [
    {
        firstName: "재성",
        lastName: "박"
    },
    {
        firstName: "동은",
        lastName: "문"
    },
    {
        firstName: "연진",
        lastName: "박"
    }
];

const callUserNames = (userList:User[]) =>{
    let fullNames: string[] = [];
    userList.map((user,i)=>fullNames.push(user.lastName+user.firstName));
    return console.log(fullNames);
}

callUserNames(users)

interface Student{
    name: string;
    score: number
}
const studentsScore: Student[] = [
    {
        name: "박재성",
        score: 89
    },
    {
        name: "문동은",
        score: 92
    },
    {
        name: "박연진",
        score: 97
    }
];

const callHonorStudents =(students:Student[]) =>{
    Object.keys(students).filter((key, index) =>{
        if (students[index].score > 90){
            console.log(students[index].name)
        }
    });
}
callHonorStudents(studentsScore)
