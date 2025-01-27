function fetchDataWithCallback(success,callback)
{
    if(success)
    {
        callback("Data fetched Successfully",null);
    }
    else{
        callback(null,"Error: Failed to fetch data");
    }
}
function callback(message,err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(message);
    }
}

fetchDataWithCallback(false,callback);