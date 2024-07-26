class Student{
    static count = 0
    constructor(sid){
        this.sid = sid
        Student.count++;
        console.log(`${Student.count} student is created`);
    }
}

const s1 = new Student(101)
const s2 = new Student(101)
const s3 = new Student(101)