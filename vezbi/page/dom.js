const ChangeH1Text = function() {
    const textChangeInput = document.getElementById("h1-new");
    const textChangeOutput = document.getElementById("h1-text");

    if (textChangeInput.value === "") {
        textChangeOutput.textContent = "No text entered!";
        textChangeOutput.style.color = "red";
        return;
    }

    textChangeOutput.textContent = textChangeInput.value;
    textChangeOutput.style.color = "black";
}
const ChangeH1Color = function() {
    const textChangeOutput = document.getElementById("h1-text");
    textChangeOutput.style.color = "violet";
}
const ChangeH1BG = function() {
    const textChangeOutput = document.getElementById("h1-text");
    textChangeOutput.style.backgroundColor = "cyan";
}
const ChangeH2Text = function() {
    const textChangeInput = document.getElementById("h2-new");
    const textChangeOutput = document.getElementById("h2-text");

    if (textChangeInput.value === "") {
        textChangeOutput.textContent = "No text entered!";
        textChangeOutput.style.color = "red";
        return;
    }

    textChangeOutput.textContent = textChangeInput.value;
    textChangeOutput.style.color = "black";
}
const ChangeH2Color = function() {
    const textChangeOutput = document.getElementById("h2-text");
    textChangeOutput.style.color = "orange";
}
const ChangeH2BG = function() {
    const textChangeOutput = document.getElementById("h2-text");
    textChangeOutput.style.backgroundColor = "pink";
}
const ChangePText = function() {
    const textChangeInput = document.getElementById("p-new");
    const textChangeOutput = document.getElementById("p-text");

    if (textChangeInput.value === "") {
        textChangeOutput.textContent = "No text entered!";
        textChangeOutput.style.color = "red";
        return;
    }

    textChangeOutput.textContent = textChangeInput.value;
    textChangeOutput.style.color = "black";
}
const ChangePColor = function() {
    const textChangeOutput = document.getElementById("p-text");
    textChangeOutput.style.color = "red";
}
const ChangePBG = function() {
    const textChangeOutput = document.getElementById("p-text");
    textChangeOutput.style.backgroundColor = "purple";
}
const executeDisableInput = () => {
    const input = document.getElementById("input-field");
    input.disabled = !input.disabled;
}
const executeEnableInput = () => {
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
    changeTextBtn.addEventListener("click", ChangeH1Text);

    const changeColorBtn = document.getElementById("change-color-btn");
    changeColorBtn.addEventListener("click", ChangeH1Color);
    const changeH1BGbtn = document.getElementById("change-background-color-btn");
    changeH1BGbtn.addEventListener("click", ChangeH1BG);

    const ChangeH2TextBtn = document.getElementById("change-h2-text-btn");
    ChangeH2TextBtn.addEventListener("click", ChangeH2Text);

    const ChangeH2ColorBtn = document.getElementById("change-h2-color-btn");
    ChangeH2ColorBtn.addEventListener("click", ChangeH2Color);
    const ChangeH2BGbtn = document.getElementById("change-background-color-h2-btn");
    ChangeH2BGbtn.addEventListener("click", ChangeH2BG);
    const ChangePTextBtn = document.getElementById("change-p-text-btn");
    ChangePTextBtn.addEventListener("click", ChangePText);

    const ChangePColorBtn = document.getElementById("change-p-color-btn");
    ChangePColorBtn.addEventListener("click", ChangePColor);
    const ChangePBGBtn = document.getElementById("change-background-color-p-btn");
    ChangePBGBtn.addEventListener("click", ChangePBG);
    const disableInputBtn = document.getElementById("disable-input-btn");
    disableInputBtn.addEventListener("click", executeDisableInput);
    const enableInputBtn = document.getElementById("enable-input-btn");
    enableInputBtn.addEventListener("click", executeEnableInput);
    const addItemBtn = document.getElementById("add-item-btn");
    addItemBtn.addEventListener("click", executeAddItem);

    const swapImageBtn = document.getElementById("swap-image-btn");
    swapImageBtn.addEventListener("click", executeSwapImage);
}

document.addEventListener("DOMContentLoaded", setupInfrastructure);
