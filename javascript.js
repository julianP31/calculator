
let firstNumbers;
let operatorUsed;
let operationResult;
let operationRealized = true
const miniscreen = document.querySelector(".miniscreen")
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
        ChangeOperationRealized()
        firstNumbers = Number($display.textContent)
        operatorUsed =operators[operator.textContent]
        ShowMiniScreen (firstNumbers, operator.textContent)
        $display.textContent= ""
        
        // console.log(operators[operator.textContent](firstNumbers,Number( $display.textContent)))
    })
})

const $result = document.querySelector(".result").addEventListener("click", function resultado(){
    if(operationRealized === false){
    miniscreen.textContent += Number($display.textContent) 
    operationResult = $display.textContent= operate(operatorUsed, firstNumbers, Number($display.textContent))
    $display.textContent= operationResult
    operatorUsed = ""
    ChangeOperationRealized()
} else if (operationRealized === true){
    miniscreen.textContent = operationResult
}
    
})

function addElement(value) {
    $display.textContent += value
}

function ShowMiniScreen (value, operator){
    
    miniscreen.textContent = `${value}${operator}`

}

function operate(operator, n1, n2) {
    if (operator ===""){
        return operationResult
    }
    return operator(n1, n2)
}

let operators = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => n1 / n2,
}

function clearAll(){
    $display.textContent = ""
    miniscreen.textContent = ""
}

function ChangeOperationRealized(){
    if (operationRealized === false){
        return operationRealized = true
    } else if (operationRealized ===true) {
        return operationRealized = false
    }
}
