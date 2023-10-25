const express = require("express");
const router = express.Router();
const { expenseController, getExpenseController, getExpenseControllerList, updateExpenseController, deleteExpenseController } = require("../controllers/expenseController");

router.post("/", expenseController)
router.get("/:id", getExpenseController)
router.get("/", getExpenseControllerList)
router.patch("/new", updateExpenseController)
router.delete("/by/:id", deleteExpenseController)




module.exports = router;