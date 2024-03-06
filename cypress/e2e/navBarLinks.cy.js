/// <reference types = "cypress" />

describe('navigation bar links work correctly', () => {
  
  beforeEach('before all tests', function () {
    // navigate to the base URL
    cy.visit('/');
    cy.url('pathname').should('equal', 'https://ultimateqa.com/fake-landing-page/')
  })

  it ('navigates to the Java SDET Academy page', function () {
    // click the 'Java SDET Academy' button
    cy.get('#menu-item-217931').children()
    .should('have.attr', 'href').and('equal', 'https://ultimateqa.ck.page/academy-coming-soon')
  })

  it ('navigates to the Testimonials page', function () {
    // click 'Success Stories' button
    cy.get('#menu-item-217938').children()
    .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/testimonials/')
  })

  it ('navigates to the Blog page', function () {
    // click the 'Blog' button
    cy.get('#menu-item-218226').children()
    .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/blog/')
  })

  it ('navigates to the About page', function () {
    // click the 'About' button
    cy.get('#menu-item-217940').children()
    .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/about/')
  })

  it ('navigates to the ClickUp page', function () {
    // click the 'I Want a Free Discovery Session' button
    cy.get('#menu-item-217945').children()
    .should('have.attr', 'href').and('contain', '/unlock-your-automation-potentialwitha-free-framework-assessment')
  })
})