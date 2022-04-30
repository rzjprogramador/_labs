import { CardDado } from "../../components/CardDado"

export function BoardDado(amountCards) {
    const $htmlCardDado = CardDado()
    const $htmlBoardDado = $htmlCardDado.repeat(amountCards)

    return $htmlBoardDado
}