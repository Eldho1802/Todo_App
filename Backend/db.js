/*
* todo{
title: string;
description : string;
}


*/

const mongoose = require("mongoose");
const url = "mongodb+srv://eldhotbabu12:E1dho%4012@cluster0.eelp1.mongodb.net/todoDB?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB Connection Error:", err));

  
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}