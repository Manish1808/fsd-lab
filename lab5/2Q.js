function getData() {
    let xhttp = new XMLHttpRequest();
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=29a6315b1fb359d7b0f00ba3de9a1629";
    xhttp.open("GET", url, true);  
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const user = JSON.parse(this.responseText);  
            console.log(user.main.temp);  
        }
    };
}

getData();
