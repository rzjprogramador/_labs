import { ExternoBancoMysql } from './ExternoBanco';



export class ExternoBancoMysqlAdapter {
    
    mysql : ExternoBancoMysqlAdapter

    constructor(mysql = new ExternoBancoMysql()) {}

    insert() {
        return this.mysql.insert()
    }

    update() {
        return this.mysql.update()
    }

    remove() {
        return this.mysql.remove()
    }

}




// function insertMysql(): any {
//     throw new Error('Function not implemented.');
// }

// function updateMysql(): any {
//     throw new Error('Function not implemented.');
// }

// function removeMysql(): any {
//     throw new Error('Function not implemented.');
// }
// function insertMysql(): any {
//     throw new Error('Function not implemented.');
// }

