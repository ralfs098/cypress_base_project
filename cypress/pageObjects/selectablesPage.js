import BasePage from "./basePage";

class SelectablesPage extends BasePage {
	static get url() {
		return '/selectable';
	}

	static get exampleElement() {
		return cy.get('exampleSelector');
	}
	static get listItems() {
		return cy.get("#verticalListContainer > li");
	}

	static get listItems() {
		return cy.get("#demo-tab-grid > div > li");
	}
}

export default SelectablesPage;