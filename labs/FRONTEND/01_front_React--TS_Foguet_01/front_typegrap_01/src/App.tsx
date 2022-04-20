import { gql, useQuery } from '@apollo/client'

type User = {
  id: string
  nome: string
  idade: number
}

const GET_USERS = gql`
  query {
    users {
    id
    nome
    }
  }
`

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USERS)
  console.log(data)

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data?.users.map(user => 
        <li key={user.id}>
          {user.nome}
        </li>
      )}
    </ul>
  )
}

export default App
