export class Database {
    private static database: Database

    private constructor (
        private host: string,
        private user: string,
        private password: string
    ) { }

    connect (): void {
        console.log(`Conectado ${this.host} :: ${this.user} :: ${this.password}`)
    }

    static getDatabase (host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log(`Retornando instancia ja criada.`)
            return Database.database
        }

        console.log(`Criando NOVA INSTANCIA`)

        Database.database = new Database(host, user, password)
        return Database.database
    }
}

/* ---------------------- // ---------------------- */
/* USO */
//
// SE TEMOS SOMENTE UMA BASE DE DADOS - NAO PODE SER POSSIVEL MAIS DE UMA CONEXAO ABERTA
const db1 = Database.getDatabase('localhost', 'root', '123456')
db1.connect()

const db2 = Database.getDatabase('localhost', 'root2', '123456')
db2.connect()

// CONFERIR SE OS OBJETOS DE CONEXAO SAO OS MESMOS
// TODA VEZ QUE CHAMAR A INSTANCIA TEM QUE SER O EMSMO OBJETO JA ABERTO OU NAO.
console.log(db1 === db2) // ELES TEM QUE SER TRUE PARA SEREM O MESMO
