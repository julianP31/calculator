
let numbers = [];
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
        pushNumberToArray(numbers)
        numbersLimitator(numbers,2)
        operatorUsed =operators[operator.textContent]
        ShowMiniScreen (numbers, operator.textContent)
        $display.textContent= ""
        
        // console.log(operators[operator.textContent](numbers,Number( $display.textContent)))
    })
})
function pushNumberToArray(array) {
    if (array.length >1 && Number($display.textContent)){
        array.shift()
        array.push( Number($display.textContent))
    } 
     if (array.length <=2 ){
        array.push( Number($display.textContent))
    }
}
const $result = document.querySelector(".result").addEventListener("click", function resultado(){
    if(operationRealized === false){
    pushNumberToArray(numbers)
    miniscreen.textContent += numbers[1]
    operationResult = operate(operatorUsed, numbers[0], numbers[1])
    $display.textContent= operationResult
    operatorUsed = ""
    numbersLimitator(numbers, 1)
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
    "/": function divide(n1, n2){
        if (n2 === 0){
            return divideError()
        } 
        return n1 / n2
    }
}

function clearAll(){
    $display.textContent = ""
    miniscreen.textContent = ""
    numbers = []
}

function ChangeOperationRealized(){
    if (operationRealized === false){
        return operationRealized = true
    } else if (operationRealized ===true) {
        return operationRealized = false
    }
}

function divideError(){
    clearAll()
    numbers.push ()
    return ShowMiniScreen("cant divide for ",0)
}

function numbersLimitator(array, i){
    for (let index = i; index <= array.length; index++) {
        array.shift()
    }
}


