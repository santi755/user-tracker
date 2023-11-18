import Output from "./Output";
import fs from 'fs';

export default class FileOutput implements Output {
    constructor(private readonly filePath: string) {
    }

    async write(data: any): Promise<void> {
        const fileDecriptor = fs.openSync(this.filePath, 'w');
        fs.appendFileSync(fileDecriptor, JSON.stringify(data) + '\n');
        fs.closeSync(fileDecriptor);
    }
}
