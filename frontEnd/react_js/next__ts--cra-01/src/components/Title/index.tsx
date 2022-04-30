import { TitleS } from "./styled"

type Props = {
    msg: string
}

export const Title = (props: Props) => {
    const msg = 'Alo Mundo 4'

    return (
        <>
            <TitleS>
                {msg}
            </TitleS>
        </>
    )
}
