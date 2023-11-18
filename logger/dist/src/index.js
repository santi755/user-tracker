"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class ErrorLogger {
    logError(message) {
        console.error(`[Error Logger]: ${message}`);
    }
}
exports.Error = new ErrorLogger();
