function greet(name,callback)
{
    name = `Hi ${name}`
    callback(name);
}
function message(name)
{
    console.log(name);
}
greet("saimanish",message);