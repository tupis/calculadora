var teclas = document.querySelector(".teclas").addEventListener('click', adicionar())
var arr = []

function adicionar(){
    let teclas = document.querySelector(".teclas").value
    arr.push(teclas)
    console.log(arr)
}