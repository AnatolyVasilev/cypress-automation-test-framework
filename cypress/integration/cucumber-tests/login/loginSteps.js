import {url} from '../../../../config';
import LoginPage from '../../../page-objects/pages/LoginPage';
import NavBar from '../../../page-objects/components/NavBar';

Given('I open login page', () => {
  cy.visit(url);
  NavBar.clickSignIn();
  LoginPage.isVisible();
});

When('I fill username with {string}', username => {
  LoginPage.fillUsername(username);
});

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password);
});

When('I click on submit button', () => {
  LoginPage.submitLogin();
});

Then('I should see error message', () => {
  LoginPage.isErrorMessage();
});

Then('I should see homepage', () => {
  cy.isVisible('#account_summary_tab');
});