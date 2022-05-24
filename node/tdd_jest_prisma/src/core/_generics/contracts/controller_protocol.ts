/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpResponse } from '@/core/_generics/response_http/http'

export interface Controller {
    handle: (data: any) => Promise<HttpResponse>
}