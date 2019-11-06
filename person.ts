
import {Email} from './email'
import {Address} from './address'
import {Password} from './passwd'
import { throwStatement } from '@babel/types';

/*
**  A person class composed of a name and few other classes handline related responsibilities.
**
**      Requirements: name cannot be blank.
*/


class Person {
    constructor(
        public _name: string,
        public address: Address,
        public email: Email,
        private _password: Password
        )
        {
            _name = this.checkName(_name)
        }

    set name(value: string){
        this._name = this.checkName(value)
    }
    
    checkName(value: string): string{
        if(value === ''){
            throw('Invalid')
        }
        else{
            return value
        }
    }

    set password(value: Password) {
        this._password = value
    }
    
    checkPassword(value: string): boolean {
        return this._password.checkPassword(value)
    }
}

export {Person}
