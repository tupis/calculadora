// fazer interação do teclado com calculadora

var elem_1 = []
var elem_2 = []
var termo = elem_1
var resultado
var operador
const termo1 = String(elem_1).split(",").join(" ").replace(/ /g ,"")
const termo2 = String(elem_2).split(",").join(" ").replace(/ /g ,"")
const visor = document.querySelector(".visor-text")
const antecessor = document.querySelector(".antecessor")


function adicionar(value) {
    antecessor.style.transform = "translateY(-130px)"
    switch (value) {
        case 0:
            termo.push(0)
            break;
        case 1:
            termo.push(1)
            break;
        case 2:
            termo.push(2)
            break;
        case 3:
            termo.push(3)
            break;
        case 4:
            termo.push(4)
            break;
        case 5:
            termo.push(5)
            break;
        case 6:
            termo.push(6)
            break;
        case 7:
            termo.push(7)
            break;
        case 8:
            termo.push(8)
            break;
        case 9:
            termo.push(9)
            break;      
    }
    const elemento = String(termo).split(",").join(" ").replace(/ /g ,"")
    visor.innerHTML = `${elemento}`
}

function operation(op) { 
    const elemento = String(termo).split(",").join(" ").replace(/ /g ,"")
    switch (op) {
        case 0:            //sum
            termo = elem_2
            operador = "sum"
            antecessor.innerHTML = `${elemento}`
            break;
        case 1:            //subs
            termo = elem_2
            operador = "subs"
            antecessor.innerHTML = `${elemento}`
            break;
        case 2:            //mult
            termo = elem_2
            operador = "mult"
            antecessor.innerHTML = `${elemento}`
            break;
        case 3:            //divider
            termo = elem_2
            operador = "divider"
            antecessor.innerHTML = `${elemento}`
            break;
        case 4:            //pow
            termo = elem_2
            operador = "pow"
            antecessor.innerHTML = `${elemento}`
            break;
        case 5:            //sqrt
            termo = elem_2
            operador = "sqrt"
            antecessor.innerHTML = `${elemento}`
        break;
    }
    console.log(operador)
}

function result() {
    switch (operador) {
        case "sum":
            (a = Number(termo1), b = Number(termo2)) => resultado = a + b
            
            break;
        case "subs":
            (a = Number(termo1), b = Number(termo2)) => {
                resultado = a - b;
            }
        break;
    }
    

    /* function multiply(a = Number(termo1), b = Number(termo2)) {
        resultado = a * b;
    }
    
    function divider(a = Number(termo1), b = Number(termo2)) {
        resultado = a / b;
    }
    
    function sqrt(a = Number(termo1)) {
        resultado = Math.sqrt(a);
    }
    
    function pow(a = Number(termo1) , b = 2) {
        resultado = Math.pow(a,b)
    } */
    visor.innerHTML = ""
    visor.innerHTML = `${resultado}`
}

function clean() {
    antecessor.innerHTML = ""
    visor.innerHTML = ""
    elem_1.length = 0
    elem_2.length = 0
    termo = elem_1
}
    
function back() {
    termo.pop()
    const elemento = String(termo).split(",").join(" ").replace(/ /g ,"")
    visor.innerHTML = `${elemento}`
    if (termo.length == 0) {
        antecessor.style.transform = "translateY(-92px)"
    }
    
}
