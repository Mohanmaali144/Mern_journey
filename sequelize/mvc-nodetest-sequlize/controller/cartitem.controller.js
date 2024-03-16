import cartitem from "../model/cartitem.model.js";
import { Op } from "sequelize";
import { validationResult } from "express-validator";
export const insertCartitem = async (request, response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { cartId, productId, quantity } = request.body;
    await cartitem.create({
      cartId: cartId,
      productId: productId,
      quantity: quantity,
    });

    return response.status(200).json({ message: "cartitem inserted.." });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const increaseQuantity = async (request, response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { cartId, productId } = request.body;
    await cartitem
      .increment("quantity", {
        by: 1,
        where: {
          [Op.and]: [{ cartId }, { productId }],
        },
        raw: true,
      })
      .then((result) => {
        return response.status(200).json({ message: "quantity incresed.." });
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({ massage: "internal server error" });
      });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

// decrese Quantity......
export const decreaseQuantity = async (request, response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { cartId, productId } = request.body;
    await cartitem
      .decrement("quantity", {
        by: 1,
        where: {
          [Op.and]: [{ cartId }, { productId }],
        },
        raw: true,
      })
      .then((result) => {
        return response.status(200).json({ message: "quantity decresed.." });
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({ massage: "internal server error" });
      });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
