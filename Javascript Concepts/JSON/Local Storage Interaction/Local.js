let myObj = {
    name: "Domenic",
    age: 56
};

//Turning JSON to a string representation
let myObjSerialize = JSON.stringify(myObj);

localStorage.setItem("myObj", myObjSerialize);

//Parsing to JSON
let myObjDeserialize = JSON.parse(localStorage.getItem("myObj"));

console.log(myObjDeserialize);
