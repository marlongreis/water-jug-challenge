export class ValidationError extends Error {
    constructor (public readonly code: number, public readonly data: any) {
        super(JSON.stringify(data))
    }
}
