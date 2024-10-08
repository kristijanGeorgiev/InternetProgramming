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