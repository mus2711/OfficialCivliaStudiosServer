import sqlite3 from "sqlite3";
const emailclient = Object.create(null);
emailclient.init = function() {


    let db = new sqlite3.Database("./db/subscribers.sqlite", sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
      });
    let sql = `SELECT DISTINCT email name FROM subscribers ORDER BY name`;
    const emailarray = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          emailarray.push(row.name);
        });
    });
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });

    return emailarray;
};

export default Object.freeze(emailclient);