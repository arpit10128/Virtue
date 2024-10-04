const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const ejs = require('ejs');

const MONGO_URL = 'mongodb://127.0.0.1:27017/ZoomMyTest';

main()
.then((res) => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
  }

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));


app.listen(8080, (req, res) => {
    console.log("Port is listening to 8080");
});

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/home", (req, res) => {
    res.render("listings/home.ejs");
});

app.get("/joinAsGuest", (req, res) => {
    res.render("listings/joinAsGuest.ejs");
})

app.get("/register", (req, res) => {
    res.render("listings/register.ejs");
})

app.get("/auth", (req, res) => {
    res.render("listings/auth.ejs");
})

app.get("/login", (req,res) => {
    res.render("listings/login.ejs");
})