import Config, {Input, Types} from "../Config";
import InputReader from "./InputReader";
import FileInputReader from "./FileInputReader";
import CompositeInputReader from "./CompositeInputReader";

export default class InputReaderFactory {
    static fromConfig(config: Config): CompositeInputReader {
        return new CompositeInputReader(
            config
                .input
                .reduce((acc: Array<InputReader>, input: Input) => {
                        if (Types.FileType === input.type) {
                            acc.push(new FileInputReader(input.value));
                        }

                        return acc;
                    },
                    []
                )
        );
    }
}