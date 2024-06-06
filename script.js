function createGrid(rows, cols) {
    const container = document.querySelector(".container");
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for (let j = 0; j < cols; j++) {
            const pixel = document.createElement("div");
            pixel.classList.toggle("pixel");
            pixel.addEventListener("mouseover", e => {
                pixel.style.backgroundColor = "black";
            })
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

function getNumber(msg) {
    return prompt(msg);
}

const btn = document.querySelector("button");
btn.addEventListener("click", e => {
    let rows = getNumber("Number of rows?");
    while (rows > 100) {
        rows = getNumber("The number must be lower than 100");
    }
    let cols = getNumber("Number of cols?");
    while (cols > 100) {
        cols = getNumber("The number must be lower than 100");
    }
    createGrid(rows, cols);
})