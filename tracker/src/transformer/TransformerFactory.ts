import Config, {Type} from "../Config";
import Transformer from "./Transformer";
import CompositeTransformer from "./CompositeTransformer";

export default class TransformerFactory {
    constructor(
        private transformersMap: Map<string, Transformer>
    ) {
    }

    fromConfig(config: Config): CompositeTransformer {
        return new CompositeTransformer(
            config
                .transformers
                .filter(transformer => this.transformersMap.has(transformer as Type))
                .map(transformer => this.transformersMap.get(transformer)!)
        );
    }
}