import { getStorybookLogo } from '../support/storybook.po';

describe('Storybook', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the bje logo', () => {
    // Function helper example, see `../support/app.po.ts` file
    getStorybookLogo().should('be.visible');
  });
});
