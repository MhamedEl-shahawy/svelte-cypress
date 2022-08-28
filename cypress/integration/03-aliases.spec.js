/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
         cy.get('[data-test="filter-items"]').as("filter");
         cy.get('[data-test="items-unpacked"] > ul li').as("lists")

  });
   describe("aliases filters",()=>{
     it("search tooth",()=>{
        cy.get('@filter').type("Tooth");
        cy.get("@lists").each($list=>{
           expect($list.text()).to.include("Tooth")
        })

     });
   })
});
