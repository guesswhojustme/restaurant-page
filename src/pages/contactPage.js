import { Contact } from "../contents.js";

const contentDiv = document.getElementById('content');

export default function contactPage(){

    const restaurantDesc = document.createElement('h2')
    restaurantDesc.textContent = "Contact Page";

    const h2 = document.createElement('h2');
    h2.textContent = 'Make a resevation';

    const form = document.createElement('form')
    form.classList.add('formStyle');
    form.setAttribute('action', 'https://github.com/guesswhojustme');
    
    const div1 = document.createElement('div');
    div1.classList.add('div1')

    const nameLabel = document.createElement('label');
    nameLabel.textContent = "Name"
    nameLabel.setAttribute('for', "name")

    const nameInput = document.createElement('input');
    nameInput.setAttribute('name', "name")
    nameInput.setAttribute('id', "name")
    
    const div2 = document.createElement('div');
    div2.classList.add('div2')

    const contactNumberLabel = document.createElement('label');
    contactNumberLabel.textContent = "Contact No"
    contactNumberLabel.setAttribute('for', "contact-no")

    const contactNumberInput = document.createElement('input');
    contactNumberInput.setAttribute('name', "contact-no")
    contactNumberInput.setAttribute('id', "contact-no")

    const div3 = document.createElement('div');
    div3.classList.add('div3')    

    const dtLabel = document.createElement('label');
    dtLabel.textContent = "Date and Time"
    dtLabel.setAttribute('for', "dt")

    const dtInput = document.createElement('input');
    dtInput.setAttribute('name', "dt")
    dtInput.setAttribute('id', "dt")

    const div4 = document.createElement('div');
    div4.classList.add('div4')    

    const noOfGuestsLabel = document.createElement('label');
    noOfGuestsLabel.textContent = "Number of Guests";
    noOfGuestsLabel.setAttribute('for', "no-of-guests");

    const noOfGuestsInput = document.createElement('input');
    noOfGuestsInput.setAttribute('name', "no-of-guests");
    noOfGuestsInput.setAttribute('id', "no-of-guests");

    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Reserve"
    submitBtn.setAttribute('type', 'submit');
    submitBtn.style.position = 'relative';
    submitBtn.style.left = '130px'
    submitBtn.style.top = '20px'

    const contactUs = document.createElement('h2');
    contactUs.textContent = "Contact Us"
    contactUs.style.paddingTop = '80px'

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contactDivStyle');

    const contactNo = document.createElement('span');
    contactNo.textContent = Contact.contact;

    const emailAddress = document.createElement('span');
    emailAddress.textContent = Contact.email;

    contactDiv.append(contactNo, emailAddress)
    div4.append(noOfGuestsLabel, noOfGuestsInput, submitBtn);
    div2.append(dtLabel, dtInput);
    div3.append(contactNumberLabel, contactNumberInput);
    div1.append(nameLabel,nameInput);
    form.append(div1, div2, div3, div4);
    contentDiv.append(h2,form, contactUs, contactDiv);
};