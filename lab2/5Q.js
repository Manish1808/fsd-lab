let temperatureConverter={
    toCelsius(f){
        let c = ((f-32)*5)/9;
        return c;
    },
    toFahrenheit(c){
        let f = (c*(9/5))+32;
        return f;
    }
}
console.log(temperatureConverter.toCelsius(100))
console.log(temperatureConverter.toFahrenheit(37.77777777777778))