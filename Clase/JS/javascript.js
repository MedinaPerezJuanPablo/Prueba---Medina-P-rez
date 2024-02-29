//Objetos
let obj1={
    propobj1:"Valor 1",
};
let obj2={
    propobj2:"Valor 2",
};
let obj3={
    propobj3:"Valor 3",
    ...obj1,
    ...obj2,
};
console.table(obj3);

//Variables
var nombre="Pablo";
var edad=20;
var estatura=1.78;
const ESCUELA="Tec Roque Celaya";

let string="Cadena texto";
let booleans=true;
let number=5;
let bigInt = BigInt(10);
let symbols=Symbol("Simbolo 1");
let arrays=(1,2,3,4,5);
let object={};

let student={
    name:"Pablo",
    age:20,
    topics:"Programacion Web",
    assements:{
        webDevelopmern:10,
        math:9,
    },
};

//delete student.age;
//let nombre=student.name;
//let {name:nombre,age:edad,}=student;
//let {name1, ...student2}=student;

console.log(student);
console.table(student);
console.table(student.name);

console.log(string,booleans,number,bigInt,symbols,arrays,object);

console.log(ESCUELA);
console.log("Nombre: "+nombre);
console.log("Edad: "+edad);
console.log("Estatura: "+estatura);
