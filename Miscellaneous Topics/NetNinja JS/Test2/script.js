
var Car = function(maxSpeed,driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.distance = function(speed,time){
        console.log(speed*time);
    }
};

var myCar = new Car(50,"Saurabh");
myCar.distance(100,3);
console.log(myCar.driver);