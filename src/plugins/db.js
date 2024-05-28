const Tedious = require('tedious');

module.exports = (dbConfig) => {
  const executeQuery = (sql) => {
    const connection = new Tedious.Connection(dbConfig);
    return new Promise((res, rej) => {
      connection.on('connect', err => {
        if (err) {
          rej(err);
        }

        const request = new Tedious.Request(sql, function(err, rowCount, rows) {
          if (err) {
            rej(err);
          } else {
            const result = rows.map(row => {
              let rowObject = {};
              row.forEach(column => {
                rowObject[column.metadata.colName] = column.value;
              });
              return rowObject;
            });
            res(result);
          }
        });

        connection.execSql(request);
      });
    });
  };

  return {
    'sqlServer1:execute': executeQuery,
    'sqlServer2:execute': executeQuery,
    'sqlServer3:execute': executeQuery
  }
};
