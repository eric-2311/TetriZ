class Game {
    constructor(game){
        this.game = game;
        this.inputMove = 'drop';

        // Start with an empty object Tetrimino
        this.playTetrimino = {};

        // Default game grid, matrix of empty objects
        this.grid = [
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
    }

    // Creating new div elements and appending to render rows and positions
    newGrid() {
        const gridObj = document.getElementById('gameGrid');
        gridObj.innerHTML = '';

        this.grid.forEach(row => {
            
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

    // Placing a Tetrimino and re-rendering a new game grid with it
    placeTetrimino() {
        this.grid = this.grid.map((row, rowIdx) => {
            return row.map((pos, posIdx) => {
                if (rowIdx < 2 && posIdx > 2 && this.playTetrimino.block[rowIdx][posIdx - 3]) {
                    return this.playTetrimino;
                } else {
                    return {};
                }
            })
        })
    }

    // Using a switch statement to determine how each Tetrimino is moving and render accordingly
    move(dir) {
        switch(dir){
            case 'drop':
            for (let i = this.grid.length - 1; i >= 0; i--) {
                for (let j = this.grid[i].length - 1; j >= 0; j--) {
                    // let moving = grid[i][j] 
                    if (this.grid[i][j].type && (i + 1) < this.grid.length) {
                        this.grid[i + 1][j] = this.grid[i][j];
                        this.grid[i][j] = {};
                    } else if (this.grid[i][j].type && (i + 1) >= this.grid.length) {
                        // Why do my Tetriminos stall and re-render before reaching the bottom?
                        // debugger
                        this.playTetrimino = {};
                        return;
                    }
                }
            }
            break;

            case 'right':
                for (let i = this.grid.length - 1; i >= 0; i--) {
                    if (!this.grid[i][this.grid[i].length - 1].type) {
                        for (let j = this.grid[i].length - 1; j >= 0; j--) {
                            if (this.grid[i][j].type && (!this.grid[i - 1][this.grid[i].length - 1].type)) {
                                this.grid[i][j + 1] = this.grid[i][j];
                                this.grid[i][j] = {};
                                this.inputMove = 'drop';
                                }    
                        }
                    } else if (this.grid[i][this.grid[i].length - 1].type && this.grid[i][this.grid[i].length - 1].type === this.playTetrimino.type) {
                            // debugger
                            this.inputMove = 'drop';
                            return;
                    }
                }
            break;

            case 'left':
                for (let i = 0; i < this.grid.length; i++) {
                   for (let j = 0; j < this.grid[i].length ; j++) {
                       if (j > 0 && this.grid[i][j].type && this.grid[i][j].type === this.playTetrimino.type) {
                            this.grid[i][j - 1] = this.grid[i][j];
                            this.grid[i][j] = {};
                            this.inputMove = 'drop'   
                       } else if (i === this.grid.length - 1 || this.grid[i + 1][0].type) {
                            this.inputMove = 'drop';
                            return;
                       }
                   }
                }
            break;

            // case 'up':
            //     for (let i = 0; i < this.grid.length; i++) {
            //         for (let j = 0; j < this.grid[i].length; j++) {
            //             if (this.grid[i][j].type) {
            //                 this.grid[j][i] = this.playTetrimino.block[i][j];
            //                 this.grid[j][i] = {}
            //                 // this.placeTetrimino()
            //                 console.log(this.grid)
            //                 this.inputMove = 'drop'
                            
            //             } else if (this.playTetrimino.block[j] === undefined) {
            //                 continue;
            //             } else if (this.grid[i][j] === undefined){
            //                 continue; 
            //             }
            //         }
            //     }
            // break;
        }
    }

    // Rotating a Tetrimino
    transpose(arr) {
        return arr[0].map((col, i) => {
            return arr.map(row => row[i])
        })
    }

    // Adding an event listener for key input to determine move function
    handleInput() {
        document.addEventListener("keydown", (e) => {
            const input = e.key;

            switch(input){
                case 'ArrowUp':
                    // debugger
                    this.playTetrimino.block = this.transpose(this.playTetrimino.block);
                    // this.inputMove = 'up'
                    // debugger
                    console.log(this.transpose(this.playTetrimino.block))
                    this.placeTetrimino();
                    // this.newGrid();
                    console.log('up key');
                    break;
                case 'ArrowDown':
                    console.log('down key');
                    break;
                case 'ArrowRight':
                    this.inputMove = 'right'
                    console.log('right key');
                    break;
                case 'ArrowLeft':
                    this.inputMove = 'left';
                    console.log('left key');
                    break;
            }
        })
    }
}

module.exports = Game;