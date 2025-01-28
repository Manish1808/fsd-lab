    const ctx = document.getElementById('myChart');
    const API_KEY="25b5d51f0221767ca7aad908df540fdd";
    let myChart;
    function fetchWeather(){
        if (myChart) {
            myChart.destroy();
        }
        const city=document.getElementById('city').value;
      
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    .then(response=>response.json())
    .then(data=>{
        const temperatures = data.list.slice(0, 5).map(item => item.main.temp- 273.15)
        const labels = data.list.slice(0, 5).map(item => new Date(item.dt * 1000).toDateString());
        console.log(data);
        new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature forecast of last four days',
          data: temperatures,
          borderWidth: 1
        }]
      },
    });
    })
    .catch(err=>{
        console.log("Enter valid city name")
    })
    }
    