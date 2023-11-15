const express = require("express");
const fs = require("fs-extra");

const app = express();

app.get("/", (req, res) => {
  async function fetchsportsnews() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=51&category=sports&apiKey=cc20780abbd046819691ed7d259ce875`
    );
    let data = await response.json();
    res.send(data);
    console.log(data);
    // fs.writeFileSync('newsfile.json',data);

    fs.writeJSONSync("./api/sports.json", data);
  }

  async function fetchgenenralnews() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=51&category=general&apiKey=cc20780abbd046819691ed7d259ce875`
    );
    let data = await response.json();
    fs.writeJSONSync("./api/general.json", data);
  }

  async function fetchentertaninmentnews() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=51&category=entertainment&apiKey=cc20780abbd046819691ed7d259ce875`
    );
    let data = await response.json();
    fs.writeJSONSync("./api/entertainment.json", data);
  }

  async function fetchtechnologynews() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=51&category=technology&apiKey=cc20780abbd046819691ed7d259ce875`
    );
    let data = await response.json();
    fs.writeJSONSync("./api/technology.json", data);
  }

  fetchgenenralnews();
  fetchtechnologynews();
  fetchentertaninmentnews();
  fetchsportsnews();
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
