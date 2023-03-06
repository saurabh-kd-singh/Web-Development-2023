var myCar = new Object();
myCar.speed = "50";
myCar.Driver = 'Saurabh';
myCar.drive = function(){ console.log("I am Driving")};

console.log(myCar.speed);
console.log(myCar.Driver);
myCar.drive();

var myCar2 = {
    maxSpeed: "70",
    driver: "Shweta",
    drive: function(){
        console.log("Now Driving");
    },
    travelledDistance: function(speed, time){
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive();
myCar2.travelledDistance(60,2);
myCar2.test();