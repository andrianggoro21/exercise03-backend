const express = require("express");
const router = express.Router();
const {
  expenseController,
  getExpenseController,
  getExpenseControllerList,
  getExpenseControllerCategory,
  updateExpenseController,
  deleteExpenseController,
} = require("../controllers/expenseController");

router.post("/", expenseController);
router.get("/:id", getExpenseController);
router.get("/", getExpenseControllerList);
router.get("/new/new", getExpenseControllerCategory);
router.patch("/by", updateExpenseController);
router.delete("/by/:id", deleteExpenseController)

module.exports = router;
