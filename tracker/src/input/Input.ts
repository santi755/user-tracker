import IP from "../transformer/geolocation/IP";

type InputLevel = 'INFO' | 'WARN' | 'ERROR' | 'FATAL';

interface Input {
    timestamp: number,
    level: InputLevel,
    message: string,
    ip: IP
}

export default Input;