# Introduction
Allows interaction with a SQL Server database from Cypress commands

# Install
Add git repo to your `package.json` dependencies

```
"cypress-sql-multiple-server": "*"
```

or use `npm install` and save

```
npm install --save-dev cypress-sql-multiple-server
```

# Configure
## Plugin file
The plug-in can be initialised in your `cypress/plugins/index.js` file as below.

```
const sqlServer1= require('cypress-sql-multiple-server');
const sqlServer2 = require('cypress-sql-multiple-server')

module.exports = (on, config) => {
 MSSQLServer1 = sqlServerTransaction.loadDBPlugin(configData.Server1);
    MSSQLServer2 = sqlServerReport.loadDBPlugin(configData.Server2)
    on('task', {
      'sqlServer1:execute': MSSQLServer1['sqlServer1:execute'],
      'sqlServer2:execute': MSSQLServer2['sqlServer2:execute']
    })
}
```

## Commands file
The extension provides multiple sets of commands. You can import the ones you need. Example `support/index.js` file.

```
import sqlServer from 'cypress-sql-multiple-server';
sqlServer.loadDBCommands();
```

## cypress.json
Your cypress.json (or environment specific files in the config directory) should specify the DB redentials in the following format

    "server1": {
        "userName": "",
        "password": "",
        "server": "",
        "options": {
            "database": "",
            "encrypt": true,
            "rowCollectionOnRequestCompletion" : true
        }
    }

# Usage
## cy.sqlServer(query)

```
cy.sqlServer1(`SELECT 'test').should('eq', 'test');
cy.sqlServer2(`SELECT 'test').should('eq', 'test');
```

# Testing
## Run `npm test` to execute Cypress tests. Note that DB credentials will need to be provided in your cypress.json file first.
