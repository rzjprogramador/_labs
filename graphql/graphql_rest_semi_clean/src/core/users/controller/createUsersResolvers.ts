/* eslint-disable no-unused-vars */

import { Controller } from '@/core/_generics/contracts/controller_protocol'
import { HttpResponse, sucess, serverError } from '@/core/_generics/response_http/http'
import { CreateUsersViewModel} from '@/core/users/view_models/create_users_view_model'
import { ICreateUsersService } from '@/core/users/contracts/create_users_service_protocol'
import { UsersDTO } from '@/core/users/contracts/UsersDTO';


class CreateUsersResolvers implements Controller {
    constructor(
        private readonly createUsersService: ICreateUsersService,
    ) {}

    async handle(data: UsersDTO): Promise<HttpResponse<CreateUsersViewModel>> {
        try {
            const user = await this.createUsersService.createUsers(data)
            const viewModels = user
            return sucess(viewModels)
        }
        catch(error) {
            return serverError(error)
        }
    }
}

export { CreateUsersResolvers }
