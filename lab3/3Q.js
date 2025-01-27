function updateEmployeeDetails(a,b){
    let c = {...a};
    c.role=b;
    return c;
}
const employee = {name: "Afroz", role: "Developer", age: 28, location: "IN"}
console.log(updateEmployeeDetails (employee, "SeniorDeveloper"));