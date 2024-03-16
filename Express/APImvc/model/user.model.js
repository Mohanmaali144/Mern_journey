import pool from "../dbconfig.js";

export default class User {
  constructor(id, username, email, password, contact) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.contact = contact;
  }

  signUp() {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error);
        } else {
          let sql =
            "insert into users(username,email,password,contact) values(?,?,?,?)";
          connection.query(
            sql,
            [this.username, this.email, this.password, this.contact],
            (err, result) => {
              connection.release();
              if (error) error ? reject(err) : resolve(result);
            }
          );
        }
      });
    });
  }
}
