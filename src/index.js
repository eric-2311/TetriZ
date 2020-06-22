// Default game grid, matrix of empty objects
let grid = [
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
    const gridObj = document.getElementById('gameGrid');
    gridObj.innerHTML = '';

    grid.forEach(row => {
        
        // debugger
        const rowObj = document.createElement('div');
        rowObj.classList.add('g-row');
        gridObj.appendChild(rowObj);

        row.forEach(pos => {
            const posObj = document.createElement('div');
            posObj.classList.add('g-pos');
            
            // Rendering Tetriminos based on type 
            if (pos.type) {
                posObj.classList.add(pos.type)
            }
            rowObj.appendChild(posObj);
        })
    })
}

// Start with an empty object Tetrimino
let playTetrimino = {};

// Ensures grid renders upon load
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        // debugger
        if (playTetrimino.type) {
            // debugger
            move('down')
        } else {
            // debugger
            playTetrimino = {
                ...generateTetrimino()
            // debugger
            }
            placeTetrimino()
        }

        newGrid();
    }, 200);
    
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
// 0 is a falsey value
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
    const currentTetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];
    // debugger
    return currentTetrimino;
}

// Placing a Tetrimino and re-rendering a new game grid with it
const placeTetrimino = () => {
    grid = grid.map((row, rowIdx) => {
        return row.map((pos, posIdx) => {
            if (rowIdx < 2 && posIdx > 2 && playTetrimino.block[rowIdx][posIdx - 3]) {
                return playTetrimino;
            } else {
                return {};
            }
        })
    })
}

// Using a switch statement to determine how each Tetrimino is moving and render accordingly
const move = dir => {
    switch(dir){
        case 'down':
        for (let i = grid.length - 1; i >= 0; i--) {
            for (let j = grid[i].length - 1; j >= 0; j--) {
                let moving = grid[i][j] 
                if (moving.type && (i + 1) < grid.length) {
                    grid[i + 1][j] = moving;
                    grid[i][j] = {};
                } else if (moving.type && (i + 1) >= grid.length) {
                    // Why do my Tetriminos stall and re-render before reaching the bottom?
                    playTetrimino = {};
                    return;
                }
            }
        }
    }
}