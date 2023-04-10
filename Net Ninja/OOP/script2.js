// User Constructor
function User(email, name, age) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.online = false;
    this.login = function(){
        console.log(this.email, "has logged in");
        this.online = true;
    }
    this.logout = function(){
        console.log(this.email, "has logged out");
        this.online = false;
    }
    
}

// Prototype  function for user
User.prototype.checkOnline = function(){
    if (this.online) {
        console.log(this.email, "is now ONLINE");
    } else {
        console.log(this.email, "is now OFFLINE");
    }
}

// Constructor for Admin
function Admin(...args){
    User.apply(this, args)
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => {
        return u.email != user.email;
    })
}

var userOne = new User('saurabh@gmail.com', 'Saurabh', 22);
var userTwo = new User('shweta@gmail.com', 'Shweta', 21);
var userThree = new User('ajay@gmail.com', 'Ajay', 25);
var admin = new Admin('shaun@ninja.com', 'shaun', 30);

var users = [userOne, userTwo, userThree, admin];

console.log(users);
admin.deleteUser(userOne);
console.log(users);

console.log(admin);





// console.log(userOne);
// console.log(userOne.checkOnline());
// console.log(userOne.login());
// console.log(userOne.checkOnline());
// console.log(userOne.logout());
// console.log(userOne.checkOnline());


// console.log(admin);
// console.log(admin.checkOnline());
// console.log(admin.login());
// console.log(admin.checkOnline());
// console.log(admin.logout());
// console.log(admin.checkOnline());