export class Jug {
    private euclideanDistance (x: number, y: number): number {
        if (y === 0) {
            return x
        }

        return this.euclideanDistance(y, x % y)
    }

    private hasNoSolution (bucketX: number, bucketY: number, amount: number): boolean {
        if ((amount % this.euclideanDistance(bucketY, bucketX)) !== 0) {
            return true
        }
        return false
    }
}
