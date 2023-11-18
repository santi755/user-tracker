import CompositeOutput from "./CompositeOutput";
import Config, {Input, Types} from "../Config";
import Output from "./Output";
import FileOutput from "./FileOutput";
import ElasticOutput from "./ElasticOutput";
import {Client} from "elasticsearch";

export default class OutputFactory {
    static fromConfig(config: Config): CompositeOutput {
        return new CompositeOutput(
            config
                .output
                .reduce((acc: Array<Output>, input: Input) => {
                        if (Types.FileType === input.type) {
                            acc.push(new FileOutput(input.value as string));
                        }

                        if (Types.Elastic === input.type) {
                            acc.push(
                                new ElasticOutput(
                                    new Client({
                                        host: `${input.value.scheme}://${input.value.host}:${input.value.port}`
                                    }),
                                    input.value.index
                                ),
                            )
                        }

                        return acc;
                    },
                    []
                )
        )
    }
}