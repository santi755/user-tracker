class ErrorLogger {
  logError(message: string): void {
    console.error(`[Error Logger]: ${message}`);
  }
}

export const Error = new ErrorLogger();
