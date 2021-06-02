function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

function operate(operator, n1, n2) {
    return operator(n1, n2)
}

const display = document.querySelector(".screen")
const buttons = document.querySelectorAll(".key")
buttons.forEach((number) => {
    number.addEventListener("click", () => {
        addElement(number.textContent)
    })
})

function addElement(value){
    display.textContent += value
}


// funcion que guarda el primer numero al apretar algun operador {
// let firstNumber = display.textContent
// }


