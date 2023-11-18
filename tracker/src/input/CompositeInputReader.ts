import InputReader from "./InputReader";
import Input from "./Input";

export default class CompositeInputReader implements InputReader {
    constructor(private readonly readers: Array<InputReader>) {
    }

    async read(): Promise<Array<Input>> {
        const inputs = [];
        for (const reader of this.readers) {
            const input = await reader.read();

            inputs.push(...input);
        }

        return inputs;
    }
}