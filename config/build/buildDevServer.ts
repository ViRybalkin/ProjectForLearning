import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (port: number): DevServerConfiguration => {
    return {
        port: port,
        open: {
            app: {
                name: 'Safari'
            }
        },
    }
}