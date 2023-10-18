const {
  postExpense,
  getExpense,
  getExpenseList,
} = require("../queries/expenseQuery");

const expenseService = async (name, nominal, category) => {
  try {
    const expense = await postExpense(name, nominal, category);
    return expense;
  } catch (err) {
    throw err;
  }
};

const getExpenseService = async (id) => {
  try {
    const expense = await getExpense(id);
    return expense;
  } catch (err) {
    throw err;
  }
};

const getExpenseServiceList = async () => {
  try {
    const expense = await getExpenseList();
    return expense;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  expenseService,
  getExpenseService,
  getExpenseServiceList,
};
