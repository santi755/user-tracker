interface Transformer {
    transform(input: any): Promise<any>;
}

export default Transformer;