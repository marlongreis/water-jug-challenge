import {
    Jug,
    JugInputData,
    JugOutputData,
    JugService,
    JugValidation,
    ValidationError
} from '@/domain'

export class JugServiceImp implements JugService {
    constructor (private readonly validation: JugValidation) { }

    async calculatesTheMostEfficientWay (data: JugInputData): Promise<JugOutputData> {
        if (this.validation.isValid(data)) {
            const jug = new Jug(data.bucketX, data.bucketY, data.amountWanted)
            return jug.calculatesTheMostEfficientWay()
        }
        throw new ValidationError(422, this.validation.cause())
    }
}
