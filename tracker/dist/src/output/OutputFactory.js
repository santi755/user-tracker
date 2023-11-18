"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompositeOutput_1 = __importDefault(require("./CompositeOutput"));
const Config_1 = require("../Config");
const FileOutput_1 = __importDefault(require("./FileOutput"));
class OutputFactory {
    static fromConfig(config) {
        return new CompositeOutput_1.default(config
            .output
            .reduce((acc, input) => {
            if (Config_1.Types.FileType === input.type) {
                acc.push(new FileOutput_1.default(input.value));
            }
            if (Config_1.Types.Elastic === input.type) {
            }
            return acc;
        }, []));
    }
}
exports.default = OutputFactory;
