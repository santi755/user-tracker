export interface Logger {
  Warn(message: string): void;
  Info(message: string): void;
  Error(message: string): void;
  Fatal(message: string): void;
}
