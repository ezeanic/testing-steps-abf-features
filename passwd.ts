/*
** Password handles validating and checking passwords.
** 
** Passwords need to be 6 characters
**   At least 1 upper case
**   At least 1 lower case
**   At least 1 numeric
**   At least 1 "special" character (!@#$%^&*(),.?":{}|<>)
**
** Creating or setting a password that fails any of these criteria should
** throw an "Invalid Password" exception.
*/

import * as crypto from 'crypto'

class Password {
    private hash: string = ''
    constructor(value: string){
        this.hash = crypto.createHmac('sha256', this.validatePassword(value)).digest('hex')
    }

    private validatePassword(value: string): string {
        /*
        ** Should throw an exception of not valid
        */
       if(this.Length(value) < 6){
            throw("Invalid Password")
       }
       if(this.checkPassword(value) === false){
            throw("Invalid Password")
       }
       if(this.UppercasePassword(value) === false){
           throw("Invalid Password")
       }
       if(this.LowercasePassword(value) === false){
           throw("Invalid Password")
       }
       if(this.CharPassword(value) === false){
           throw("Invalid Password")
       }
       if(this.NumPassword(value) === false){
           throw("Invalid Password")
       }
       return value
    }

    private UppercasePassword(value: string): boolean{
        const originalLength = value.length;
        let ifCapsPassword = true;
        if(value.replace(/[A-Z]/g, "").length < originalLength){
            ifCapsPassword =  true;
        }
        else{
            ifCapsPassword =  false;
        }
        return ifCapsPassword;
    }

    private LowercasePassword(value: string): boolean{
        const originalLength = value.length;
        let ifLowercase = true;
        if(value.replace(/[a-z]/g, "").length < originalLength){
            ifLowercase =  true;
        }
        else{
            ifLowercase =  false;
        }
        return ifLowercase;
    }

    private CharPassword(value: string): boolean{
        const originalLength = value.length;
        let ifCharPresent = true;
        if(value.replace(/[!@#$%^&*(),.?":{}|<>]/g, "").length < originalLength){
            ifCharPresent =  true;
        }
        else{
            ifCharPresent =  false;
        }
        return ifCharPresent;
    }

    private NumPassword(value: string): boolean{
        const originalLength = value.length;
        let ifNumPresent = true;
        if(value.replace(/[1-9]/g, "").length < originalLength){
            ifNumPresent =  true;
        }
        else{
            ifNumPresent =  false;
        }
        return ifNumPresent;
    }

    private Length(value: string): number{
        
        return value.length;
    }

    checkPassword(value: string): boolean {
        return value.length > 0  // should actually check that this is the correct password.
    }

}

export {Password}