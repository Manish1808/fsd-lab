function  createProfile(user){
    let {name,age} = user;
    let {interest} = user;
    let [primaryInterest,secondaryInterest]=interest;
    c={name,age,primaryInterest,secondaryInterest};
    return c;
}
const user = {name: "John", age: 25, interest:["Reading","Traveling"]};
console.log(createProfile(user));