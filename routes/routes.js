import express from "express";
import {
  userSignUp,
  userLogin,
  getProduct,
  getProductById,
} from "../Controller/userController.js";
import { addPaymentGateway } from "../Controller/PatmentController.js";
const router = express.Router();
router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/products", getProduct);
router.get("/product/:id", getProductById);
router.post("/payment", addPaymentGateway);
export default router;
