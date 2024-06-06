const ROWS = 16;
const COLS = 16

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

createGrid(ROWS, COLS);