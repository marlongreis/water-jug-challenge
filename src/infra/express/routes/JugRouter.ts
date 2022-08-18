import { Router } from 'express'
import { controllerFactory, ExpressControllerAdapter } from '@/infra'

export default (router: Router): void => {
    const factory = controllerFactory()
    const request = ExpressControllerAdapter(factory)
    router.post('/v1/jug', request)
}
