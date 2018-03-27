describe("Adds a name to the lunch bunch", () => {
    it("adds a person", () => {
        cy.visit("/")

        cy.get(".person-card").should("have.length", 1);
        cy.get("#name").type("Guillermo");
        cy.get("#birthday").type("1985-02-04");
        cy.get("#add").click();

        cy.get(".person-card").should("have.length", 2);
        cy.get(".person-card").eq(1).find(".name").should("have.text", "Guillermo");
    });
});
