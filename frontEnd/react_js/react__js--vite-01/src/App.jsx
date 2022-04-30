import { Props } from './fundamentos/components_fund/Props'
import { Estado } from './fundamentos/components_fund/Estado'
import { FormularioObjeto } from './fundamentos/components_fund/3-Formularios/Formulario-Objeto'
import { FormArray } from './fundamentos/components_fund/3-Formularios/FormArray'



const App = ({ nome, idade }) => {
	return (
		<>
		<Props nome="Reinaldo2" idade={44} />
		<br />
		<Props nome="Gustavo" idade={11} />
		<hr />
		<Estado />
		<br />
		<hr />
		<FormularioObjeto />
		<br />
		<hr />
		<FormArray />
		<br />
		<hr />

		</>
		
  )
}

export default App