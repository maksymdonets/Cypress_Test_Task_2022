import Login from "../pages/Login";
import { email, password } from "../fixtures/testUser.json";

describe("Login form", () => {
  /**
   * @issue #1
   *
   * Preconditions:
   * Go to login page
   *
   * Steps:
   * Enter email
   * Enter password
   * Click on eye button
   * Password appears
   * Click on login button
   * You successfully login
   */
  it("Login with valid credentials", () => {
    // Go to login page
    Login.visit();
    Login.loginTitle().should("exist");
    Login.loginSubtitle().should("exist");
    // Enter email
    Login.emailInput().click({ force: true }).type(email);
    // Enter password
    Login.passwordInput()
      .click({ force: true })
      .type(password)
      .should("not.contain.text", password);
    // Click on eye button
    Login.eyeButton().click();
    // Password appears
    cy.get('input[type="text"]').should("contain.value", password);
    // Click on login button
    Login.loginButton().click();
    // You successfully login
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("chats");
    });
  });
  /**
   * @issue #2
   *
   * Preconditions:
   * Go to login page
   *
   * Steps:
   * Enter email
   * Enter invalid password
   * Click on login button
   * Error messsage appears
   */
  it("Login with invalid credentials", () => {
    // Go to login page
    Login.visit();
    // Enter email
    Login.emailInput().click({ force: true }).type(email);
    // Enter password
    Login.passwordInput()
      .click({ force: true })
      .type(password.split("").reverse().join(""));
    // Click on login button
    Login.loginButton().click();
    // Error messsage appears
    Login.errorMessage().should('be.visible')
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.not.contain("chats");
    });
  });
});
