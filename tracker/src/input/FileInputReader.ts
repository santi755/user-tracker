import InputReader from "./InputReader";
import Input from "./Input";
import IP from "../transformer/geolocation/IP";
import fs from 'fs';

export default class FileInputReader implements InputReader {
    constructor(private readonly filePath: string, private offset: number = 0) {
    }

    async read(): Promise<Array<Input>> {
        const fileContent = await this.readFile();
        return fileContent.map(input => {
            const parsedInput = JSON.parse(input);

            return {
                timestamp: parsedInput.timestamp,
                level: parsedInput.level,
                message: parsedInput.message,
                ip: new IP(parsedInput.ip)
            }
        });
    }

    private async readFile(): Promise<string[]> {
        const content = fs.readFileSync(this.filePath, {
            encoding: 'utf-8',
            flag: 'r'
        })
            .split('\n')
            .slice(this.offset)
            .slice(0, -1);

        this.offset += content.length;

        return content;
    }
}