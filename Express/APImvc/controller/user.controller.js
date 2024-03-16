import User from "../model/user.model.js";

export const signUp = (request, response, next) => {
  let { username, email, password, contact } = request.body;
  let user = new User(null, username, email, password, contact);
  user
    .signUp()
    .then((result) => {
      return response.status(200).json({ message: "Sign up success...." });
    })
    .catch((err) => {
      return response.status(500).json({ err: "Insernal Server Error.." });
    });
};
