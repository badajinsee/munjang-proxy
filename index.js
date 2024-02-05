const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/getBooks", async (req, res) => {
  const inputTitle = req.query.title;
  const key = "ttbangle3071358001";
  const response = await axios.get(`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?TTBKey=${key}&Query=${inputTitle}&Cover=Big&output=JS&Version=20131101`);
  res.send(response.data.item);
});

app.get("/listBooks", async (req, res) => {
  const key = "ttbangle3071358001";
  const response = await axios.get(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${key}&QueryType=Bestseller&Cover=Big&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`);
  res.send(response.data.item);
});

app.get("/newSpecialBook", async (req, res) => {
  const key = "ttbangle3071358001";
  const response = await axios.get(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${key}&QueryType=ItemNewSpecial&Cover=Big&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`);
  res.send(response.data.item);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
