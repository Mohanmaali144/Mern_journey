import express from "express";
import pool from "./dbconfig.js";
import bodyParser from "body-parser";

const app = express();

// parsig for application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parsing for application/json
app.use(bodyParser.json());

//router Sign-up user
app.post("/user/signup", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
    } else {
      let { username, email, password, contact } = req.body;
      let sql =
        "insert into users (username,email,password,contact) values (?,?,?,?)";
      con.query(sql, [username, email, password, contact], (error, result) => {
        if (error) {
          res.status(500).json({ error: "internal server erorr !! " });
        } else {
          res.status(200).json({ massage: "    signup successfully... " });
        }
      });
    }
  });
});

//router Sign-in user
app.post("/user/signin", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let { email, password } = req.body;
      let sql = "select * from users where email = ? ANd password = ?";
      con.query(sql, [email, password], (error, result) => {
        if (error) {
          res.status(500).json({ error: "internal server erorr !! " });
          return;
        } else {
          if (result.length === 0) {
            res.status(404).json({ error: "User not found" });
            return;
          }
          res.status(200).json({ massage: "    sigin successfully" });
        }
      });
    }
  });
});

// Router for update Username by email
app.put("/user/update", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let { email, username } = req.body;
      console.log(req.body);
      let sql = "UPDATE users SET username = ? WHERE email = ?";
      con.query(sql, [username, email], (error, result) => {
        if (error) {
          res.status(500).json({ error: "internal server error" });
          return;
        } else {
          res.status(200).json({ result: "Update successful" });
        }
      });
    }
  });
});

//Router for delete User by Id
app.delete("/user/:userid", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let userId = req.params.userid;
      let sql = "DELETE FROM users WHERE userid = ?"; // Corrected column name
      con.query(sql, [userId], (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).json({ error: "internal server error" });
          return;
        } else {
          res.status(200).json({ result: "Delete User successful" });
        }
      });
    }
  });
});

// Router for add New Product
app.post("/product/add", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let { name, description, price, categoryId, thumbnail, quantity } =
        req.body;
      let sql =
        "insert into products (name,description,price,categoryId,thumbnail,quantity) values(?,?,?,?,?,?)";
      con.query(
        sql,
        [name, description, price, categoryId, thumbnail, quantity],
        (error, result) => {
          if (error) {
            console.log(error);
            res.status(500).json({ error: "internal server erorr !! " });
            return;
          } else {
            res.status(200).json({ massage: " Product added successfully" });
          }
        }
      );
    }
  });
});

//Router for  Get Product by ID
app.get("/product/:productId", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let productId = req.params.productId;
      let sql = "select * from products where productId = ?";
      con.query(sql, [productId], (error, result) => {
        if (error) {
          res.status(500).json({ error: "internal server Error !!" });
          return;
        } else {
          res.status(200).json(result);
        }
      });
    }
  });
});

// Router for Get All Products
app.post("/product/allproducts", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let sql = "select * from products";
      con.query(sql, (error, result) => {
        if (error) {
          res.status(500).json({ error: "internal server Error !!" });
          return;
        } else {
          console.log("hello ");
          console.log(result);
          res.status(200).json(result);
        }
      });
    }
  });
});

// Router for Delete Product By id
app.delete("/product/:productId", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    } else {
      let productId = req.params.productId;
      let sql = "DELETE FROM products WHERE productId = ?";
      con.query(sql, [productId], (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).json({ error: "internal server error" });
          return;
        } else {
          res.status(200).json({ result: "Delete Product successful" });
        }
      });
    }
  });
});

// Router for update Product quantity by id
app.put("/product/update", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      res.status(500).json({ error: "internal server error" });
      return;
    }
    const { productId, quantity } = req.body;
    const sql = "UPDATE products SET quantity = ? WHERE productId = ?";
    con.query(sql, [quantity, productId], (error, result) => {
      con.release();
      if (error) {
        res.status(500).json({ error: "internal server error" });
        return;
      }
      console.log("Update Result:", result);
      res.status(200).json({ message: "Quantity updated successfully" });
    });
  });
});

// Rout for creating Cart
app.post("/user/cart", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      return res.status(500).json({ error: "internal server Error !!" });
    } else {
      let { userId } = req.body;
      let sql = "INSERT INTO carts (userId) VALUES (?)";
      con.query(sql, [userId], (error, result) => {
        con.release();
        if (error) {
          return res.status(500).json({ error: "internal server Error !!" });
        } else {
          res.status(200).json({ result: "Cart ctreated Successfully" });
        }
      });
    }
  });
});

// Rout fro adding cartitems
app.post("/user/cartitems", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      return res.status(500).json({ error: "internal server Error !!" });
    } else {
      let { cartId, productId, quantity } = req.body;
      let sql =
        "INSERT INTO cartitems (cartId, productId, quantity) VALUES (?, ?, ?)";
      con.query(sql, [cartId, productId, quantity], (error, result) => {
        con.release();
        if (error) {
          console.log(error);
          return res.status(500).json({ error: "internal server Error !!" });
        } else {
          res.status(200).json({ result: "Cart item added Successfully" });
        }
      });
    }
  });
});

// Rout for Getting cartitems
app.get("/user/cartitems/:userid", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      return res.status(500).json({ error: "internal server Error !!" });
    } else {
      let userid = req.params.userid;
      let sql =
        "SELECT carts.cartId, carts.userId, carts.createdAt, carts.updatedAt, cartitems.cartItemId, cartitems.productId, cartitems.quantity FROM carts JOIN cartitems ON carts.cartId = cartitems.cartId WHERE carts.userId = ?";

      con.query(sql, [userid], (error, result) => {
        con.release();
        if (error) {
          console.log(error);
          return res.status(500).json({ error: "internal server Error !!" });
        } else {
          res.status(200).json(result);
        }
      });
    }
  });
});

// Router for remove Product
app.delete("/user/cartitems/:productid", (req, res, next) => {
  pool.getConnection((error, con) => {
    if (error) {
      return res.status(500).json({ error: "internal server Error !!" });
    } else {
      let productId = req.params.productid;
      let sql = "DELETE FROM cartitems WHERE productId = ?";

      con.query(sql, [productId], (error, result) => {
        con.release();
        if (error) {
          console.log(error);
          return res.status(500).json({ error: "internal server Error !!" });
        } else {
          res.status(200).json({ result: "Product Remove Successfully" });
        }
      });
    }
  });
});

// server creating ....
app.listen(3000, () => {
  console.log("server created....");
});
