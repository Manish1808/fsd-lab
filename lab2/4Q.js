function Student(name,grade){
    this.name=name;
    this.grade=grade;
    this.study=function(){
        return `Name:${this.name} is studying 3rd year cse in cvr college of Engineering`
    };
    this.getGrade=function(){
        return `Grade:${this.grade}`
    }
}
let s1 = new Student("saimanish","S")
let s2 = new Student("suhas","A+")
let s3 = new Student("keerthan","A")
console.log(s1.study())
console.log(s1.getGrade())
console.log(s2.study())
console.log(s2.getGrade())
console.log(s3.study())
console.log(s3.getGrade())