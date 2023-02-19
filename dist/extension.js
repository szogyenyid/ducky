/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
let duckyActivator;
let duckyRunningSpace;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    console.log('Congratulations, your extension "ducky" is now active!');
    duckyActivator = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    duckyRunningSpace = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -1000);
    context.subscriptions.push(duckyActivator);
    context.subscriptions.push(duckyRunningSpace);
    vscode.commands.registerCommand('ducky.activateDucky', () => {
        runDucky();
    });
    // update status bar item once at start
    duckyActivator.text = `$(ducky-icon)`;
    duckyActivator.command = 'ducky.activateDucky';
    duckyActivator.tooltip = 'Toggle Ducky';
    duckyActivator.show();
}
exports.activate = activate;
function runDucky() {
    duckyRunningSpace.show();
    var steps = 0;
    var reverse = false;
    var running = setInterval(() => {
        var duckySteps = "_ ".repeat(steps);
        var icon = !reverse ? "$(ducky-icon)" : "$(ducky-reverse-icon)";
        duckyRunningSpace.text = `${duckySteps} ${icon} `;
        duckyRunningSpace.color = "yellow";
        if (steps > 10 && !reverse) {
            reverse = true;
        }
        reverse ? steps-- : steps++;
        if (steps < 0 && reverse) {
            duckyRunningSpace.text += " < It was a nice little walk, thanks!";
            setTimeout(() => {
                clearInterval(running);
                duckyRunningSpace.hide();
            }, 2000);
        }
    }, 200);
}
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map