/*  
Só esta classe :: depende da lib-externa e Se trocar a lib só esta classe precisa ser mudada  

*/
import isEmail from 'validator/lib/isEmail'
import { EmailValidationProtocol2 } from "../protocol/EmailValidationProtocol";


export class EmailValidatorAdapter implements EmailValidationProtocol2 {
    isEmail(value: string): boolean {
        return isEmail(value)
    }
}