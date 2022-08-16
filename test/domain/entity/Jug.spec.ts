import { Jug } from "@/domain"

describe('Jug', () => {
    let jug: Jug

    beforeEach(async () => {
        jug = new Jug(2, 10, 4)
    })

    test('should return data with bucket x is fill', () => {
        const response = jug.pourTheGallonOfWater(2, 0)
        expect(response).toMatchObject({
            canTransfer: false,
            bucketX: 'Fill',
            bucketY: 'Empty',
            message: 'Fill bucket x'
        })
    })

})