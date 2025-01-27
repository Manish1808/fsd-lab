let c = document.getElementById("display");
function add(){
    let a =  parseFloat(document.getElementById("op1").value)
    let b = parseFloat(document.getElementById("op2").value)
    let d = a+b
    c.innerHTML= "sum:"+d;
    console.log(a+b);
}
function sub(){
    let a =  parseFloat(document.getElementById("op1").value)
    let b = parseFloat(document.getElementById("op2").value)
    let d = a-b
    c.innerHTML= "sub:"+d;
    console.log(a-b);
}
function mul(){
    let a =  parseFloat(document.getElementById("op1").value)
    let b = parseFloat(document.getElementById("op2").value)
    let d = a*b
    c.innerHTML= "mul:"+d;
    console.log(a*b);
}
function div(){
    let a =  parseFloat(document.getElementById("op1").value)
    let b = parseFloat(document.getElementById("op2").value)
    let d = a/b
    c.innerHTML= "div:"+d;
    if(b!=0){
    console.log(a/b);
    }
    else{
        console.log("division by zero");
    }
}