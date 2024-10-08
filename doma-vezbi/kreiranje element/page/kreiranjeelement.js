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