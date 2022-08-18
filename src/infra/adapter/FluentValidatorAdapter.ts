import { Validator } from 'fluentvalidation-ts'
import { JugValidation, JugInputData } from '@/domain'

class JugInputDataValidator extends Validator<JugInputData> {
    constructor () {
        super()

        const valueIsInteger = (value) => Number.isInteger(value)

        this.ruleFor('bucketX').greaterThan(0)
            .withMessage('Please field bucketX must be greater than 0')
            .notNull().withMessage('Please field bucketX is required')
            .must(valueIsInteger)
            .withMessage('Please fields must be integer')

        this.ruleFor('bucketY').greaterThan(0)
            .withMessage('Please field bucketY must be greater than 0')
            .notNull().withMessage('Please field bucketY is required')
            .must(valueIsInteger)
            .withMessage('Please fields must be integer')

        this.ruleFor('amountWanted').greaterThan(0)
            .withMessage('Please field amountWanted must be greater than 0')
            .notNull().withMessage('Please field amountWanted is required')
            .must(valueIsInteger)
            .withMessage('Please fields must be integer')
    }
}

export class FluentValidatorAdapter implements JugValidation {
    private readonly validator: Validator<JugInputData>
    private readonly validationResponse: any

    constructor (readonly input: JugInputData) {
        this.validator = new JugInputDataValidator()
        this.validationResponse = this.validator.validate(input)
    }

    isValid (): boolean {
        return Object.keys(this.validationResponse).length === 0
    }

    cause (): any {
        return this.validationResponse
    }
}
