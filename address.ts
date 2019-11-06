
/*
This is an address class meant to store street addresses.
See the [Federal Address Data Standard](https://www.fgdc.gov/standards/projects/address-data/05-11.2ndDraft.CompleteDoc.pdf)

Requirements:
    Street address must be present (not blank). You can go crazy, but this will do for this assignment.
    City must be present (not blank)
    State must be a valid two character code (see valid abbreviations below)
    Zip must be a valid 5 digit integer
*/


class Address {
    private _state: string = ''
    private stateAbbreviations = [
        'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
        'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
        'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
        'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
        'VT','VI','VA','WA','WV','WI','WY'
       ]
  

    constructor(
        public streetAddress: string,
        public city: string,
        public stateValue: string,
        public zip: number) {
            this.state = this.validateState(stateValue)
            this.streetAddress = this.validateStreet(streetAddress)
            this.city = this.validateCity(city)
            this.zip = this.validateZip(zip)
        }

    
           
        public validateStreet(streetAddress: string): string {
            if(streetAddress === ""){
                throw("Invalid Address")
            }
            return streetAddress
        }
        public validateCity(city: string): string {

            if(city === ""){
                throw("Invalid Address")
            }
            return city
        }
        public validateState(state: string): string {

            if(this.CharCodePresent(state) === false){
                throw("Invalid address")
            }
            return state
        }
        public validateZip(zip: number): number {

            if((zip.toString()).length !== 5){
                throw("Invalid address")
            }
            return zip
        }



    private CharCodePresent(value: string): boolean{
        let isStatePresent = false
        for(let i = 0; i < this.stateAbbreviations.length; i++){
            if(value === this.stateAbbreviations[i]){
                isStatePresent = true
                break;
            }
        }
        return isStatePresent
    }


    set state(value: string) {
        this._state = value
    }

    get state(): string {
        return this._state
    }
}

export {Address}