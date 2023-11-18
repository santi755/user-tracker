import Transformer from "./Transformer";

export default class CompositeTransformer implements Transformer {
    constructor(private readonly transformers: Array<Transformer>) {
    }

    async transform(input: any): Promise<any> {
        return this.transformers.reduce(
            (accumulator, transformer) => transformer.transform(accumulator),
            input
        );
    }
}