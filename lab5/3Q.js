let fetchUrl = async()=>{
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=29a6315b1fb359d7b0f00ba3de9a1629");
    let response = await data.json();
    console.log(response);
}
fetchUrl();