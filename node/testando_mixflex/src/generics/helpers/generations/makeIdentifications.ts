import crypto from 'crypto'

export const makeID = () => crypto.randomUUID()

export const makeCodigo = () => crypto.randomUUID()
