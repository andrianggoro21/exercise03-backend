const {
  postExpense,
  getExpense,
  getExpenseList,
  updateExpense,
  deleteExpense,
  getExpensesesQuery
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
    const expense = await getExpensesesQuery();
    // const expense = await getExpense(id);
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

const updateExpenseService = async (name, nominal, category, id) => {
    try {
      const expense = await updateExpense(name, nominal, category, id);
      return expense;
    } catch (err) {
      throw err;
    }
  };

  const deleteExpenseService = async (id) => {
    try {
      const {data} = await deleteExpense(id);
      return data;
    } catch (err) {
      throw err;
    }
  };

module.exports = {
  expenseService,
  getExpenseService,
  getExpenseServiceList,
  updateExpenseService,
  deleteExpenseService,
};
