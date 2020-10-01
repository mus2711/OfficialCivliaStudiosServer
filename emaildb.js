import sqlite3 from "sqlite3";
const emaildata = Object.create(null);
emaildata.init = function(email) {


    let db = new sqlite3.Database("./db/subscribers.sqlite", sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Connected to the subscribers SQlite database.");
      });
  
    let sql = `SELECT DISTINCT email name FROM subscribers ORDER BY name`;
    let ins = `INSERT INTO subscribers(email) VALUES("${email}")`;
  
    db.run(ins, [], function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`An email has been inserted`);
    });
    const emailarray = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          // console.log(row.name);
          emailarray.push(row.name);
        });
    });
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
      // console.log(emailarray);
};

export default Object.freeze(emaildata);