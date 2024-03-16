import cart from "../model/cart.model.js";
import { Result, validationResult } from "express-validator";
export const createCart = async (request, response, next) => {
  const userid = request.params.userid;
  const userExists = await cart.findOne({
    where: {
      userid: userid,
    },
  });

  if (userExists)
    return response.status(401).json({ msg: "User Cart allready exists" });
  await cart
    .create({
      userid: userid,
    })
    .then((result) =>
      response
        .status(201)
        .json({ massage: "Cart Cretaed Successfully", data: result })
    )
    .catch((error) => {
      console.log(error);
      response.status(500).json({ err: "Internal server error" });
    });
};

export const deleteCart = async (request, response, next) => {
  const userid = request.params.userid;
  await cart
    .destroy({
      where: {
        userid: userid,
      },
    })
    .then((result) => {
      console.log(result);
      if (result)
        return response
          .status(201)
          .json({ massage: "Cart delete Successfully" });
      else
        return response
          .status(201)
          .json({ massage: "UserId Not found" });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({ err: "Internal server error" });
    });
};
