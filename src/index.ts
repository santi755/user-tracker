import path from "path";
import ErrorLogger from "./logger/ErrorLogger";

const logFilePath = path.join(__dirname, "file", "track.log");
const logger = new ErrorLogger(logFilePath);

logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");
logger.Warn("asdasdasdasd", "123.123.123.213");

export default logger;
