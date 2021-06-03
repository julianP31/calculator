
let firstNumbers;
let operatorUsed;

const $display = document.querySelector(".screen")
const $buttonclear = document.querySelector("#clear").addEventListener("click",function(){
    clearAll()
} )
const $buttonDeleteOne = document.querySelector("#delete-one").addEventListener("click", function(){
    str = $display.textContent
    $display.textContent = str.slice(0, -1)
})
const $buttons = document.querySelectorAll(".key")
$buttons.forEach((number) => {
    number.addEventListener("click", () => {
        addElement(number.textContent)
    })
})

const $operators = document.querySelectorAll(".operator")
$operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        firstNumbers = Number($display.textContent)
        operatorUsed =operators[operator.textContent]
        ShowMiniScreen (firstNumbers, operator.textContent)
        $display.textContent= ""
        // console.log(operators[operator.textContent](firstNumbers,Number( $display.textContent)))
    })
})

const $result = document.querySelector(".result").addEventListener("click", function resultado(){
    $display.textContent= operate(operatorUsed, firstNumbers, Number($display.textContent))

})

function addElement(value) {
    $display.textContent += value
}

function ShowMiniScreen (value, operator){
    const miniscreen = document.querySelector(".miniscreen")
    miniscreen.textContent = `${value}${operator}`

}

function operate(operator, n1, n2) {
    return operator(n1, n2)
}

let operators = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => n1 / n2,
}

function clearAll(){
    const miniscreen = document.querySelector(".miniscreen")
    $display.textContent = ""
    miniscreen.textContent = ""
}

