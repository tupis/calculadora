// fazer interação do teclado com calculadora

var elem_1 = []
var elem_2 = []
var elemento = 1
var resultado;

elem_1.push(9)
elem_2.push(2)

const termo1 = String(elem_1).split(",").join(" ").replace(/ /g ,"")
const termo2 = String(elem_2).split(",").join(" ").replace(/ /g ,"")


function adicionar(value){
    const visor = document.querySelector(".visor")
    switch (value) {
        case 0:
            elem_1.push(0)
            break;
        case 1:
            elem_1.push(1)
            break;
        case 2:
            elem_1.push(2)
            break;
        case 3:
            elem_1.push(3)
            break;
        case 4:
            elem_1.push(4)
            break;
        case 5:
            elem_1.push(5)
            break;
        case 6:
            elem_1.push(6)
            break;
        case 7:
            elem_1.push(7)
            break;
        case 8:
            elem_1.push(8)
            break;
        case 9:
            elem_1.push(9)
            break;      
    }
    const elemento1 = String(elem_1).split(",").join(" ").replace(/ /g ,"")
    visor.innerHTML = `${elemento1}`
}

function sum(a = Number(termo1), b = Number(termo2)){
    resultado = a + b;
}

function subs(a = Number(termo1), b = Number(termo2)){
    resultado = a - b;
}

function multiply(a = Number(termo1), b = Number(termo2)){
    resultado = a * b;
}

function divider(a = Number(termo1), b = Number(termo2)){
    resultado = a / b;
}

function sqrt(a = Number(termo1)){
    resultado = Math.sqrt(a);
}

function pow(a = Number(termo1) , b = 2){
    resultado = Math.pow(a,b)
    console.log(resultado)
}

function clean(){
    const visor = document.querySelector(".visor")
    visor.innerHTML = ""
    elem_1 = []
    elem_2 = []
}

function back(){
    const visor = document.querySelector(".visor")
    elem_1.pop()
    const elemento1 = String(elem_1).split(",").join(" ").replace(/ /g ,"")
    visor.innerHTML = `${elemento1}`
    
}

function result(){

}