export default class BasePage {
  static pause(ms) {
    cy.wait(ms);
  }

  static logInfo(message) {
    cy.log(message);
  }

  static setMobileViewport() {
    cy.setResolution('iphone-x');
  }

  static setTabViewport() {
    cy.setResolution('ipad-2');
  }

  static setLaptopViewport() {
    cy.setResolution('macbook-13');
  }

  static setDesktopViewport() {
    cy.setResolution([1980, 1080]);
  }
}