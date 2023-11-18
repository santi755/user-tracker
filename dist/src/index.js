"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const ErrorLogger_1 = __importDefault(require("./logger/ErrorLogger"));
const logFilePath = path_1.default.join(__dirname, "file", "track.log");
const logger = new ErrorLogger_1.default(logFilePath);
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
exports.default = logger;
