class DomMetodo {
    constructor(
        tecnologia: string,
        contexto: string,
        metodo: string,
        exemplo: string,
    ) {}
}

const inserirTextoNoDocument = new DomMetodo(
    'DOM',
    'Inserir texto no Document',
    '.textContent',
    `$root.textContent = 'Reinaldo'`,
)
