"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompositeTransformer_1 = __importDefault(require("./CompositeTransformer"));
class TransformerFactory {
    constructor(transformersMap) {
        this.transformersMap = transformersMap;
    }
    fromConfig(config) {
        return new CompositeTransformer_1.default(config
            .transformers
            .filter(transformer => this.transformersMap.has(transformer))
            .map(transformer => this.transformersMap.get(transformer)));
    }
}
exports.default = TransformerFactory;
