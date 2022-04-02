//import animal  from "./d1.js"
animal = require("./d1.js")


xyz = new animal("cat","brown",4)  // here we initialize module/class name
console.log(xyz)
console.log(xyz.n())              // here we print animal name
console.log(xyz.c())              // animal color
console.log(xyz.l())              // animal legs

