import { CardDado } from './components/CardDado/index'

// import './styles/index.css'
import './styles/generic/reset.css'
import './styles/settings/colors.css'
import './styles/elements/base.css'


const $app = document.querySelector<HTMLDivElement>('#app')!

const $htmlCardDado = CardDado()

$app.insertAdjacentHTML('beforeend', $htmlCardDado)
