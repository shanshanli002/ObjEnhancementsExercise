//Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
//ES2015 Version

function createInstructor(firstName, lastName) {
    return{
        firstName, 
        lastName
    }
};

//Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//ES2015 Version

var favoriteNumber =42;

const instructor ={
    firstName: "Colt",
    [favoriteNumber]: "That's my favorite"
};

instructor.favoriteNumber;

//Object Methods
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
//ES2015 version
const instructor = {
firstName:"Colt",
sayHi(){
    return "Hi"
},
sayBye(){
    return this.firstName + "says bye!"
}
};

//createAnimal function using ES2015 object enhancements

const createAnimal = (species, verb, noise) => {

    return{
        species,
        [verb](){
            return noise;
        }
    }
}
