const express = require("express");
const router = express.Router();
const { createUserValidation, loginvalidation, updateUserValidation } = require("../../middleware/input-validation");
const { authenticateJWT } = require("../../middleware/authentication");
const { upload } = require("../../middleware/file");

router.get("/", (req, res) => {
  return res.send({
    project: "API v1 Web Service Praktikum Back-ENd",
  });
});

var userApi = require("../../api/controller/UserController");
// User

router.get("/user", userApi.get);
router.get("/user/:id", userApi.getById);
router.post("/user", userApi.create);
router.put("/user/:id", userApi.update);
router.delete("/user/:id", userApi.delete);

module.exports = router;
