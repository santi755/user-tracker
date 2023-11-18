"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("../Config");
const FileInputReader_1 = __importDefault(require("./FileInputReader"));
const CompositeInputReader_1 = __importDefault(require("./CompositeInputReader"));
class InputReaderFactory {
    static fromConfig(config) {
        return new CompositeInputReader_1.default(config
            .input
            .reduce((acc, input) => {
            if (Config_1.Types.FileType === input.type) {
                acc.push(new FileInputReader_1.default(input.value));
            }
            return acc;
        }, []));
    }
}
exports.default = InputReaderFactory;
