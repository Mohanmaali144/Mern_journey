import category from "./category.model.js";
import Product from "./product.model.js";
import Cart from "./cart.model.js";
import User from "./user.model.js";
import cartitem from "./cartitem.model.js";
import Order from "./order.model.js";
category.hasMany(Product, {
  foreignKey: "categoryname",
});
Product.belongsTo(category, {
  foreignKey: "categoryname",
  targetKey: "name",
});

User.hasOne(Cart, {
  foreignKey: "userid",
});
Cart.belongsTo(User, {
  foreignKey: "userid",
  targetKey: "id",
});

Cart.hasMany(cartitem, {
  foreignKey: "cartId",
});
cartitem.belongsTo(Cart, {
  foreignKey: "cartId",
  targetKey: "id",
});


// CartItems Table association
Product.hasMany(cartitem, {
  foreignKey: "productId",
});
cartitem.belongsTo(Product, {
  foreignKey: "productId",
  targetKey: "id",
});

// Order Table association
User.hasMany(Order, {
  foreignKey: "UserID",
});
Order.belongsTo(User, {
  foreignKey: "UserID",
  targetKey: "id",
});

export { category, Product, Cart, User, cartitem, Order };
