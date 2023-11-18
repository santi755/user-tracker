"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class ErrorLogger {
    constructor(path) {
        this.path = path;
    }
    Warn(message, ip) {
        this.saveMessage("WARN", message, ip);
    }
    Info(message, ip) {
        this.saveMessage("INFO", message, ip);
    }
    Error(message, ip) {
        this.saveMessage("ERROR", message, ip);
    }
    Fatal(message, ip) {
        this.saveMessage("FATAL", message, ip);
    }
    saveMessage(level, message, ip) {
        if (!fs_1.default.existsSync(this.path)) {
            fs_1.default.writeFileSync(this.path, "");
        }
        const content = JSON.stringify({
            timestamp: Date.now(),
            level: level,
            message: message,
            ip: ip,
        });
        fs_1.default.appendFileSync(this.path, `${content}\n`);
    }
}
exports.default = ErrorLogger;
