const displayNumbers = (event) => {
    const displayNumber = document.querySelector(".display h2")
    const buttonValue = event.target.textContent;
    if(displayNumber.textContent.length < 8) {
        if(displayNumber.textContent === 0) {
            displayNumber.textContent = buttonValue
            console,log(buttonValue)
        }
        else
        {
            displayNumber.textContent += buttonValue
            console.log(buttonValue)
        }
    }
    else
    {
        displayNumber.style.color = 'red'
    }
    setTimeout(() => {
        displayNumber.style.color = ""
    }, 1000)
}
const displayresult = () => {
    const display = document.querySelector(".display h2")
    const expression = display.textContent;
    if(expression === 0 || ['+','-','*','/'].includes(expression.slice(-1))) {
        alert('Invalid expression')
        console.log('Invalid expression')
        return
    }
    const result = eval(expression)
    if(result.toString().length > 8) {
        display.textContent = 'Overflow'
        display.style.color = 'red'
        console.log(`Overflow: ${result}`)
    }
    else {
        display.textContent = result;
        console.log(result)
        setTimeout(() => {
            alert('to start a new calculation, press clear')
        }, 1500)
    }
}
const cleardisplay = () => {
    const display = document.querySelector(".display h2")
    display.textContent = 0
    console.log('display cleared')
}
const setupInfrastructure = () => {
    const numberbuttons = document.querySelectorAll(".number")
    const operatorbuttons = document.querySelectorAll(".operator")
    const clearbutton = document.getElementById("clear-btn")
    const equalbutton = document.getElementById("equal-btn")
    numberbuttons.forEach(button => {
        button.addEventListener("click", displayNumbers)
    })
    operatorbuttons.forEach(button => {
        button.addEventListener("click", displayOperators)
    })
    equalbutton.addEventListener("click", displayresult)
    clearbutton.addEventListener('click', cleardisplay)
}
document.addEventListener("DOMContentLoaded", setupInfrastructure)