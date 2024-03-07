/// <reference types = "cypress" />


describe('footer links have the correct href\'s', function () {
    
    // visit the site
    beforeEach ('visit the site', function () {
        cy.visit('/')
    })

    it('Contact page href is correct', function () {
        // contact button has the correct href
        cy.get('#menu-item-218100').children()
        .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/contact/')
    })

    it('Collection page href is correct', function () {
        // collection button has the correct href
        cy.get('#menu-item-218104').children()
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/collections')
    })

    it('Selenium Java page href', function () {
        // selenium java button has the correct href
        cy.get('#menu-item-218105').children()
        .should('have.attr', 'href').and('equal', 'https://academy.ultimateqa.com/java-sdet')
    })

    it('Selenium C# page href is correct', function () {
        // selenium c# button has the correct href
        cy.get('#menu-item-218106').children()
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/courses/selenium-with-c')
    })

    it('Selenium Resources page href is correct', function () {
        // selenium resources button has the correct href
        cy.get('#menu-item-218107').children()
        .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/best-selenium-webdriver-resources/')
    })

    it('Automation Exercises page href is correct', function () {
        // automation exercises button has the correct href
        cy.get('#menu-item-218108').children()
        .should('have.attr', 'href').and('equal', 'https://ultimateqa.com/automation/')
    })

    it('Terms and Conditions page href is correct', function () {
        // terms and conditions button has the correct href
        cy.get('.et-l--footer').contains('Terms and conditions', { matchCase: false })
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/pages/terms')
    })

    it('Privacy Policy page href is correct', function () {
        // privacy policy button has the correct href
        cy.get('.et-l--footer').contains('Privacy policy', { matchCase: false })
        .should('have.attr', 'href').and('equal', 'https://courses.ultimateqa.com/pages/privacy')
    })

    it('LinkedIn page href is correct', function () {
        // linkedin button has the correct href
        cy.get('.et-social-linkedin').children()
        .should('have.attr', 'href').and('equal', 'https://www.linkedin.com/company/ultimate-qa')
    })

    it('Twitter page href is correct', function () {
        // twitter button has the correct href
        cy.get('.et-social-twitter').children()
        .should('have.attr', 'href').and('equal', 'https://twitter.com/ultimateqahq')
    })

    it('Facebook page href is correct', function () {
        // facebook button has the correct href
        cy.get('.et-social-facebook').children()
        .should('have.attr', 'href').and('equal', 'https://www.facebook.com/Ultimateqa1')
    })

    it('YouTube page href is correct', function () {
        // facebook button has the correct href
        cy.get('.et-social-youtube').children()
        .should('have.attr', 'href').and('equal', 'https://www.youtube.com/@UltimateQA')
    })

    it('Instagram page href is correct', function () {
        // facebook button has the correct href
        cy.get('.et-social-instagram').children()
        .should('have.attr', 'href').and('equal', 'https://www.instagram.com/ultimate.qa')
    })
})