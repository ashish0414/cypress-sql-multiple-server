module.exports = function() {
  Cypress.Commands.add('sqlServer1', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer1:execute', query).then(response => {
      return response;  // Now response is an array of JSON objects
    });
  });

  Cypress.Commands.add('sqlServer2', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer2:execute', query).then(response => {
      return response;  // Now response is an array of JSON objects
    });
  });

  Cypress.Commands.add('sqlServer3', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer3:execute', query).then(response => {
      return response;  // Now response is an array of JSON objects
    });
  });
};
