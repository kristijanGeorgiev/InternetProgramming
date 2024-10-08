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