import { Jug } from "@/domain"

describe('Jug', () => {
    let jug: Jug = undefined

    beforeEach(async () => {
        jug = new Jug()
    })


    test('should return 2 when reteceive 2 and 10', () => {
        const response = Object.getPrototypeOf(jug).euclideanDistance(2, 10)
        expect(response).toBe(2)
    })

    test('should return 0 when reteceive 0 and 0', () => {
        const response = Object.getPrototypeOf(jug).euclideanDistance(0, 0)
        expect(response).toBe(0)
    })

})