const express = require("express");
const path = require("path");
const parser = require("body-parser");


require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});

const PORT = process.env.PORT || 8000;
const app = new express();

app.use(parser.json());

const router = require("./routers/expenseRoute");

app.use("/expense", router)

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})