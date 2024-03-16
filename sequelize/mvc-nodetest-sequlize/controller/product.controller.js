import Product from "../model/product.model.js";
import { validationResult } from "express-validator";
export const insertProduct = async (request, response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let productList = request.body;
    for (let product of productList) {
      let {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        thumbnail,
        category,
      } = product;
      let imageArray = "";
      for (let imageUrl of product.images) {
        imageArray = imageArray + imageUrl + " ";
      }
      await Product.create({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        thumbnail,
        categoryname: category,
        images: imageArray,
      });
    }
    return response
      .status(201)
      .json({ message: "Product Inserted Succesfully " });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProduct = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  let id = request.params.id;
  Product.destroy({ where: { id } })
    .then((result) => {
      return response.status(201).json({ msg: "Product delete successfully" });
    })
    .catch((err) => {
      return response.status(500).json({ msg: "internal server error" });
    });
};

export const getProduct = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  let id = request.params.id;
  Product.findOne({ where: { id } })
    .then((result) => {
      return response.status(201).json(result);
    })
    .catch((err) => {
      return response.status(500).json({ msg: "internal server error" });
    });
};

export const getProductList = (request, response, next) => {
  Product.findAll()
    .then((result) => {
      return response.status(201).json(result);
    })
    .catch((err) => {
      return response.status(500).json({ msg: "internal server error" });
    });
};
