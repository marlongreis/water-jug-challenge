import { BucketStatus, JugData } from '@/domain/data'

export class Jug {
    constructor (
        private readonly bucketX: number,
        private readonly bucketY: number,
        private readonly amountWanted: number
    ) { }

    public pourTheGallonOfWater (gallonX: number, gallonY: number): JugData {
        return new JugData(
            false,
            BucketStatus.FILL,
            BucketStatus.EMPTY,
            'Fill bucket x')
    }
}
