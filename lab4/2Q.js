function mul(num,callback)
{
    return callback(num*2,false);
}
function sub(num,callback)
{
    return callback(num-3,false);
}
function add(num,callback)
{
    return callback(num+10,false);
}
mul(10,(mres,err)=>{
    if(!err)
    {
        sub(mres,(sres,err)=>{
            if(!err)
            {
                add(sres,(ares,err)=>{
                    console.log(ares);
                })
            }
        })
    }
})
