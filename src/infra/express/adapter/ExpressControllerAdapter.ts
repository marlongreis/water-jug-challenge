import { Controller, HttpResponse } from '@/presentation'
import { Request, Response } from 'express'

export const ExpressControllerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<any> => {
    const { body } = req

    const response: HttpResponse = await controller.handle({ body })
    res.status(response.statusCode).json(response.body)
  }
}
