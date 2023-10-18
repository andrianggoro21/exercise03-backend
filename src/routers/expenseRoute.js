const express = require("express");
const router = express.Router();
const { expenseController, getExpenseController, getExpenseControllerList } = require("../controllers/expenseController");

router.post("/", expenseController)
router.get("/:id", getExpenseController)
router.get("/", getExpenseControllerList)



module.exports = router;