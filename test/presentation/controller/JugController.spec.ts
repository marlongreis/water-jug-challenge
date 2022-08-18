import { JugController, Controller, HttpRequest } from "@/presentation"
import { JugInputData, JugOutputData, JugService, ValidationError } from '@/domain'


const serviceStubFactory = (): JugService => {
    class JugServiceStub implements JugService {
        async calculatesTheMostEfficientWay(data: JugInputData): Promise<JugOutputData> {
            return new JugOutputData(true, 10, "Any message")
        }

    }
    return new JugServiceStub()
}

const makeSutFactory = (): TypeSut => {
    const service = serviceStubFactory()
    const sut = new JugController(service)
    return { service, sut }
}

type TypeSut = {
    service: JugService
    sut: Controller
}

const argFactory = (bucketX: number, bucketY: number, amountWanted: number): HttpRequest => {
    return ({
        body: {
            bucketX, bucketY, amountWanted
        }
    })
}

describe('JugController', () => {
    test('should return 200 when service return success', async () => {
        const { sut } = makeSutFactory()
        const response = await sut.handle(argFactory(1, 2, 3))

        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject({
            solved: true,
            moreEfficient: 10,
            message: "Any message"
        })
    });

    test('should return 422 when service throw validation error', async () => {
        const { sut, service } = makeSutFactory()
        jest.spyOn(service, 'calculatesTheMostEfficientWay').
            mockImplementationOnce(async () => {
                throw new ValidationError(422, {
                    anyField: 'any message'
                })
            })

        const response = await sut.handle(argFactory(1, 2, 3))
        expect(response.statusCode).toBe(422)
        expect(response.body).toMatchObject({
            anyField: 'any message'
        })
    });

    test('should return 500 when service throw error', async () => {
        const { sut, service } = makeSutFactory()
        jest.spyOn(service, 'calculatesTheMostEfficientWay').
            mockImplementationOnce(async () => {
                throw new Error('Any')
            })

        const response = await sut.handle(argFactory(1, 2, 3))
        expect(response.statusCode).toBe(500)
        expect(response.body).toMatchObject({
            message: 'Internal server error'
        })
    });
})