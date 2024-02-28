describe("db test", () => {
  it("Can select a flattened single-column value", () => {
	const sql = `select 'col1'`;

    cy.sqlServer(sql).should('eq', 'col1');
  });

  it("Can select a flattened multi-column set", () => {
    cy.sqlServer1('SELECT * FROM [DB].[SCHEMA].[DATABSE]').then((res) => {
      cy.log(JSON.stringify(res))
      console.log(res)
    })
    cy.sqlServer2('select * FROM [DB].[SCHEMA].[DATABSE]').then((res) => {
      cy.log(JSON.stringify(res))
      console.log(res)
      //var jsonObj = JSON.parse(res[1][3])
      cy.log(JSON.stringify(res))
  })
})
})

