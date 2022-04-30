
const cpf = `254.224.877-46`

const cpfs2 = `
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00
`;

const cpfRegex = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;
// console.log(cpf.match(cpfRegex))

// Com a flag m (multiline) depois do global == Lê que começa a cada linha
const cpfRegexLinhas = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2.match(cpfRegexLinhas))

// BOA TECNICA PARA VALIDAR CAMPOS