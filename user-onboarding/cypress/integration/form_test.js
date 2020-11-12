describe("Quotes app", () => {
    beforeEach(() => {
      // arbitrary code you want running before your tests start: setup
      cy.visit("http://localhost:3000/");
    });
    it("Initial test", () => {
        expect(1 + 2).to.equal(3);
        expect(3 + 2).to.equal(4);
    })
});