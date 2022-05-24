type SomaRequest = {
    a: number
    b: number
}

export const soma = ({ a, b}: SomaRequest): number => a + b