const executeChangeText = function() {
    const textChangeInput = document.getElementById("text-change-input");
    const textChangeOutput = document.getElementById("changeable-text");

    if (textChangeInput.value === "") {
        textChangeOutput.textContent = "No text entered!";
        textChangeOutput.style.color = "red";
        return;
    }

    textChangeOutput.textContent = textChangeInput.value;
    textChangeOutput.style.color = "black";
}

// const executeChangeColor = () => {
//     // look for a red box
//     const boxes = document.getElementsByClassName("color-box-red");
//     if (boxes.length === 0) {
//         //no red boxes found, look for green boxes
//         const boxes = document.getElementsByClassName("color-box-green");
//         if (boxes.length === 0) {
//             //no green boxes found, we messed up
//             alert("No boxes found!");
//             return;
//         }
//         const box = boxes[0];
//         box.classList.remove("color-box-green");
//         box.classList.add("color-box-red");
//         return;
//     }
//     const box = boxes[0];
//     box.classList.remove("color-box-red");
//     box.classList.add("color-box-green");
// }

const executeChangeColor = () => {
    const boxes = document.getElementsByClassName("color-box");
    if (boxes.length === 0) {
        alert("No boxes found!");
        return;
    }
    const box = boxes[0];
    box.classList.toggle("color-box-red");
    box.classList.toggle("color-box-green");
}

const executeDisableInput = () => {
    const input = document.getElementById("input-field");
    input.disabled = !input.disabled;
}

const executeAddItem = () => {
    const list = document.getElementById("list-container");
    for (let index = 0; index < 3; index++) {
        const item = document.createElement("li");
        item.textContent = `New item ${index+1}`;
        const button = document.createElement("button");
        button.textContent = "X";
        button.addEventListener("click", () => {
            list.removeChild(item);
        });
        item.appendChild(button);
        list.appendChild(item);
    }
}

const executeSwapImage = () => {
    const widthInput = document.getElementById("image-width");
    const width = parseInt(widthInput.value, 10);
    const heightInput = document.getElementById("image-height");
    const height = parseInt(heightInput.value, 10);
    const header = document.querySelector(".swap-image h2");

    if (isNaN(width) || isNaN(height)) {
        header.textContent = "Invalid dimensions!";
        header.style.color = "red";
        return;
    }

    const image = document.getElementById("swappable-image");
    image.src = `https://placehold.co/${width}x${height}`;
    const circumference = 2 * (width + height);
    header.textContent = `Image dimensions: ${width}x${height} with a circumference of ${circumference}`;
    header.style.color = "black";
}

const setupInfrastructure = function() {
    console.log("DOM fully loaded and parsed");

    const changeTextBtn = document.getElementById("change-text-btn");
    changeTextBtn.addEventListener("click", executeChangeText);

    const changeColorBtn = document.getElementById("change-color-btn");
    changeColorBtn.addEventListener("click", executeChangeColor);

    const disableInputBtn = document.getElementById("disable-input-btn");
    disableInputBtn.addEventListener("click", executeDisableInput);

    const addItemBtn = document.getElementById("add-item-btn");
    addItemBtn.addEventListener("click", executeAddItem);

    const swapImageBtn = document.getElementById("swap-image-btn");
    swapImageBtn.addEventListener("click", executeSwapImage);
}

document.addEventListener("DOMContentLoaded", setupInfrastructure);