describe("Form tests", () => {
    beforeEach(() => {
      // arbitrary code you want running before your tests start: setup
      cy.visit("http://localhost:3000/");
    });

    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsInput = () => cy.get('input[name="terms"]');
    const submitButton = () => cy.get('button');
    const userCard =() => cy.get('#card0');
    
    const name ="Lary";
    const email ="my@email.com";
    const password ="der_password"


    it("Initial test", () => {
        expect(1 + 2).to.equal(3);
    })

    it("Name form test", () => {
      
      nameInput()
        .should("exist")
        .type(name)
        .should("have.value", name);
    })

    it("Email form test", () => {
      emailInput()
        .should("exist")
        .type(email)
        .should("have.value", email);
    })

    it("Password form test", () => {
      passwordInput()
        .should("exist")
        .type(password)
        .should("have.value", password);
    })

    it("Terms check test", () => {
      termsInput()
        .not('[disabled]')
        .check()
        .should('be.checked');
    })

    it("Form submit test", () =>  {
      nameInput().type(name);
      emailInput().type(email);
      passwordInput().type(password);
      termsInput().check();
      submitButton()
      .should("be.enabled")
      .click();
      nameInput().should("have.value", "");
      emailInput().should("have.value", "");
      passwordInput().should("have.value", "");
    })
});