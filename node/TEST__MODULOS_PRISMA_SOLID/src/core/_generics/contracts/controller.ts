/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'


export interface IController {
    handle: (req: Request, res: Response) => Promise<Response>
}


// import { HttpResponse } from '@src/core/_generics/response_http/http'
// handle: (data: any) => Promise<HttpResponse>