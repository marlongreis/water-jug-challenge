import { JugInputData, JugValidation, JugService } from "@/domain"
import { JugServiceImp } from '@/service'

const jugValidationStubFactory = (): JugValidation => {
    class JugValidationStub implements JugValidation {
        cause(): any { return ({}) }
        isValid(): boolean {
            return true
        }
    }
    return new JugValidationStub()
}

type TypeSut = {
    service: JugService
    validation: JugValidation
}

const makeSutFactory = (): TypeSut => {
    const validation = jugValidationStubFactory()
    const service = new JugServiceImp(validation)
    return { validation, service }
}


describe('JugServiceImp', () => {
    test('should return success and data when has solution', () => {
        const { service } = makeSutFactory()
        const input = new JugInputData(2, 10, 4)
        const response = service.calculatesTheMostEfficientWay(input)
        expect(response).resolves.toMatchObject({
            solved: true,
            moreEfficient: 4,
            message: 'Most efficient way is with 4 steps'
        })
    })

    test('should return failure and data when not has solution', () => {
        const { service } = makeSutFactory()

        const input = new JugInputData(2, 10, 40)
        const response = service.calculatesTheMostEfficientWay(input)
        expect(response).resolves.toMatchObject({
            solved: false,
            moreEfficient: undefined,
            message: 'No Solution'
        })
    })

    test('should return failure when validation.isValid return false', () => {
        const { service, validation } = makeSutFactory()

        jest.spyOn(validation, 'isValid').mockImplementationOnce(() => false)
        jest.spyOn(validation, 'cause').mockImplementationOnce(() => ({
            anyFild: 'any message'
        }))

        const input = new JugInputData(2, 10, 40)
        const response = service.calculatesTheMostEfficientWay(input)
        expect(response).rejects.toMatchObject({
            anyFild: 'any message'
        })
    })




})