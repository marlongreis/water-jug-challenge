import { Jug } from "@/domain"

describe('Jug', () => {
    let jug: Jug = undefined

    beforeEach(async () => {
        jug = new Jug(2, 10, 4)
    })


    test('should return 2 when reteceive 2 and 10', () => {
        const response = Object.getPrototypeOf(jug).euclideanDistance(2, 10)
        expect(response).toBe(2)
    })

    test('should return 0 when reteceive 0 and 0', () => {
        const response = Object.getPrototypeOf(jug).euclideanDistance(0, 0)
        expect(response).toBe(0)
    })


    test("should return true when problem doesn't has a solution", () => {
        const response = Object.getPrototypeOf(jug).hasNoSolution(10, 10, 1)
        expect(response).toBeTruthy()
    })

    test('should return false when problem has a solution', () => {
        const response = Object.getPrototypeOf(jug).hasNoSolution(10, 2, 10)
        expect(response).toBeFalsy()
    })

    test('should return the smallest number of steps when it is possible to solve', () => {
        const response = jug.calculatesTheMostEfficientWay()

        expect(response).toMatchObject({
            solved: true,
            moreEfficient: 4,
            message: 'Most efficient way is with 4 steps'
        })
    })


    test('should return the smallest number of steps when it is possible to solve', () => {
        const response = new Jug(2, 10, 4).calculatesTheMostEfficientWay()

        expect(response).toMatchObject({
            solved: true,
            moreEfficient: 4,
            message: 'Most efficient way is with 4 steps'
        })
    })

    test("should return message 'No Solution' when the amount wanted is greater than jug y", () => {
        const response = new Jug(2, 10, 40).calculatesTheMostEfficientWay()

        expect(response).toMatchObject({
            solved: false,
            moreEfficient: undefined,
            message: 'No Solution'
        })
    })


    test("should return message 'No Solution' when not find solution", () => {
        const response = new Jug(2, 5, 4).calculatesTheMostEfficientWay()

        expect(response).toMatchObject({
            solved: false,
            moreEfficient: undefined,
            message: 'No Solution'
        })
    })

})