import {loadFeature, defineFeature} from 'jest-cucumber'
import { Person } from '../src/person'
import { tsObjectKeyword } from '@babel/types'
import { Address } from '../src/address'
import { Password } from '../src/passwd'
import { Email } from '../src/email'


const feature = loadFeature('./features/person.feature')


defineFeature(feature, (test) => {
    const streetAddress = '334 N Whatever'
    const city = 'Georgetown'
    const state = 'MD'
    const zip = 94859
    const pass = 'Blah1#'
    const email = 'steve@foo.com'
    const name = 'Spicklemire'
    const anAddress = new Address(streetAddress, city, state, zip)
    const aPass = new Password(pass)
    const anEmail = new Email(email)

    function CreateAPerson(): Person {
        return new Person(name, anAddress, anEmail, aPass )
    }

    test('Create a defined name in Person', ({ given, when, then }) => {
        given('Create a person class with a defined name', () => {

        })

        when('Name is not empty', () => {
            const aPerson = new Person(name, anAddress, anEmail, aPass)
        })

        then('Name in the person class should be defined', () => {
            expect(Person.name).toBeDefined()
        })
    })

    test('Throw a name if left blank', ({ given, when, then }) => {
        let catchEmptyName = true
        const aPerson = CreateAPerson()
        given('a person is created', () => {

        })

        when('Created name is blank', () => {
            try{
                const aName = aPerson.checkName("")
            }
            catch(thrownName){
                catchEmptyName = false
            }
        })

        then('Empty name should be thrown', () => {
            expect(catchEmptyName).toBe(false)
        })
    })
})
