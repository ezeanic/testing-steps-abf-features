import {loadFeature, defineFeature} from 'jest-cucumber'
import { Address } from '../src/address';

const feature = loadFeature('./features/addresses.feature')

defineFeature(feature, (test) => {
    test('Use data to create address objects', ({ given, when, then }) => {
        let anAddress = new Address("N Whatever","Indianapolis","IN", 22222)
        const streetAddress = "N Whatever"
        const citylocation = "Indianapolis"
        const stateValue = "IN"
        const zipCode = 55555
        let rightAddress = false
        
        given('I wish to create an address', () => {

        });
        when(/^I try to create and address with a (.*), (.*), (.*), and (.*)$/, (streetAddress, citylocation, stateValue, zipCode) => {
            try{
                anAddress = new Address(streetAddress, citylocation, stateValue, zipCode)
            }catch(e){
                rightAddress = true
            }
        });

        then(/^I expect an exception (.*) be thrown$/, (arg0) => {
            if(arg0 === "should"){
                expect(rightAddress).toBe(true)
            } else if(arg0 === "shouldn't"){
                expect(rightAddress).toBe(false)
            }
        });
    });
})
