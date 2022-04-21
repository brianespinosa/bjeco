import { getLogo } from '../support/app.po';

describe('bjeco', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the bje logo', () => {
    // Function helper example, see `../support/app.po.ts` file
    getLogo().invoke('attr', 'title').should('eq', 'bje logo');
  });
});
