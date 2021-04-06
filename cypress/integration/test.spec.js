/// <reference types="cypress" />
const homepage = require('../support/pageObject/homepage')
const registration = require('../support/pageObject/registration')

beforeEach(function () {
    cy.visit('/')
    cy.get(homepage.elements.logo).should('be.visible')
    cy.get(homepage.elements.acceptCookies).click()
})
describe('Apply for account', () => {
    it('click on apply button', () => {
        cy.visit('https://account.capitalontap.com/apps/apply')
        // cy.get(homepage.elements.apply).click()
        cy.get('#businessLegalName').type('Paresh Inc')
        cy.intercept({
            method: "GET",
            url: "https://account.capitalontap.com/**",
          }).as("dataGetFirst");
      cy.wait("@dataGetFirst");
        cy.get('[id^=businessLegalName]').click({ multiple: true })
        cy.get('.ant-list-items > :nth-child(2)').click({force:true})
        // cy.get('#companyDirectorDropDown').click()
        // cy.get('body > div:nth-child(83) > div > div > div > div.rc-virtual-list > div > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active').click()
        // cy.get('#tradingName').type('Paresh Inc')
        // cy.get('#monthsTrading').click()
        // cy.get('#monthsTrading').type('{downarrow}')
        // cy.get('#monthsTrading').type('{downarrow}')
        // cy.get('#monthsTrading').type('{enter}')
        cy.get('#monthlyTurnOver').type('1000')
        cy.get('#businessLandline').type('02091231234')
        cy.get(registration.elements.businessAddress).type('100')
        cy.get('#businessAddress_postCodeSearch').type('sw31er')
        cy.get('[id^=businessAddress]').click({ multiple: true })
        cy.get('#__next > div > div.Layout__Container-sc-1dx7yve-0.gVDXbU > div.Layout__ContentContainer-sc-1dx7yve-1.gGdyHM > div:nth-child(2) > div.css-urchl7 > div.css-14mqzlp > form > div:nth-child(1) > div > div > div > div:nth-child(4) > div.ant-card-body > div > div:nth-child(5) > div.ant-col.ant-form-item-control > div > div > div.ant-list.ant-list-split.sc-gKAblj.boPkKw > div > div > ul > li:nth-child(1)').click()
        cy.get('#tradingName').type('Paresh Inc')
        cy.get('[data-testid="AdditionalQuestions-RepaymentOptionFullBalance"]').check()
        cy.get('[data-testid="AdditionalQuestions-CanSendCashFromCreditFacilityToBankNo"]').check()
    })
  })