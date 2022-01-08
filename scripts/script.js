// fazer interação do teclado com calculadora

var elem_1 = []
var elem_2 = []
var termo = elem_1
var resultado
var operador
var a
var b

const visor = document.querySelector(".visor-text")
const antecessor = document.querySelector(".antecessor")

function adicionar(value) {
    antecessor.style.transform = "translateY(-150px)"
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
        case 10:
            termo.push(".")  
        break;
    }
    const elemento = String(termo).split(",").join(" ").replace(/ /g ,"")
    visor.innerHTML = `${elemento.replace(".",",")}`
    const t1 = String(elem_1).split(",").join(" ").replace(/ /g,"")
    const t2 = String(elem_2).split(",").join(" ").replace(/ /g ,"")
    a = Number(t1)
    b = Number(t2)

    console.log(elem_1)
    console.log(b)

}

function operation(op) { 
    const elemento = String(termo).split(",").join(" ").replace(/ /g ,"")
    switch (op) {
        case 0:            //sum
            termo = elem_2
            operador = "sum"
            visor.innerHTML = ""
            antecessor.style.transform = "translateY(-92px)"
            antecessor.innerHTML = `${elemento.replace(".",",")}`
            break;
        case 1:            //subs
            termo = elem_2
            operador = "subs"
            visor.innerHTML = ""
            antecessor.style.transform = "translateY(-92px)"
            antecessor.innerHTML = `${elemento.replace(".",",")}`
            break;
        case 2:            //mult
            termo = elem_2
            operador = "mult"
            visor.innerHTML = ""
            antecessor.style.transform = "translateY(-92px)"
            antecessor.innerHTML = `${elemento.replace(".",",")}`
            break;
        case 3:            //divider
            termo = elem_2
            operador = "divider"
            visor.innerHTML = ""
            antecessor.style.transform = "translateY(-92px)"
            antecessor.innerHTML = `${elemento.replace(".",",")}`
            break;
        case 4:            //pow
            termo = elem_2
            operador = "pow"
            visor.innerHTML = ""
            antecessor.style.transform = "translateY(-92px)"
            antecessor.innerHTML = `${elemento.replace(".",",")}`
            break;
        case 5:            //sqrt
            termo = elem_2
            operador = "sqrt"
            visor.innerHTML = ""
            antecessor.style.transform = "translateY(-92px)"
            antecessor.innerHTML = `${elemento.replace(".",",")}`
        break;
    }
}

function result() {
    antecessor.style.transform = "translateY(-150px)"
    switch (operador){
        case "sum":
            sum()
            a = resultado
            antecessor.innerHTML = `${a - b}`
            break;
       case "subs":
            subs()
            a = resultado
            antecessor.innerHTML = `${a + b}`
            break;
        case "mult":
            multiply()
            a = resultado
            antecessor.innerHTML = `${a / b}`
            break;
        case "divider":
            divider()
            a = resultado
            antecessor.innerHTML = `${a * b}`
            break;
        case "pow":
            pow()
            a = resultado
            antecessor.innerHTML = `${Math.sqrt(a)}`
            break;
        case "sqrt":
            sqrt()
            a = resultado
            antecessor.innerHTML = `${Math.pow(a,2)}`
        break;
    }

    function sum() {
        resultado = a + b;
    }
    function subs() {
        resultado = a - b;
    }
    function multiply() {
        resultado = a * b;
    }
    function divider() {
        resultado = a / b;
    }
    function sqrt() {
        resultado = Math.sqrt(a);
    }
    function pow() {
        resultado = Math.pow(a,2);
    }

    visor.innerHTML = ""
    visor.innerHTML = `${resultado.toString().replace(".",",")}`
    
}

function clean() {
    antecessor.innerHTML = ""
    visor.innerHTML = ""
    elem_1.length = 0
    elem_2.length = 0
    termo = elem_1
}
    
function backspace() {
    termo.pop()
    const elemento = String(termo).split(",").join(" ").replace(/ /g ,"")
    visor.innerHTML = `${elemento.replace(".",",")}`
    if (termo.length == 0) {
        antecessor.style.transform = "translateY(-92px)"
    }
}