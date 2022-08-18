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
    private validationResponse: any

    constructor () {
        this.validator = new JugInputDataValidator()
    }

    isValid (input: JugInputData): boolean {
        this.validationResponse = this.validator.validate(input)
        return Object.keys(this.validationResponse).length === 0
    }

    cause (): any {
        return this.validationResponse
    }
}
