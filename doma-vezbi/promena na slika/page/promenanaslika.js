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