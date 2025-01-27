let car ={
    make:"delhi", 
    model:"bmw",
    year:"2020",
    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    }   
}
const electricCar = Object.create(car);
electricCar.batteryCapacity = 100;
electricCar.getBatteryInfo = function(){
    return `Battery Capacity: ${this.batteryCapacity} units`
} 
console.log(electricCar.getDetails());
console.log(electricCar.getBatteryInfo());