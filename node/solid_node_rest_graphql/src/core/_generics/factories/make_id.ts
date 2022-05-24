import { v4 as uuidv4 } from 'uuid';
uuidv4()

const makeId = () => {
  return uuidv4()
}

export { makeId }