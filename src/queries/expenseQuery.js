const axios = require("axios");

// create database
const postExpense = async (name, nominal, category) => {
  try {
    const { data } = await axios.post(`${process.env.JSON_URL}/expense`, {
      name,
      nominal,
      category,
      date: new Date(),
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

module.exports = {
  postExpense,
  getExpense,
  getExpenseList,
};
