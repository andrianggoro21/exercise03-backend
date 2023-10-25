const {
  postExpense,
  getExpense,
  getExpenseList,
  getExpenseCategory,
  updateExpense,
  deleteExpense,
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

// const getExpenseServiceCategory = async (category) => {
//   try {
//     const expense = await getExpenseCategory(category);
//     const result = []
//     for (let x in expense) {
//       if (expense[x].category.toLowerCase() == category) {
//         result.push(expense[x])
//       }
//     }
//     let price = 0;
//     for (let y in result) {
//       price += result[y].nominal
//     }
//     return price;
//   } catch (err) {
//     throw err;
//   }
// };

const getExpenseServiceCategory = async (date, category) => {
  try {
    const expense = await getExpenseCategory(date, category);
    if (date || category) {
      let resultNominal = expense
        .map((data) => {
          return data.nominal;
        })
        .reduce((total, num) => +total + +num);
      return `${resultNominal}`;
    }
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
    const { data } = await deleteExpense(id);
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  expenseService,
  getExpenseService,
  getExpenseServiceList,
  getExpenseServiceCategory,
  updateExpenseService,
  deleteExpenseService,
};
