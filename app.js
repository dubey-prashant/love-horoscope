const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const zodiac = require(__dirname + "/getZodiac.js");
const calculateLove = require(__dirname + "/calculateLove.js");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//////////////////////// Basic setup End

/////////////////// Home
app.get("/", (req, res) => {
  res.render("home", {yourZodiac: "Welcome!"});
});

////////////////////// Choosing Your Zodiac Start
app.get("/yourZodiac", (req, res) => {
  res.render("zodiac", {name: "yourZodiac", title: "Choose your zodiac sign.", choosenZodiac: ""});
});
app.post("/yourZodiac", (req, res) => {
  const yourZodiac = req.body.yourZodiac;
  res.render("zodiac", {name: "theirZodiac", choosenZodiac:yourZodiac, title: "You have choosen " + yourZodiac + " as your zodiac sign. " + "Now choose their Zodiac sign."});
  });
  ////////////////////  Calculate Result
app.post("/theirZodiac", (req, res) => {
  const yourZodiac = req.body.yourZodiacChoosen;
  const theirZodiac = req.body.theirZodiac;
  const result = calculateLove.calculateLove(yourZodiac, theirZodiac);
  res.render("result", {result: result});
});

////////////////////// Choosing Your Zodiac End


/////////////////////////// Get Zodiac Start
app.get("/getZodiac", (req, res) => {
  res.render("getZodiac");
});
app.post("/getZodiac", (req, res) => {
  let yourZodiac = zodiac.getZodiac(req.body.dOB);
  res.render("home", {yourZodiac: yourZodiac});
});
/////////////////////////// Get Zodiac End





////////////// Listen to port
app.listen(process.env.PORT || 3000, () => {
  console.log("I'm Working Boss! 😎");
});