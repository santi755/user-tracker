import Output from "./Output";
import {Client} from "elasticsearch";

export default class ElasticOutput implements Output {
    constructor(private readonly client: Client, private readonly index: string) {
    }

    async write(data: any): Promise<void> {
        await this.client.index({
            index: this.index,
            type: this.index,
            body: data
        });
    }

}