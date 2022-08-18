import { JugInputData } from '@/domain'

export interface JugValidation {
    isValid: (input: JugInputData) => boolean
    cause: () => any
}
