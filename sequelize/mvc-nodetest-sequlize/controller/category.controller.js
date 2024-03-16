import category from "../model/category.model.js";
import { validationResult } from "express-validator";
export const insertCat = async (request, response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    let categoryList = request.body;
    for (let cat of categoryList) {
      await category.create({ name: cat.name });
    }
    return response.status(200).json({ message: "All category inserted.." });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
