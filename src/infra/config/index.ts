import { ConfigurationType } from "./TypeDefinition";

const Configuration = {
    PORT: Number(process.env.PORT),
    ENV: process.env.NODE_ENV,
    STARTED_SERVER_MESSAGE: `server listening on PORT = ${process.env.PORT}`,
    RUNNING_SERVER_MESSAGE: process.env.RUNNING_SERVER_MESSAGE
} as ConfigurationType

export default Configuration;