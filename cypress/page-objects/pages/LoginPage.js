import BasePage from '../BasePage';

export default class LoginPage extends BasePage {
  static login(username, password) {
    LoginPage.isVisible();
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.clickRememberMe();
    LoginPage.submitLogin();
  }

  static isVisible() {
    cy.isVisible('#login_form');
  }

  static fillUsername(username) {
    cy.get('#user_login').type(username);
  }

  static fillPassword(password) {
    cy.get('#user_password').type(password);
  }

  static clickRememberMe() {
    cy.get('#user_remember_me').click();
  }

  static submitLogin() {
    cy.contains('Sign in').click();
  }

  static clickForgotPasswordLink() {
    cy.contains('Forgot you password ?').click();
  }

  static isErrorMessage() {
    cy.isVisible('.alert-error');
  }
}