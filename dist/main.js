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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Default game grid, matrix of empty objects\nlet grid = [\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],\n];\n\n// Creating new div elements and appending to render rows and positions\nconst newGrid = () => {\n    const gridObj = document.getElementById('gameGrid');\n    gridObj.innerHTML = '';\n\n    grid.forEach(row => {\n        \n        // debugger\n        const rowObj = document.createElement('div');\n        rowObj.classList.add('g-row');\n        gridObj.appendChild(rowObj);\n\n        row.forEach(pos => {\n            const posObj = document.createElement('div');\n            posObj.classList.add('g-pos');\n            \n            // Rendering Tetriminos based on type \n            if (pos.type) {\n                posObj.classList.add(pos.type)\n            }\n            rowObj.appendChild(posObj);\n        })\n    })\n}\n\n// Start with an empty object Tetrimino\nlet playTetrimino = {};\n\n// Ensures grid renders upon load\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    setInterval(() => {\n        // debugger\n        if (playTetrimino.type) {\n            // debugger\n            move('down')\n        } else {\n            // debugger\n            playTetrimino = {\n                ...generateTetrimino()\n            // debugger\n            }\n            placeTetrimino()\n        }\n\n        newGrid();\n    }, 200);\n    \n});\n\n// Square Tetrimino \nconst sqTetrimino = {\n    type: 'sq',\n    block: [\n        [1, 1],\n        [1, 1]\n    ]\n}\n\n// T-Tetrimino\n// 0 is a falsey value\nconst tTetrimino = {\n    type: 't',\n    block: [\n        [0, 1, 0],\n        [1, 1, 1]\n    ]\n}\n\n// J-Tetrimino\nconst jTetrimino = {\n    type: 'j',\n    block: [\n        [1, 0, 0],\n        [1, 1, 1]\n    ]\n}\n\n// L-Tetrimino\nconst lTetrimino = {\n    type: 'l',\n    block: [\n        [0, 0, 1],\n        [1, 1, 1]\n    ]\n}\n\n// Z-Tetrimino\nconst zTetrimino = {\n    type: 'z',\n    block: [\n        [1, 1, 0],\n        [0, 1, 1]\n    ]\n}\n\n// Reverse Z-Tetrimino\nconst rZTetrimino = {\n    type: 'rz',\n    block: [\n        [0, 1, 1],\n        [1, 1, 0]\n    ]\n}\n\n// Line Tetrimino\nconst lnTetrimino = {\n    type: 'ln',\n    block: [\n        [1, 1, 1, 1],\n        [0, 0, 0, 0]\n    ]\n}\n\n// Array of all Tetriminos\nconst tetriminos = [\n    lnTetrimino,\n    rZTetrimino,\n    zTetrimino,\n    lnTetrimino,\n    jTetrimino,\n    tTetrimino,\n    sqTetrimino\n];\n\n// Generating a Tetrimino at random\nconst generateTetrimino = () => {\n    const currentTetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];\n    // debugger\n    return currentTetrimino;\n}\n\n// Placing a Tetrimino and re-rendering a new game grid with it\nconst placeTetrimino = () => {\n    grid = grid.map((row, rowIdx) => {\n        return row.map((pos, posIdx) => {\n            if (rowIdx < 2 && posIdx > 2 && playTetrimino.block[rowIdx][posIdx - 3]) {\n                return playTetrimino;\n            } else {\n                return {};\n            }\n        })\n    })\n}\n\n// Using a switch statement to determine how each Tetrimino is moving and render accordingly\nconst move = dir => {\n    switch(dir){\n        case 'down':\n        for (let i = grid.length - 1; i >= 0; i--) {\n            for (let j = grid[i].length - 1; j >= 0; j--) {\n                let moving = grid[i][j] \n                if (moving.type && (i + 1) <= grid.length - 1) {\n                    grid[i + 1][j] = moving;\n                    grid[i][j] = {};\n                } \n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });