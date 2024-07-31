import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the homepage', () => {
  cy.visit('/');
});

When('I click on the login button', () => {
  cy.get('button#login').click();
});

Then('I should see the dashboard', () => {
  cy.url().should('include', '/dashboard');
});
