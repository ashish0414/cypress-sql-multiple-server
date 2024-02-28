module.exports = function() {
  Cypress.Commands.add('sqlServer1', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer1:execute', query).then(response => {
      let result = [];

      const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

      if(response) {
        for (let i in response) {
          result[i] = [];
          for (let c in response[i]) {
            result[i][c] = response[i][c].value;
          }
        }
        result = flatten(result);
      } else {
        result = response;
      }

      return result;
    });
  });
  Cypress.Commands.add('sqlServer2', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer2:execute', query).then(response => {
      let result = [];

      const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

      if(response) {
        for (let i in response) {
          result[i] = [];
          for (let c in response[i]) {
            result[i][c] = response[i][c].value;
          }
        }
        result = flatten(result);
      } else {
        result = response;
      }

      return result;
    });
  });
  Cypress.Commands.add('sqlServer3', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer3:execute', query).then(response => {
      let result = [];

      const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

      if(response) {
        for (let i in response) {
          result[i] = [];
          for (let c in response[i]) {
            result[i][c] = response[i][c].value;
          }
        }
        result = flatten(result);
      } else {
        result = response;
      }

      return result;
    });
  });
}