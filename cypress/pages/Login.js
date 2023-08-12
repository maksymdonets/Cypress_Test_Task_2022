import Buttons from "../pages/elements/buttons/Buttons";

export default {
  ...Buttons,
  url: "/",
  visit() {
    cy.visit(this.url);
  },
  loginTitle: () =>
    cy
      .get(".login-form__title")
      .should("contain.text", "Welcome to Omni-dispatch TMS"),
  loginSubtitle: () =>
    cy
      .get(".login-form__subtitle")
      .should("contain.text", "Log in to your account"),
  emailInput: () => cy.get('input[type="email"]'),
  passwordInput: () => cy.get('input[type="password"]'),
  errorMessage: () =>
    cy.get(".v-messages__message").contains("Wrong Email or password"),
  loginButton: () => Buttons.button("Log in"),
  eyeButton: () => cy.get('[aria-label="Password appended action"]'),
};
