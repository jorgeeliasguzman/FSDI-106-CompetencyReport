

function getHelloMessage(name){
    return "Hello " + name + ". How is it going?";
}

function sum(num1, num2){
    return num1+num2;
}
function divRes(num1, num2){
    return num1+num2;0
}



function runTests(){
    console.log("Starting Tests");

    let message = getHelloMessage("Jorge");
    console.log(message);

    let result = sum(12,49);
    console.log("The result is: "+ result); //61

    //Homework 1
    /**You should not allow the user to divide by zero. *show an error if the user is trying to divide by zero * https://stackoverflow.com/questions/8072323/best-way-to-prevent-handle-divide-by-0-in-javascript  check reference page */
    let divRes=(9,3);
    let divRes2=(1,8);
    let divRes3=(10,0);
}

//HOMEWORK VARIABLE SCOPE

//3 ways to create an object
//    //Object Literals
//        //Objects then contain properties
//        //(+... fast -...tedeous to do; modify every object)
//
//    //Object Constructors
//        //Objects then contain properties
//        //(+)multiple objects with same structure easy to add new properties(-)..tedeous to do; //modify every object)
//    //Classes
//        //Classes need to be declared => objects then contain properties
//        //(+)multiple objects with same structure easy to add new properties(-)..tedeous to do; //modify every object)
////EXAMPLES//
//// this is an object constructor
//function Dog(name, age, color ) {
//    this.name = name;
//    this.age = age;
//    this.color = color;
//    this.owner = "Sergio";
//}
//function createObjects() {
//    // object literal
//    let data = {
//        name: 'Test1',
//        speed: 111,
//        color: "Red",
//        size: 12
//    };
//    console.log(data);
//
//    // object constructor
//    let fido = new Dog("Fido", 2, 'white');
//    console.log(fido);
//    
//    let lola = new Dog("Lola", 4, 'pink');
//    console.log(lola);
//}
//// classes
//class Car {
//    constructor(make, model, year) {
//        this.make = make;
//        this.model = model;
//        this.year = year;
//        this.owner = "Student";
//    }
//}
//function testClass() {
//    let c1 = new Car("Form","A", "1934");
//    console.log(c1);
//}
////END OF EXAMPLES

function testAjaxGet() {
    $.ajax({
        url: "https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function(response) {
            console.log("Server says: ", response);
        },
        error: function(errorDetails) {
            console.log("Error: ", errorDetails);
        }
    });
}