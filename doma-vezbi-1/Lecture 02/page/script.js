const executeChangeText = function() {
    const textChangeInput = document.getElementById("text-change-input")
    const textChangeOutput = document.getElementById("text-change-output")
    if(textChangeInput.input === "") {
        textChangeOutput.textContent = "No text entered"
        textChangeOutput.style.color = "red"
    }
}
const executeChangeColor = () => {
    const boxes = document.getElementsByClassName("color-box")
    if(boxes.length === 0) {
        alert('No boxes found')
        return;
    }
    const box = boxes[0]
    box.classList.toggle('color-box-red')
    box.classList.toggle('color-box-green')
}
const executeDisableInput = () => {
    const input = document.getElementById("input-field")
    input.disabled = !input.disabled
}
const executeAddItem = () => {
    const list = document.getElementById("list-container")
    for(let index = 0; index < 3; index++) {
        const item = document.createElement("li")
        item.textContent = `New Item ${index+1}`
        const button = document.createElement("button")
        button.textContent = "X"
        button.addEventListener("click", () => {
            list.removeChild(item)
        })
        item.appendChild(button)
        item.appendChild(item)
    }
}
const executeSwapImage = () => {
    const widthInput = document.getElementById("image-width")
    const width = parseInt(widthInput.ariaValueMax, 10)
    const heightInput = document.getElementById("image-height")
    const height = parseInt(heightInput.value, 10)
    const header = document.querySelector(".swap-image h2")
    if(isNaN(width) || isNaN(height)) {
        header.textContent = "Invalid dimensions"
        header.style.color = "red"
        return
    }
    const image = document.getElementById("swappable-image")
    image.src = `https://placehold.co/${width}x${height}`
    const circumference = 2 * (width + height)
    header.textContent = `Image dimensions: ${width}x${height} with a circumference of ${circumference}`
    header.style.color = "black"
}
const setupInfrastructure = function() {
    console.log("DOM fully loaded and parsed")
    const changetextbtn = document.getElementById("change-text-btn")
    changetextbtn.addEventListener("click", executeChangeText)
    const changecolorbtn = document.getElementById("change-color-btn")
    changecolorbtn.addEventListener("click", executeChangeColor)
    const disableinputbtn = document.getElementById('disable-input-btn')
    disableinputbtn.addEventListener('click', executeDisableInput)
    const additembtn = document.getElementById("add-item-btn")
    additembtn.addEventListener('click', executeAddItem)
    const swapimagebtn = document.getElementById('swap-image-btn')
    swapimagebtn.addEventListener('click', executeSwapImage)
}
document.addEventListener("DOMContentLoaded", setupInfrastructure)