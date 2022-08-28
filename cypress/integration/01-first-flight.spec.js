/// <reference types="cypress" />

describe('Create a New Item', () => {
  
   beforeEach(()=>{
    cy.visit("jetsetter")
   });
   it("should have form",()=>{
      cy.get("form").should("exist")
   });
   it("should formm not exist",()=>{
      cy.get("formm").should("not.exist")
   })
   it('should have the words "Add Item"',()=>{
    cy.contains("Add Item")
   });
   it("should have value input field also add it",()=>{
      cy.get('[data-test="new-item-input"]').type("good cypress")
      cy.get("form").submit();
   });
   it("should have actual  value input field also submit it",()=>{
      let item = "share essam";
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get("form").submit();
      cy.get('[data-test="items-unpacked"] > ul li').contains(item)
   });
});
