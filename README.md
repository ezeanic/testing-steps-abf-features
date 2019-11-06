Assignment 3
============

Assignment 3 is focussed on the concept of Behavior Driven Development (BDD).

BDD is similar to TDD except the focus is on user visible behaviors. TDD
is developer focused, BDD is user/stakeholder focused. In order to engage
stakeholders in the process BDD uses standard english specifications that
drive the tests so stakeholders can read, edit, and even write the 
specification files (called `feature files`). From the english language 
feature files, the BDD system can run tests (written in TypeScript) that
actually exercise the system according the specifications. The TypeScript 
files that actually implement the tests are calld `steps files`. In 
general, every feature file has a corresponding steps file.

In order to reduce the amount of code you have to write this week, we'll 
be re-using the classes from last time (Person, Address, Email, Password)
but we'll be re-writing the tests to match a set of feature files (that you
will also write!). The syntax of the feature files is called 
[Gherkin](https://cucumber.io/docs/gherkin/) and the system that executes
tests based on these feature files is called 
[Jest-Cucumber](https://www.npmjs.com/package/jest-cucumber).

In the Assignment 03 repository, I've provided a bare-bones starter 
for two feature files and steps files. In the lab we'll go through
the process of building one or two of the steps files completely based
on the starter feature files. You need to create additional feature + steps
files to test all the classes.

You can copy (overwrite) your finished class implementations from 
assignment 2 and use those again this week.

* Style (20%)
* Correctness WRT given tests (20%)
* Completeness WRT development of feature and step files (correct and complete). (60%)

You can run your tests with yarn using:

    npm run test

To check for style conformace please use:

    npm run lint

Please ask if you have any questions!

LAB 3
=====

Lab 3 is to modify `src/interact.ts` and `build/display.html` to exercise the full PersonClass for assignment 3.

You can edit `src/interact.ts` and `build/display.html` to do field by field input validation. Use a 
series of "try/catch" blocks to test each input and display whether it's OK or not. Use:

    npm run build

to create the javascript bundle for the web page. Edit the web page `build/display.html` and the 
code in `src/interact.ts` so that you can enter a person's name, address, email address, and password.
Use a set of try/catch blocks to test each value and display individual "OK" or "Not OK" messages
for each field.

