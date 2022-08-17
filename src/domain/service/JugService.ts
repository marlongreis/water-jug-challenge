import { JugInputData, JugOutputData } from '@/domain/data'

export interface JugService {
    calculatesTheMostEfficientWay: (data: JugInputData) => Promise<JugOutputData>
}
