//
// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log("Hi, i'm " + this.name)
//     }
// }
//
// let person1 = new person("Alice", 22)
// let person2 = new person("Kibreab", 17)
//
// person1.sayHello()
// person2.sayHello()


const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("button was clicked!")
    console.log("btn clicked")
});

