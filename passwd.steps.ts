import {loadFeature, defineFeature} from 'jest-cucumber'
import { Password } from '../src/passwd';
import { tsObjectKeyword } from '@babel/types';


const feature = loadFeature('./features/passwd.feature')

defineFeature(feature, (test) => {
    test('password should have a character', ({ given, when, then }) => {
        let catcherror = false
        given('I want to create a password', () => {

        });

        when('I create a password', () => {
            try{
                const pass = new Password('P1764arg0')
            }catch (noChar){
                catcherror = true
            }
        });

        then('It should throw', () => {
            expect(catcherror).toBe(true)
        });
    });

    test('password should have a number', ({ given, when, then }) => {
        let catcherror = false
        given('I want to create a password', () => {

        });

        when('I create a password', () => {
            try{
                const pass = new Password('P*arjjg')
            }catch (noNum){
                catcherror = true
            }
        });

        then('It should throw', () => {
            expect(catcherror).toBe(true)
        });
    });


    test('password should have a small letter', ({ given, when, then }) => {
        let catcherror = false
        given('I want to create a password', () => {

        });

        when('I create a password', () => {
            try{
                const pass = new Password('P*UMM12US')
            }catch (noLowercase){
                catcherror = true
            }
        });

        then('It should throw', () => {
            expect(catcherror).toBe(true)
        });
    });

    
    test('password should have a capital letter', ({ given, when, then }) => {
        let catcherror = false
        given('I want to create a password', () => {

        });

        when('I create a password', () => {
            try{
                const pass = new Password('221()arg')
            }catch (noUppercase){
                catcherror = true
            }
        });

        then('It should throw', () => {
            expect(catcherror).toBe(true)
        });
    });

    test('password should have a length greater than 6', ({ given, when, then }) => {
        let catcherror = true
        given('I want to create a password', () => {

        });

        when('I create a password', () => {
            try{
                const pass = new Password('Qw1*')
            }
            catch (lengthlessthansix){
                catcherror = false
            }
        });

        then('It should throw', () => {
            expect(catcherror).toBe(false)
        });
    });

})
