const {
  expenseService,
  getExpenseService,
  getExpenseServiceList,
} = require("../services/expenseService");

const expenseController = async (req, res) => {
  try {
    const { name, nominal, category } = req.body;
    const dataExpense = await expenseService(name, nominal, category);
    res.status(200).json({
      message: "success",
      expense: dataExpense,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const getExpenseController = async (req, res) => {
  try {
    const { id } = req.params;
    const dataExpense = await getExpenseService(id);
    res.status(200).json({
      message: "success",
      expense: dataExpense,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const getExpenseControllerList = async (req, res) => {
  try {
    const dataExpense = await getExpenseServiceList();
    return res.status(200).json({
      message: "success",
      expense: dataExpense,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  expenseController,
  getExpenseController,
  getExpenseControllerList,
};
