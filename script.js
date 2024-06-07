function deleteGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    });
}

let iteration = 0;
function getRand_255(iteration) {
    return Math.floor(Math.random() * (Math.max(0, 255 - 255 / 10 * iteration))) + 1;
};
    
function createGrid(rows, cols) {
    deleteGrid();
    const container = document.querySelector(".container");
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for (let j = 0; j < cols; j++) {
            const pixel = document.createElement("div");
            pixel.classList.toggle("pixel");
            pixel.addEventListener("mouseover", e => {
                pixel.style.backgroundColor = `rgb(${getRand_255(iteration)}, ${getRand_255(iteration)}, ${getRand_255(iteration)})`;
                iteration += 1;
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
    iteration = 0;
    createGrid(rows, cols);
})

const clean_btn = document.querySelector(".clean");
function clean_grid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
}
clean_btn.addEventListener("click", e => {
    clean_grid();
    iteration = 0;
});
