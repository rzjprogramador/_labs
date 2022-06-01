import crypto from 'crypto'

export const makeID = () => crypto.randomUUID()
