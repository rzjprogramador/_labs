import { v4 as uuidv4 } from 'uuid';

export const makeId = () => {
  return uuidv4()
}

// Math.random.toString()