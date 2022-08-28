/// <reference types="cypress" />

describe('Basic Practice', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  describe('Adding a new item', () => {
    it('should put a new item on the page after clicking on "Add Item"', () => {});

    it('should put a new item in the "Unpacked Items" list', () => {});

    it('should put a new item as the last item in the "Unpacked Items" list', () => {});
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
         cy.get('[data-test="filter-items"]').type("Tooth");
           cy.get('[data-test="items-unpacked"]  ul li').each($item =>{
           expect($item.text()).to.include("Tooth");
      })

    });

    it('should hide items that do not match whatever is in the filter field', () => {
     cy.get('[data-test="filter-items"]').type("Tooth");
      cy.contains("Hoodie").should("not.exist");
    });
  });

  describe('Removing items', () => {
    describe('Remove all', () => {
      it('should remove all of the items', () => {
        cy.get('[data-test="remove-all"]').click();
        cy.get('[data-test="items-unpacked"] > ul').contains("No items to show.")
      });
    });

    describe('Remove individual items', () => {
      it('should have a remove button on an item', () => {

        cy.get('[data-test="items"] li').each(($item)=>{
           cy.wrap($item).find(`[data-test="remove"]`).click();
           cy.wrap($item).should("not.exist");
            
        })
         cy.get('[data-test="items-unpacked"] > ul').contains("No items to show.")
      });

      it('should remove an item from the page', () => {});
    });
  });

  describe('Mark all as unpacked', () => {
    it('should empty out the "Packed" list', () => {});

    it('should empty have all of the items in the "Unpacked" list', () => {});
  });

  describe('Mark individual item as packed', () => {
    it('should move an individual item from "Unpacked" to "Packed"', () => {});
  });
});
