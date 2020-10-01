import sqlite3 from "sqlite3";
const insertcomments = Object.create(null);
insertcomments.init = function(database, name, comment) {

    let db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Connected to the subscribers SQlite database.");
      });
    let sql = `SELECT * FROM comment`;
    let ins = `INSERT INTO comment(name, comment) VALUES('${name}', '${comment}')`;
    db.run(ins, [], function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log(`An comment has been inserted`);
    });
    const namearray = [];
    const commentarray = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          namearray.push(row.name);
          commentarray.push(row.comment);
        });
    });
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
};
export default Object.freeze(insertcomments);