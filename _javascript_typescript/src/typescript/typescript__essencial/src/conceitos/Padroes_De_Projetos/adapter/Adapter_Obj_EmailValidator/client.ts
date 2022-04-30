import { EmailValidatorAdapter } from './adapter/emailValidatorAdapter'
import { EmailValidationProtocol2 } from './protocol/EmailValidationProtocol'


function validaEmail(
    emailValidator: EmailValidationProtocol2, 
    email: string): void {
        if(emailValidator.isEmail(email)) {
            console.log('Email Valido')
        }
        else {
            console.log('ERROOOOOOOOO:: Invalido ')
        }

}


validaEmail(new EmailValidatorAdapter(), 'reinaldo@gmail.com')

