export class Jug {
    private euclideanDistance (x: number, y: number): number {
        if (y === 0) {
            return x
        }

        return this.euclideanDistance(y, x % y)
    }
}
