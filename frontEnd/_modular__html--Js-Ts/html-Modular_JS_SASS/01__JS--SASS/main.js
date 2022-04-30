import { BoardDado } from './src/objects/BordDado'


const $root = document.querySelector('#app')
const $htmlBoardDado = BoardDado(4)

$root.insertAdjacentHTML('beforeend', $htmlBoardDado) 