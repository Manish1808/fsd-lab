let person = {
    name:"saimanish",
    age:"20",
    greet(){
        return  `hi ${this.name}`
    },
    isAdult(){
        if(this.age>18)
        {
            return `${this.name} is adult`
        }
        else
        {
            return `${this.name} is not adult`
        }
    }
}
console.log(person.greet())
console.log(person.isAdult())