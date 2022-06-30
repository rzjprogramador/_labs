import { container } from 'tsyringe'

import { GetClientesService } from '@src/modules/clientes/services/GetClientesService';
import { GetClientesPostgresPrisma } from '@src/modules/clientes/repositories/GetClientesPostgresPrisma'

const clientesResolvers = {
  Query: {
    getAllClientes: () => {
      const getClientes = container.resolve(GetClientesService)
      return getClientes
    },
  },

  Mutation: {},
}

export default clientesResolvers
