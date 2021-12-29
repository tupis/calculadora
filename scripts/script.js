var elem_1 = []
var elem_2 = []
var elemento = 1

elem_1.push(1)
elem_2.push(2)

const termo1 = String(elem_1).split(",").join(" ").replace(/ /g ,"")
const termo2 = String(elem_2).split(",").join(" ").replace(/ /g ,"")


const soma = document.querySelector("#soma").addEventListener("onclick", sum(Number(termo1),Number(termo2)))

// console.log(termo2)
// console.log(sum(Number(termo1),Number(termo2)))

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

function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divider(a,b){
    return a / b;
}

function sqrt(a){
    return Math.sqrt(a);
}

function pow(a , b = 2){
    return Math.pow(a,b)
}

function limpar(){
    const visor = document.querySelector(".visor")
    visor.innerHTML = ""
    elem_1 = []
}