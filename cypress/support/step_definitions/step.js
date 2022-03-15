import { expect } from 'chai';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let counter = 0
let sum = 0
let juicer
let result = 0
let multiple

Given(/^counter has been reset$/i, () => {
    counter = 0
})

When(/^counter is incremented$/i, () => {
    counter += 1
})

Then(/^counter equals (.+)$/i, (value) => {
    expect(counter).to.equal(value)
})

Given(/^I go to (.+) url$/i, (url) => {
    cy.log('>>>>>', url)
    cy.visit(url)
})

When(/^I search for (.+) keyword$/i, (keyword) => {
    cy.get('input[name="q"]').type(`${keyword}{enter}`)
})

Then(/^I see (.+) keyword on page$/i, (keyword) => {
    cy.get(`h1`)
        .invoke('text')
        .then((title) => {
            cy.log('This is title form invoke ', title)
            cy.log('This is keyword in BDD ', keyword)
            expect(title).to.equal(keyword)
        })
})

Then(/^I see (.+) keyword$/i, (keyword) => {
    cy.xpath(`//*[text()="${keyword}"]`)
        .should('have.length', 1)
})


When(/^I add (.+) number and (.+) number$/i, (number1, number2) => {
    sum = parseInt(number1) + parseInt(number2)
})

Then(/^I verify that the result is equal the (.+) result$/i, (result) => {
    expect(sum).to.equal(parseInt(result))
})

Given(/^I put fruit (.+) in a juicer$/i, (fruit) => {
    juicer = fruit + " juice"
})

When(/^I switch it on$/i, () => {

})

Then(/^I should get (.+) juice$/i, (juice) => {
    expect(juicer).to.equal(juice)
})

When(/^I enter (.+) number and (.+) number$/i, (number1, number2) => {
    result = number1 + number2
})

Then(/^I see following (.+) result table$/i, () => {
    cy.log(result);
})

When(/^I enter variable (.+) item and (.+) item$/i, (item1, item2) => {
    multiple = [];
    multiple = [item1, item2];
})

Then(/^I verify that both variables have (.+) item as value$/i, (item) => {
    expect(multiple).contains(item);
})