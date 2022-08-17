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

})