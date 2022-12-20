import ActorList from "./ActorList"

describe('<Actorlist />>', () => {
  it('mounts', () => {
    cy.intercept('GET', '*/allactors', []).as('getActors')
    cy.wait('@getActors')
    cy.mount(<ActorList />);
  })
  it('Has content', () => {
    cy.mount(<ActorList />);
    cy.get('h2').should('be.visible');
  })
})