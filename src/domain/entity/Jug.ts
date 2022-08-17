import { JugOutputData } from '@/domain/data'

export class Jug {
    constructor (
        private readonly jugX: number,
        private readonly jugY: number,
        private readonly amountWanted: number
    ) { }

    public calculatesTheMostEfficientWay (): JugOutputData {
        let bucketX = this.jugX
        let bucketY = this.jugY
        const amount = this.amountWanted

        if (bucketX > bucketY) {
            const t = bucketX
            bucketX = bucketY
            bucketY = t
        }

        if (amount > bucketY) {
            return new JugOutputData(false, undefined, 'No Solution')
        }

        if (this.hasNoSolution(amount, bucketX, bucketY)) {
            return new JugOutputData(false, undefined, 'No Solution')
        }

        const solution1 = this.pour(bucketY, bucketX, amount)
        const solution2 = this.pour(bucketX, bucketY, amount)

        const min = Math.min(solution1, solution2)

        return new JugOutputData(true, min, `Most efficient way is with ${min} steps`)
    }

    private pour (fromCap: number, toCap: number, d: number): number {
        let from = fromCap
        let to = 0
        let step = 1

        while (from !== d && to !== d) {
            const temp = Math.min(from, toCap - to)

            to += temp
            from -= temp

            step++

            if (from === d || to === d) { break }

            if (from === 0) {
                from = fromCap
                step++
            }

            if (to === toCap) {
                to = 0
                step++
            }
        }
        return step
    }

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
