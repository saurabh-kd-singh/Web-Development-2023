// var userOne = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// // console.log(userOne);
// // console.log(userOne.login());
// // console.log(userOne.logout());


// userOne.name = 'Saurabh';
// console.log(userOne);

// userOne.age = 25;

// console.log(userOne);


class User {
    constructor(email, name, age){
        this.email = email;
        this.name = name;
        this.age  = age;
        this.score = 0;
    }
    login(){
        console.log(this.email, "logged in");
        return this;
    }
    logout(){
        console.log(this.email, "logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, ' Score is now ', this.score);
        return this;
    }
};

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('saurabh@gmail.com', 'Saurabh', 22);
var userTwo = new User('shweta@gmail.com', 'Shweta', 21);
var userThree = new User('ajay@gmail.com', 'Ajay', 25);
var admin = new Admin('admin@gmail.com', 'Admin', 23);

var users = [userOne, userTwo, userThree, admin];

admin.deleteUser(userTwo);

console.log(users);

console.log(admin);

