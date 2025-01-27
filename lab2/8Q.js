let Person = {
    name:"manish",
    age:20
};
let Student = {
    branch:"CSE",
    __proto__:Person
}
console.log(Student.name);
console.log(Student.age);

function Person(name,age){
    this.name="Manish";
    this.age=20;
}
Person.prototype.display=function(){
    return `Name:${this.name} Age:${this.age}`;

}
Student.prototype = Object.create(Person.prototype)

function Student(branch){
    Person.call(this);
    this.branch="CSE";
}

Student.prototype.study = function(){
    return `${this.name} is studying in ${this.branch} branch`;
}


let p = new Person("Manish",20)
let s = new Student("CSE");
console.log(s.display());
console.log(s.study());
