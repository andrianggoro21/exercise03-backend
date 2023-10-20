const axios = require("axios");

// create database
const postExpense = async (name, nominal, category) => {
  try {
    const { data } = await axios.post(`${process.env.JSON_URL}/expense`, {
      name,
      nominal,
      category,
      date: `${new Date().getDate()}-${
        new Date().getUTCMonth() + 1
      }-${new Date().getFullYear()}`,
    });
    return data;
  } catch (err) {
    throw err;
  }
};

// get detail by id
const getExpense = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.JSON_URL}/expense/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

// get list all
const getExpenseList = async () => {
  try {
    const { data } = await axios.get(`${process.env.JSON_URL}/expense`);
    return data;
  } catch (err) {
    throw err;
  }
};

// // get list category
// const getExpenseCategory = async () => {
//   try {
//     const { data } = await axios.get(`${process.env.JSON_URL}/expense`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

const getExpenseCategory = async (date, category) => {
  try {
    let url = `${process.env.JSON_URL}/expense`;
    if (category) url = `${url}?category=${category}`;
    if (date) url = `${url}?date=${date}`;
    const { data } = await axios.get(`${url}`);
    return data;
  } catch (err) {
    throw err;
  }
};

const updatetExpense = async (name, nominal, category, id) => {
  try {
    const { data } = await axios.patch(
      `${process.env.JSON_URL}/expense/${id}`,
      {
        name,
        nominal,
        category,
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  postExpense,
  getExpense,
  getExpenseList,
  getExpenseCategory,
  updatetExpense,
};
