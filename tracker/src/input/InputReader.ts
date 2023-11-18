import Input from "./Input";

interface InputReader {
    read(): Promise<Array<Input>>;
}

export default InputReader;