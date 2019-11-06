import {loadFeature, defineFeature} from 'jest-cucumber'
import {Email} from '../src/email'
import { tsObjectKeyword } from '@babel/types';


const feature = loadFeature('./features/email.feature')

defineFeature(feature, (test) => {

    test('Creating An Email that should be defined', ({ given, when, then }) => {
        let email: Email;
        given('I am interested in creating a Simple Email', () => {
            
        });

        when('I create an Email', () => {
            email = new Email('foo@bar.com')
        });

        then('it should be defined', () => {
            expect(email).toBeDefined()
        });
    });

    test('Throw an Invalid Email if @ is not present', ({ given, when, then }) => {
        let email: Email
        let throwWrongEmail = false
        given('I am interested in creating a Simple Email', () => {

        });
        when('Throw if email does not have @', () => {
            try{
                email = new Email('foo.bar')
            }catch(e){
                throwWrongEmail = true
            }
        });
        then('Invalid Email should be thrown', () => {
            expect(throwWrongEmail).toBe(true)
        });
    });

    test('Throw an Invalid Email if a dot(.) is not present', ({ given, when, then }) => {
        let email: Email
        let throwWrongEmail = false
        given('I am interested in creating a Simple Email', () => {

        });
        when('Throw if email does not have .', () => {
            try{
                email = new Email('foo@bar')
            }catch(e){
                throwWrongEmail = true
            }
        });
        then('Invalid Email should be thrown', () => {
            expect(throwWrongEmail).toBe(true)
        });
    });

    test('Throw an Invalid Email if username is not present', ({ given, when, then }) => {
        let email: Email
        let throwWrongEmail = false
        given('I am interested in creating a Simple Email', () => {

        });
        when('Throw if email does not have username', () => {
            try{
                email = new Email('@bar.com')
            }catch(e){
                throwWrongEmail = true
            }
        });
        then('Invalid Email should be thrown', () => {
            expect(throwWrongEmail).toBe(true)
        });
    });

    test('Throw an Invalid Email if a domain name is not present', ({ given, when, then }) => {
        let email: Email
        let throwWrongEmail = false
        given('I am interested in creating a Simple Email', () => {

        });
        when('Throw if email does not have domain name', () => {
            try{
                email = new Email('foo@.')
            }catch(e){
                throwWrongEmail = true
            }
        });
        then('Invalid Email should be thrown', () => {
            expect(throwWrongEmail).toBe(true)
        });
    });



})
