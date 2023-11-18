enum Types {
    FileType = 'file',
    Elastic = 'elastic'
}

type Type = Types.FileType;

interface Input {
    type: Types,
    value: any
}

interface Output {
    type: Type,
    value: string
}

interface Config {
    interval: number,
    input: Array<Input>,
    transformers: Array<string>,
    output: Array<Output>,
}


export {Input, Output, Type, Types};
export default Config;