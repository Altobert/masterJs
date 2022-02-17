
/*Lo siguiente pare demostrar lo debilmente tipado que es javascriot*/
var isString ='saludos cordiales';
var isNumber = 1595
var isBoolean = true;
var isUndefined =  undefined; // creamos un espacio en memoria pero no le decimos que tipo es, despue sle damos el valor.// aca el sistema responde con algo que no puede encontrar
var isNull = null; // hace lo mismo, genera un espacio en memoria que no tiene un valor designado.//Aca nosotros le decimos al didstme

/*Se podria definir una variable como undefined, pero seria extraño*/
/*Es mas utilizado el null*/

/*
Estos son los valores primitivos, como se les suele llamar, pero tb te voy a dar herramientas para qu elos utilices.
Son diferentes tipos que podemos almacenar en variable.
*/

/*Objetos y funciones es lo que mas vamos a utilizar*/

//username != userName; // En javacript se puede omitir el ;

//javascript soporta camellCase, pero no Kebbab-Case(separa por guion)

//Si a javascript le pedimos algo y javascript no lo encuentra, nos repondera undefined, no nos dira que es null



/*Cuando yo quiero definir algo como vacio, lo defino como null y no como undefined*/
/*Si yo defino una variable como indefined no sabre si falta o yo no la incorpore*/
/*Undefined es por que no existe, null por que no tiene valor. */
/*Si javascript no encuentra algo, le podra undefined. y botara el sistema.*/
/*El consejo es poder validar el json como viene, descartar los undefined y luego comenzar a trabajar.*/
/*
undefined y null, ambos son vacios, undefined no viene, no existe.  El null esta vacio por que no tiene valor o yo le doje que 
viniera vacio*/

var miVar;
var miVar2=undefined;
var miVar3=null;

console.log(miVar, miVar2, miVar3);


var lessonObject={
    order : 1,
    title : "variable",
    date  : '12-07-2021' 
}

var lessonArray = ['homero', 'marge', 'lisa']

console.log(lessonObject.title);
console.log(lessonObject.date);
console.log(lessonArray[0]);


