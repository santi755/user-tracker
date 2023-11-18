"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class ErrorLogger {
    Warn(message) {
        this.saveMessage(message);
    }
    Info(message) {
        this.saveMessage(message);
    }
    Error(message) {
        this.saveMessage(message);
    }
    Fatal(message) {
        this.saveMessage(message);
    }
    saveMessage(message) {
        fs_1.default.appendFileSync("../file/track.log", message);
    }
}
exports.default = ErrorLogger;
