//Variables y objetos
let var1="Variable 1";
let var2=10;

let object ={
    propiedad1:10,
    propiedad2:"Valor p 2",
    propiedadObjeto:{
    propiedad4:["1","2","3"],
    propiedad5:"Valor p 5",
    },
};

console.log(object);
console.log(object.propiedad1);
console.log(object.propiedadObjeto.propiedad5);

//Funciones
function nombreFuncion(){
    console.log('Ejecutanto funcion "nombreFuncion"');
}
function nomConParametros(nom, ape, edad){
    let text = "Nombre: "+nom+" "+ape+", con estos años: "+edad;
    console.log(text);
}

/**
 * Retorna el cuadrado del numero dado
 * @param Number number
 * @returns
 */
function square(number){
    return number*number;
}
/**
 * Retorna el cubo del numero dado
 * @param Number number
 * @returns
 */
function cube(number){
    return number*number*number;
}
nombreFuncion();
nomConParametros("Juan Pablo","Medina Pérez",20);
//console.log(square(8));
//console.log(cube(8));
/*
//Ciclos
for(let index=0;index<11; index++){
    let number=10*index;
    console.log(number);
}
let indexW=0;
while(indexW<11){
    let number=indexW * 10;
    console.log(number);
    indexW++;
}
let indexDW=0;
do{
    let number=indexDW * 10;
    console.log(number);
    indexDW++;
}while(indexDW<11)
*/
//Ciclos con funciones
function tMF(v1,v2){
    let index=1;
    for(let index=1;index<v1+1; index++){
        let number=v2*index;
        console.log(number);
    }
}


function tMW(v1,v2){
    let indexW=1;
    while(indexW<v1+1){
        let number=indexW * v2;
        console.log(number);
        indexW++;
    }
}


function tMDW(v1,v2){
    let indexDW=1;
    do{
        let number=indexDW * v2;
        console.log(number);
        indexDW++;
    }while(indexDW<v1+1)
}

console.log(tMF(8,100));
console.log(tMW(8,10));
console.log(tMDW(7,5));