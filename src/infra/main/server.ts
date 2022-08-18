import 'module-alias/register'

import { EnvironmentConfiguration } from '@/infra/adapter'
import app from '@/infra/express/config/App'

(async () => {
    const appPort = EnvironmentConfiguration.appPort()
    app.listen(appPort, () => console.log('server', `🚀 Server running at http://localhost:${appPort}`))
})()
