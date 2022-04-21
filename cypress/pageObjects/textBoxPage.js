import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url () {
    return '/text-box';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }
}

export default TextBoxPage;
