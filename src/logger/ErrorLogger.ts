import fs from "fs";

type InputLevel = "INFO" | "WARN" | "ERROR" | "FATAL";

interface Input {
  message: string;
  ip: string;
}

export default class ErrorLogger {
  constructor(private readonly path: string) {}

  Warn(message: string, ip: string): void {
    this.saveMessage("WARN", message, ip);
  }

  Info(message: string, ip: string): void {
    this.saveMessage("INFO", message, ip);
  }

  Error(message: string, ip: string): void {
    this.saveMessage("ERROR", message, ip);
  }

  Fatal(message: string, ip: string): void {
    this.saveMessage("FATAL", message, ip);
  }

  private saveMessage(level: InputLevel, message: string, ip: string): void {
    if (!fs.existsSync(this.path)) {
      fs.writeFileSync(this.path, "");
    }

    const content = JSON.stringify({
      timestamp: Date.now(),
      level: level,
      message: message,
      ip: ip,
    });
    fs.appendFileSync(this.path, `${content}\n`);
  }
}
