function fetchData(url){
    return new Promise((resolve,reject)=>{
        if(url.includes("error"))
            reject("There is error");
        else
            resolve("There is no error");
    })
}
fetchData("error").then((res)=>{console.log(res)});