import { JugInputData } from '@/domain'
import { FluentValidatorAdapter } from '@/infra'
describe('FluentValidatorAdapter', () => {

    let validator:FluentValidatorAdapter;

    beforeEach(()=>{
         validator = new FluentValidatorAdapter()
    })

    test('should return true when received valid input', () => {        
        expect(validator.isValid(new JugInputData(1, 1, 10))).toBeTruthy()
        expect(validator.cause()).toMatchObject({})
    })

    test('should return false when received invalid input', () => {        
        expect(validator.isValid(new JugInputData(0, 1, 10))).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            bucketX: 'Please field bucketX must be greater than 0'
        })
    })

    test('should return false when received null', () => {       
        expect(validator.isValid(new JugInputData(1, null, 10))).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            bucketY: 'Please field bucketY is required'
        })
    })

    test('should return false when received undefined', () => {      
        expect(validator.isValid(new JugInputData(undefined, 1, 10))).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            bucketX: 'Please field bucketX is required'
        })
    })

    test('should return false when value is not integer', () => {        
        expect(validator.isValid(new JugInputData(2, 1, 1.5))).toBeFalsy()
        expect(validator.cause()).toMatchObject({
            amountWanted: 'Please fields must be integer'
        })
    })

})