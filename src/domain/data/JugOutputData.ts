
export class JugOutputData {
    constructor (
        public readonly solved: boolean,
        public readonly moreEfficient: number,
        public readonly message: string
    ) {
        Object.freeze(this)
    }
}
