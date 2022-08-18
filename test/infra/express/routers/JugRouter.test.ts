import request from 'supertest'
import app from '@/infra/express/config/App'

describe('JugRouter', () => {


    test('should return statusCode 200 and body with message when not has solution', async () => {
        await request(app).post('/api/v1/jug').send({
            "bucketX": 2,
            "bucketY": 10,
            "amountWanted": 40
        }
        ).expect(200, {
            "solved": false,
            "message": "No Solution"
        })
    })

    test('should return statusCode 200 when resolve with success', async () => {
        await request(app).post('/api/v1/jug').send({
            "bucketX": 2,
            "bucketY": 10,
            "amountWanted": 4
        }
        ).expect(200, {
            "solved": true,
            "moreEfficient": 4,
            "message": "Most efficient way is with 4 steps"
        })
    })

    test('should return statusCode 422 and all field required when set in the body', async () => {
        await request(app).post('/api/v1/jug').send({}).expect(422, {
            "bucketX": "Please field bucketX is required",
            "bucketY": "Please field bucketY is required",
            "amountWanted": "Please field amountWanted is required"
        })
    })

    test('should return statusCode 422 and two field required when set in the body', async () => {
        await request(app).post('/api/v1/jug').send({
            "bucketX": 2,
        }).expect(422, {
            "bucketY": "Please field bucketY is required",
            "amountWanted": "Please field amountWanted is required"
        })
    })

    test('should return statusCode 422 when number is not integer', async () => {
        await request(app).post('/api/v1/jug').send({
            "bucketX": 2.5,
            "bucketY": 10,
            "amountWanted": 4
        }).expect(422, {
            "bucketX": "Please fields must be integer"
        })
    })

    test('should return statusCode 422 when value is negative', async () => {
        await request(app).post('/api/v1/jug').send({
            "bucketX": 2,
            "bucketY": -10,
            "amountWanted": 4
        }).expect(422, {
            "bucketY": "Please field bucketY must be greater than 0"
        })
    })
})