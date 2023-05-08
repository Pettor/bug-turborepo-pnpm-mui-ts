"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
var vite_1 = require("vite");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)(function (_a) {
    var mode = _a.mode, command = _a.command;
    return {
        plugins: [(0, plugin_react_swc_1.default)()],
        base: "./",
    };
});
