export class JugInputData {
    constructor (
        public readonly bucketX: number,
        public readonly bucketY: number,
        public readonly amountWanted: number
    ) {
        Object.freeze(this)
    }
}
