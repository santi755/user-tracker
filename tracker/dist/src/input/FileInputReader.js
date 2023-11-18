"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IP_1 = __importDefault(require("../transformer/geolocation/IP"));
const fs_1 = __importDefault(require("fs"));
class FileInputReader {
    constructor(filePath, offset = 0) {
        this.filePath = filePath;
        this.offset = offset;
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const fileContent = yield this.readFile();
            return fileContent.map(input => {
                const parsedInput = JSON.parse(input);
                return {
                    timestamp: parsedInput.timestamp,
                    level: parsedInput.level,
                    message: parsedInput.message,
                    ip: new IP_1.default(parsedInput.ip)
                };
            });
        });
    }
    readFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const content = fs_1.default.readFileSync(this.filePath, {
                encoding: 'utf-8',
                flag: 'r'
            })
                .split('\n')
                .slice(this.offset)
                .slice(0, -1);
            this.offset += content.length;
            return content;
        });
    }
}
exports.default = FileInputReader;
