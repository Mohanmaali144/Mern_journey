import { Router } from "express";
import {
    deleteCategoryById,
    getAllCategoryName,
    getCategoryById,
    insertCategoryName,
    updateCategoryById,
} from "../controller/category.controller.js";

const router = Router();

router.post("/insert-category", insertCategoryName);
router.get("/getAllCategory", getAllCategoryName);
router.get("/getCatById/:id", getCategoryById);
router.put("/update/:id", updateCategoryById);
router.delete("/delete/:id", deleteCategoryById);

export default router;
