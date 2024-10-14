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
}

document.addEventListener("DOMContentLoaded", setupInfrastructure);
