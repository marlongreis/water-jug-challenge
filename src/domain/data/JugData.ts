import { BucketStatus } from '@/domain/data/BucketStatus'

export class JugData {
    constructor (
        public readonly canTransfer: boolean,
        public readonly bucketX: BucketStatus,
        public readonly bucketY: BucketStatus,
        public readonly message: string
    ) {
        Object.freeze(this)
    }
}
