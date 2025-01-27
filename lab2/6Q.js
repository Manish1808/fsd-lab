
function Person(name,age){
    this.name = "Saimanish";
    this.age = 20;
    this.x = 100;
}
Person.prototype.properties = function(){
    return `Name:${this.name},Age:${this.age}`;
}
function Student(grade){
    Person.call(this);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype)

Person.prototype.study = function(){
    return `${this.name} is studying for grade ${this.grade}`;
}

let s1 = new Person("Saimanish",20)
console.log(s1.properties())
let s2 = new Student("S")
console.log(s2)
console.log(s2.name)

