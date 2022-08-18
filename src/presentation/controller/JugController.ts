import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { JugService, ValidationError } from '@/domain'

const responseFactory = (code: number, data: any): HttpResponse => ({
    statusCode: code,
    body: data
})

export class JugController implements Controller {
    constructor (private readonly service: JugService) { }

    async handle (request: HttpRequest): Promise<HttpResponse> {
        try {
            const response = await this.service.calculatesTheMostEfficientWay(request.body)
            return responseFactory(200, response)
        } catch (e) {
            if (e instanceof ValidationError) {
                return responseFactory(e.code, e.data)
            }
            return responseFactory(500, {
                message: 'Internal server error'
            })
        }
    }
}
