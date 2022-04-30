/*  Tipos   */

type makeProduto = {
    nome: string
    preco: number
    disponivel: boolean
}

type ArgsProduto = [string | number | boolean]

/* ------------------------------------------- */

// Funcoes Entidade-Component há ser Fabricadas

function Plano(): makeProduto {
    return {
        nome: 'Plano', preco: 1000, disponivel: true
    }
}

function Curso(): makeProduto {
    return {
        nome: 'Curso', preco: 3000, disponivel: true
    }
}

/*  Funcao Fabrica :: Retornando a sub-funcao criadora que usara as Entidades-Componentes  */
const fabricaProduto = () => {
    return {
        make
    }
    function make(type, ...args: ArgsProduto): makeProduto {
        switch(type) {
            case 'plano':
                return Plano(...args)
            case 'curso':
                return Curso(...args)
        }
    }
}

const produto1 = fabricaProduto()
console.log(produto1.make('plano'))