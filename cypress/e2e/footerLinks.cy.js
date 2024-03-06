/// <reference types = "cypress" />

// before each test
describe('footer links have the correct href\'s', function () {
    
    // visit the site
    beforeEach ('visit the site', function () {
        cy.visit('/')
    })

    it('goes to the contact page', function () {
        // contact button has the correct href
        cy.get('#menu-item-218100').children()
        .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/contact/')
    })

    it('goes to the Collection page', function () {
        // collection button has the correct href
        cy.get('#menu-item-218104').children()
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/collections')
    })

    it('goes to the Selenium Java page', function () {
        // selenium java button has the correct href
        cy.get('#menu-item-218105').children()
        .should('have.attr', 'href').and('equal', 'https://academy.ultimateqa.com/java-sdet')
    })

    it('goes to the Selenium C# page', function () {
        // selenium c# button has the correct href
        cy.get('#menu-item-218106').children()
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/courses/selenium-with-c')
    })

    it('goes to the Selenium Resources page', function () {
        // selenium resources button has the correct href
        cy.get('#menu-item-218107').children()
        .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/best-selenium-webdriver-resources/')
    })

    it('goes to the Automation Exercises page', function () {
        // automation exercises button has the correct href
        cy.get('#menu-item-218108').children()
        .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/automation/')
    })

    it('goes to the Terms and Conditions page', function () {
        // terms and conditions button has the correct href
        cy.get('.et-l--footer').contains('Terms and conditions')
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/pages/terms')
    })

    it('goes to the Automation Exercises page', function () {
        // automation exercises button has the correct href
        cy.get('.et-l--footer').contains('Privacy policy')
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/pages/privacy')
    })
})