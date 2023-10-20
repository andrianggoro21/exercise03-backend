const express = require("express");
const router = express.Router();
const {
  expenseController,
  getExpenseController,
  getExpenseControllerList,
  getExpenseControllerCategory,
  updateExpenseController,
} = require("../controllers/expenseController");

router.post("/", expenseController);
router.get("/:id", getExpenseController);
router.get("/", getExpenseControllerList);
router.get("/new/new", getExpenseControllerCategory);
router.patch("/by", updateExpenseController);

module.exports = router;
