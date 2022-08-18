export const EnvironmentConfiguration = {
    appPort (): number {
        const { APP_PORT } = process.env
        return parseInt(APP_PORT)
    }

}
