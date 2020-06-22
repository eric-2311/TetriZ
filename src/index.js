// Default game grid
const grid = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
];

// Creating new div elements and appending to render rows and positions
const newGrid = () => {
    grid.forEach(row => {
        const gridObj = document.getElementById('gameGrid');
        const rowObj = document.createElement('div');
        rowObj.classList.add('g-row');
        gridObj.appendChild(rowObj);

        row.forEach(pos => {
            const posObj = document.createElement('div');
            posObj.classList.add('g-pos');
            rowObj.appendChild(posObj)
        })
    })
}

// Ensures grid renders upon load
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        newGrid();
    }, 1000);
    
});

// Square Tetrimino
const sqTetrimino = {
    type: 'sq',
    block: [
        [1, 1],
        [1, 1]
    ]
}

// T-Tetrimino
const tTetrimino = {
    type: 't',
    block: [
        [0, 1, 0],
        [1, 1, 1]
    ]
}

// J-Tetrimino
const jTetrimino = {
    type: 'j',
    block: [
        [1, 0, 0],
        [1, 1, 1]
    ]
}

// L-Tetrimino
const lTetrimino = {
    type: 'l',
    block: [
        [0, 0, 1],
        [1, 1, 1]
    ]
}

// Z-Tetrimino
const zTetrimino = {
    type: 'z',
    block: [
        [1, 1, 0],
        [0, 1, 1]
    ]
}

// Reverse Z-Tetrimino
const rZTetrimino = {
    type: 'rz',
    block: [
        [0, 1, 1],
        [1, 1, 0]
    ]
}

// Line Tetrimino
const lnTetrimino = {
    type: 'ln',
    block: [
        [1, 1, 1, 1],
        [0, 0, 0, 0]
    ]
}

// Array of all Tetriminos
const tetriminos = [
    lnTetrimino,
    rZTetrimino,
    zTetrimino,
    lnTetrimino,
    jTetrimino,
    tTetrimino,
    sqTetrimino
];

// Generating a Tetrimino at random
const generateTetrimino = () => {
    const currentTetrimino = tetriminos[Math.floor(Math.random * tetriminos.length)]
}