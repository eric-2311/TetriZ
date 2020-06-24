/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n    constructor(game){\n        this.game = game;\n        this.inputMove = 'drop';\n\n        // Start with an empty object Tetrimino\n        this.playTetrimino = {};\n\n        // Default game grid, matrix of empty objects\n        this.grid = [\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n        ];\n    }\n\n    // Creating new div elements and appending to render rows and positions\n    newGrid() {\n        const gridObj = document.getElementById('gameGrid');\n        gridObj.innerHTML = '';\n\n        this.grid.forEach(row => {\n            \n            // debugger\n            const rowObj = document.createElement('div');\n            rowObj.classList.add('g-row');\n            gridObj.appendChild(rowObj);\n\n            row.forEach(pos => {\n                const posObj = document.createElement('div');\n                posObj.classList.add('g-pos');\n                \n                // Rendering Tetriminos based on type \n                if (pos.type) {\n                    posObj.classList.add(pos.type)\n                }\n                rowObj.appendChild(posObj);\n            })\n        })\n    }\n\n    // Placing a Tetrimino and re-rendering a new game grid with it\n    placeTetrimino() {\n        this.grid = this.grid.map((row, rowIdx) => {\n            return row.map((pos, posIdx) => {\n                if (rowIdx < 2 && posIdx > 2 && this.playTetrimino.block[rowIdx][posIdx - 3]) {\n                    return this.playTetrimino;\n                } else {\n                    return {};\n                }\n            })\n        })\n    }\n\n    // Using a switch statement to determine how each Tetrimino is moving and render accordingly\n    move(dir) {\n        switch(dir){\n            case 'drop':\n            for (let i = this.grid.length - 1; i >= 0; i--) {\n                for (let j = this.grid[i].length - 1; j >= 0; j--) {\n                    // let moving = grid[i][j] \n                    if (this.grid[i][j].type && (i + 1) < this.grid.length) {\n                        this.grid[i + 1][j] = this.grid[i][j];\n                        this.grid[i][j] = {};\n                    } else if (this.grid[i][j].type && (i + 1) >= this.grid.length) {\n                        // Why do my Tetriminos stall and re-render before reaching the bottom?\n                        // debugger\n                        this.playTetrimino = {};\n                        return;\n                    }\n                }\n            }\n            break;\n\n            case 'right':\n                for (let i = this.grid.length - 1; i >= 0; i--) {\n                    if (!this.grid[i][this.grid[i].length - 1].type) {\n                        for (let j = this.grid[i].length - 1; j >= 0; j--) {\n                            if (this.grid[i][j].type && (!this.grid[i - 1][this.grid[i].length - 1].type)) {\n                                this.grid[i][j + 1] = this.grid[i][j];\n                                this.grid[i][j] = {};\n                                this.inputMove = 'drop';\n                                }    \n                        }\n                    } else if (this.grid[i][this.grid[i].length - 1].type && this.grid[i][this.grid[i].length - 1].type === this.playTetrimino.type) {\n                            // debugger\n                            this.inputMove = 'drop';\n                            return;\n                    }\n                }\n            break;\n\n            case 'left':\n                for (let i = 0; i < this.grid.length; i++) {\n                   for (let j = 0; j < this.grid[i].length ; j++) {\n                       if (j > 0 && this.grid[i][j].type && this.grid[i][j].type === this.playTetrimino.type) {\n                            this.grid[i][j - 1] = this.grid[i][j];\n                            this.grid[i][j] = {};\n                            this.inputMove = 'drop'   \n                       } else if (i === this.grid.length - 1 || this.grid[i + 1][0].type) {\n                            this.inputMove = 'drop';\n                            return;\n                       }\n                   }\n                }\n            break;\n\n            // case 'up':\n            //     for (let i = 0; i < this.grid.length; i++) {\n            //         for (let j = 0; j < this.grid[i].length; j++) {\n            //             if (this.grid[i][j].type) {\n            //                 this.grid[j][i] = this.playTetrimino.block[i][j];\n            //                 this.grid[j][i] = {}\n            //                 // this.placeTetrimino()\n            //                 console.log(this.grid)\n            //                 this.inputMove = 'drop'\n                            \n            //             } else if (this.playTetrimino.block[j] === undefined) {\n            //                 continue;\n            //             } else if (this.grid[i][j] === undefined){\n            //                 continue; \n            //             }\n            //         }\n            //     }\n            // break;\n        }\n    }\n\n    // Rotating a Tetrimino\n    transpose(arr) {\n        return arr[0].map((col, i) => {\n            return arr.map(row => row[i])\n        })\n    }\n\n    // Adding an event listener for key input to determine move function\n    handleInput() {\n        document.addEventListener(\"keydown\", (e) => {\n            const input = e.key;\n\n            switch(input){\n                case 'ArrowUp':\n                    // debugger\n                    this.playTetrimino.block = this.transpose(this.playTetrimino.block);\n                    // this.inputMove = 'up'\n                    // debugger\n                    console.log(this.transpose(this.playTetrimino.block))\n                    this.placeTetrimino();\n                    // this.newGrid();\n                    console.log('up key');\n                    break;\n                case 'ArrowDown':\n                    console.log('down key');\n                    break;\n                case 'ArrowRight':\n                    this.inputMove = 'right'\n                    console.log('right key');\n                    break;\n                case 'ArrowLeft':\n                    this.inputMove = 'left';\n                    console.log('left key');\n                    break;\n            }\n        })\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Game_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Ensures grid renders upon load\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const newGame = new _Game_js__WEBPACK_IMPORTED_MODULE_0___default.a;\n    newGame.handleInput();\n\n    setInterval(() => {\n        // debugger\n        if (newGame.playTetrimino.type) {\n            // debugger\n            newGame.move(newGame.inputMove)\n            // newGame.move(newGame.inputMove)\n        } else {\n            // debugger\n            newGame.playTetrimino = { ...generateTetrimino() } \n            newGame.placeTetrimino()\n        }\n\n        newGame.newGrid();\n    }, 100);\n    \n});\n\n// Square Tetrimino \nconst sqTetrimino = {\n    type: 'sq',\n    block: [\n        [1, 1],\n        [1, 1]\n    ]\n}\n\n// T-Tetrimino\n// 0 is a falsey value\nconst tTetrimino = {\n    type: 't',\n    block: [\n        [0, 1, 0],\n        [1, 1, 1]\n    ]\n}\n\n// J-Tetrimino\nconst jTetrimino = {\n    type: 'j',\n    block: [\n        [1, 0, 0],\n        [1, 1, 1]\n    ]\n}\n\n// L-Tetrimino\nconst lTetrimino = {\n    type: 'l',\n    block: [\n        [0, 0, 1],\n        [1, 1, 1]\n    ]\n}\n\n// Z-Tetrimino\nconst zTetrimino = {\n    type: 'z',\n    block: [\n        [1, 1, 0],\n        [0, 1, 1]\n    ]\n}\n\n// Reverse Z-Tetrimino\nconst rZTetrimino = {\n    type: 'rz',\n    block: [\n        [0, 1, 1],\n        [1, 1, 0]\n    ]\n}\n\n// Line Tetrimino\nconst lnTetrimino = {\n    type: 'ln',\n    block: [\n        [1, 1, 1, 1],\n        [0, 0, 0, 0]\n    ]\n}\n\n// Array of all Tetriminos\nconst tetriminos = [\n    lnTetrimino,\n    rZTetrimino,\n    zTetrimino,\n    lTetrimino,\n    jTetrimino,\n    tTetrimino,\n    sqTetrimino\n];\n\n// Generating a Tetrimino at random\nconst generateTetrimino = () => {\n    const currentTetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];\n    // debugger\n    return currentTetrimino;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });