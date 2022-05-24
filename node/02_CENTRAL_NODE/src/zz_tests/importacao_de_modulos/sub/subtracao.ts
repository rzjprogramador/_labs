type ISubtracaoRequest = {
    a: number
    b: number
}

export const subtracao = ({ a, b}: ISubtracaoRequest): number => a - b