import order from "../model/order.model.js";

export const insertOrder = async (request, response, next) => {
  const { UserID, Status } = request.body;
  //   console.log(userID, Status);
  await order
    .create({
      UserID,
      Status,
    })
    .then((result) => {
      return response.status(200).json({ masg: "Order data inserted" });
    })
    .catch((err) => {
      console.log(err);
      return response.status(401).json({ err: "internal server Error" });
    });
};
