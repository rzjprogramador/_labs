import { gql } from 'apollo-server';

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFiltersOrderEnum
    _start: Int
    _limit: Int
  }

  # UTILIZADO ENUM PARA UM CAMPO SCALAR PRIMITIVO DO INPUT :: O ORDER
  enum ApiFiltersOrderEnum {
    ASC
    DESC
  }
`;
