function createProfile(user){
    let {name,email} = user;
    let c = {name,email};
    return c;
}

const user = {name:"saimanish",age:20,email:"pandirisaimanish@gmail.com",address:{street:123,city:"hyderabad"}};
console.log(createProfile(user));