import { JugInputData } from '@/domain'
import { FluentValidatorAdapter } from '@/infra'
describe('FluentValidatorAdapter', () => {
    test('should return true when received valid input', () => {
        const validator = new FluentValidatorAdapter(new JugInputData(1, 1, 10))
        expect(validator.isValid()).toBeTruthy()
        expect(validator.cause()).toMatchObject({})
    })

    test('should return false when received invalid input', () => {
        const validator = new FluentValidatorAdapter(new JugInputData(0, 1, 10))
        expect(validator.isValid()).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            bucketX: 'Please field bucketX must be greater than 0'
        })
    })

    test('should return false when received null', () => {
        const validator = new FluentValidatorAdapter(new JugInputData(1, null, 10))
        expect(validator.isValid()).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            bucketY: 'Please field bucketY is required'
        })
    })

    test('should return false when received undefined', () => {
        const validator = new FluentValidatorAdapter(new JugInputData(undefined, 1, 10))
        expect(validator.isValid()).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            bucketX: 'Please field bucketX is required'
        })
    })

    test('should return false when value is not integer', () => {
        const validator = new FluentValidatorAdapter(new JugInputData(2, 1, 1.5))
        expect(validator.isValid()).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            amountWanted: 'Please fields must be integer'
        })
    })

})