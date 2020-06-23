import Game from './Game.js';

// Ensures grid renders upon load
document.addEventListener("DOMContentLoaded", () => {
    const newGame = new Game;

    setInterval(() => {
        // debugger
        if (newGame.playTetrimino.type) {
            debugger
            newGame.move('drop')
        } else {
            debugger
            newGame.playTetrimino = { ...generateTetrimino() } 
            newGame.placeTetrimino()
        }

        newGame.newGrid();
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
    lTetrimino,
    jTetrimino,
    tTetrimino,
    sqTetrimino
];

// Generating a Tetrimino at random
const generateTetrimino = () => {
    const currentTetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];
    debugger
    return currentTetrimino;
}



