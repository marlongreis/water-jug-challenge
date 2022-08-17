import {
    Jug,
    JugInputData,
    JugOutputData,
    JugService,
    JugValidation
} from '@/domain'

export class JugServiceImp implements JugService {
    constructor (private readonly validation: JugValidation) { }

    async calculatesTheMostEfficientWay (data: JugInputData): Promise<JugOutputData> {
        if (this.validation.isValid()) {
            const jug = new Jug(data.bucketX, data.bucketY, data.amountWanted)
            return jug.calculatesTheMostEfficientWay()
        }
        return this.validation.cause()
    }
}
