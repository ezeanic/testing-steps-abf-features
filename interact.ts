import setWindowHandler from "./globals"
import {Password} from "./passwd"
import { Person } from "./person"
import { Email } from "./email"
import { format } from "util"
import { Address } from "./address"

const streetAddress = '334 N Whatever'
    const city = 'Georgetown'
    const state = 'MD'
    const zip = 94859
    const pass = 'Blah1#'
    const email = 'steve@foo.com'
    const name = 'George'
    const anAddress = new Address(streetAddress, city, state, zip)
    const aPass = new Password(pass)
    const anEmail = new Email(email)

function CreateAPerson(): Person {
    return new Person(name,anAddress, anEmail, aPass )
}

function doClick(): void {
  
  
  const mySpanEmail: HTMLSpanElement = document.getElementById("theOutputEmail") as HTMLSpanElement
  const myInputEmail: HTMLInputElement = document.getElementById("theInputEmail") as HTMLInputElement
  
  const mySpanAddress: HTMLSpanElement = document.getElementById("theOutputAddress") as HTMLSpanElement
  const myInputStreet: HTMLInputElement = document.getElementById("theInputstreet") as HTMLInputElement
  const myInputCity: HTMLInputElement = document.getElementById("theInputcity") as HTMLInputElement
  const myInputState: HTMLInputElement = document.getElementById("theInputstate") as HTMLInputElement
  const myInputZip: HTMLInputElement = document.getElementById("theInputzip") as HTMLInputElement
  
  const mySpanPassword: HTMLSpanElement = document.getElementById("theOutputPassword") as HTMLSpanElement
  const myInputPassword: HTMLInputElement = document.getElementById("theInputPassword") as HTMLInputElement

  const mySpanName: HTMLSpanElement = document.getElementById("theOutputName") as HTMLSpanElement
  const myInputName: HTMLInputElement = document.getElementById("theInputName") as HTMLInputElement
  
  const namePersonclass = CreateAPerson()

  try {
    const aName = namePersonclass.checkName(myInputName.value)
    mySpanName.innerHTML = "Valid Name"
    mySpanName.innerHTML = mySpanName.innerHTML.fontcolor("green")
  } 
  catch (InvalidName) {
    mySpanName.innerHTML = "Invalid Name"
    mySpanName.innerHTML = mySpanName.innerHTML.fontcolor("red")
  }
  
  try {
    const email = new Email(myInputEmail.value)
    mySpanEmail.innerHTML = "Valid Email"
    mySpanEmail.innerHTML = mySpanEmail.innerHTML.fontcolor("green")  
  } 
  catch (InvalidEmail) {
    mySpanEmail.innerHTML = "Invalid Email"
    mySpanEmail.innerHTML = mySpanEmail.innerHTML.fontcolor("red")
  }
    
  try {
    const address = new Address(myInputStreet.value, myInputCity.value, myInputState.value, myInputZip.valueAsNumber)
    mySpanAddress.innerHTML = "Valid Address"
    mySpanAddress.innerHTML = mySpanAddress.innerHTML.fontcolor("green")
  } 
  catch (InvalidAddress) {
    mySpanAddress.innerHTML = "Invalid Address"
    mySpanAddress.innerHTML = mySpanAddress.innerHTML.fontcolor("red")
  }
  
  try {
    const password = new Password(myInputPassword.value)
    mySpanPassword.innerHTML = "Valid Password"
    mySpanPassword.innerHTML = mySpanPassword.innerHTML.fontcolor("green")
  } 
  catch (InvalidPassword) {
    mySpanPassword.innerHTML = "Invalid Password"
    mySpanPassword.innerHTML = mySpanPassword.innerHTML.fontcolor("red")
  }
}

  

setWindowHandler(doClick)

