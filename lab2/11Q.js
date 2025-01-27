class Animal{
    speak(){
        console.log("Animal is speaking");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Woof!");
    }
}
let a1 = new Animal()
let d1 = new Dog()
a1.speak()
d1.speak()