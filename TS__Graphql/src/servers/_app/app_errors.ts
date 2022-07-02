import { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

export const appErrors = (error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json(error.message)
  }

  return response.status(500).json(error)
}
