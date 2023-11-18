import Output from "./Output";

export default class CompositeOutput implements Output {
    constructor(private readonly outputs: Array<Output>) {
    }

    async write(data: any): Promise<void> {
        for (const output of this.outputs) {
            await output.write(data);
        }
    }
}