class Rectangle{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
    area = function(){
        return this.width * this.height;
    }
}
let p = new Rectangle(5,10)
console.log(p.area())