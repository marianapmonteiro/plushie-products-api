const { Router } = require("express");
const ProductController = require("../controllers/ProductController");
const router = Router();

router.get("/products", ProductController.getProducts);

router.get("/products/:product_id", ProductController.getProductById);

router.post("/products", ProductController.createProduct);

router.get("/users/products/:product_id", ProductController.getUserProduct);

router.post("/:product_id/:user_id", ProductController.createUserProduct);

router.delete("/products/:product_id", ProductController.deleteProduct);

router.put("/products/:product_id", ProductController.updateProduct);

module.exports = router;
