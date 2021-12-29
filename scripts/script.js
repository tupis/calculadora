var elem_1 = []
var elem_2 = []

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

            break;
        case 3:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 8:

            break;
        case 9:

            break;      
    }
    visor.innerHTML = `${elem_1}`
}

console.log(elem_1)

function limpar(){
    const visor = document.querySelector(".visor")
    visor.innerHTML = ""
    elem_1 = []
}