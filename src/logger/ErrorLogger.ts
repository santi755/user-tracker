import { Logger } from "./Logger";
import fs from "fs";

export default class ErrorLogger implements Logger {
  Warn(message: string): void {
    this.saveMessage(message);
  }

  Info(message: string): void {
    this.saveMessage(message);
  }

  Error(message: string): void {
    this.saveMessage(message);
  }

  Fatal(message: string): void {
    this.saveMessage(message);
  }

  private saveMessage(message: string): void {
    fs.appendFileSync("../file/track.log", message);
  }
}
