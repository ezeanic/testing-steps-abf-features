/*
** Email class. Just stores and validates an email address.
**
** See [RFC6530](https://tools.ietf.org/html/rfc6530) and related standards.
**
** Simplified Requirements:
**  must contain one and only one '@' character
**  must contain a domain part (after the '@') with at least one '.'
**  must contain a user part (before the '@') with at least one non-blank character.
**  See [Return Path](https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-) for more examples.
*/

class Email {
    private _email: string
    constructor(email: string) {
        this._email = this.validateEmail(email)
    }

    public validateEmail(email: string): string {
        /*
        ** Should throw and error if the email address is not valid
        */
        if(this.isAtSymbolPresent(email) == false){
            throw("Invalid")
        }

        if(this.isDotPresent(email) == false){
            throw("Invalid")
        }
        if(this.DomainNamePresent(email) == false){
            throw("Invalid")
        }
        if(this.UserNamePresent(email) == false){
            throw("Invalid")
        }
        
        return email
    }
    public isAtSymbolPresent(value: string): boolean{
        return value.replace(/[^@]/g, "").length == 1;
    }

    public isDotPresent(value: string): boolean{
        const splitValue = value.split("@");
        return splitValue[1].replace(/[^.]/g, "").length >= 1;
    }
    public DomainNamePresent(value: string): boolean{
        const splitValue = value.split("@");
        return splitValue[1].length > 1;//1 taking note of the dot
    }
    public UserNamePresent(value: string): boolean{
        const splitValue = value.split("@");
        return splitValue[0].length > 0;
    }
    set email(value: string) {
        this._email = this.validateEmail(value);
    }

    get email(): string {
        return this._email;
    }
}

export {Email}
