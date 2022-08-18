import { JugService } from '@/domain'
import { FluentValidatorAdapter } from '@/infra'
import { Controller, JugController } from '@/presentation'
import { JugServiceImp } from '@/service'

const jugServiceFactory = (): JugService => {
    const validation = new FluentValidatorAdapter()
    return new JugServiceImp(validation)
}

export const controllerFactory = (): Controller => {
    const service = jugServiceFactory()
    return new JugController(service)
}
