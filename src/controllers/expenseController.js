const {
  expenseService,
  getExpenseService,
  getExpenseServiceList,
  getExpenseServiceCategory,
  updatetExpenseService,
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

// const getExpenseControllerCategory = async (req, res) => {
//   try {
//     const { category }  = req.params;
//     const dataExpense = await getExpenseServiceCategory(category);
//     res.status(200).json({
//       message: "success",
//       expense: dataExpense,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// };

const getExpenseControllerCategory = async (req, res) => {
  try {
    const { date = null, category = null }  = req.query;
    const dataExpense = await getExpenseServiceCategory(date, category);
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

const updateExpenseController = async (req, res) => {
  try {
    const { name, nominal, category, id } = req.query;
    const dataExpense = await updatetExpenseService(name, nominal, category, id);
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

module.exports = {
  expenseController,
  getExpenseController,
  getExpenseControllerList,
  getExpenseControllerCategory,
  updateExpenseController
};
