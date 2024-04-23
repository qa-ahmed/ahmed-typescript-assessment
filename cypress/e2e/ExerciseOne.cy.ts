describe('Prevent submission without CAPTCHA Verification', () => {
  beforeEach(() => {
    cy.visit('https://lastcallmedia.com/contact');

    cy.get('#edit-field-name-0-value').as('Name');
    cy.get('#edit-mail-box').as('Email');
    cy.get('#edit-message-0-value').as('Message');
    cy.get('#edit-submit').as('Submit');
    cy.intercept('POST', 'https://lastcallmedia.com/cdn-cgi/rum?').as('Submission');
  });

  it('should prevent form submission without solving CAPTCHA', () => {
    cy.get('@Name')
      .type('Ahmedul Khan');
    cy.get('@Email')
      .type('devasif1001@gmail.com');
    cy.get('@Message')
      .type('I look forward to work with you!');
    cy.get('@Submit')
      .click();
    cy.wait('@Submission')
      .its('response.body')
      .should('deep.equal', '')
    cy.get('div[role="alert"]').should('contain', 'The answer you entered for the CAPTCHA was not correct');
  });

});