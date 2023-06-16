const express = require("express");
const app = express();
const {Todo} =require("./models/todo.models");


const todos = [
  {
    title: "Todo_1",
    desc: "This is my first Todo",
    completed: true,
  },

  {
    title: "Todo_2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];
// Data source ends here

app.get("/", (request, response) => {
  response.status(200).json(todos);
});

// Todos Routers

// Get Todos
app.get("/todos",(req,res)=>{
  console.log("Request:", req, "Response:", res)
})

// Add Todos
const addTodos=(req,res)=>{
  const newTodo = req.body; 
  todos.push(newTodo);
  res.json(newTodo);
  console.log(newTodo);
}
app.post("/todos", addTodos);

// get Todos with id
const getTodoById =(req,res)=>{
  const title =req.params.title;  
  console.log(res);
}

app.get("/todos/:title", getTodoById)

// Update Todos
const updateTodo=(req,res)=>{
  const title=req.params.title;
  const updatedData=req.body;
  res.json({"message":"Updated"});
  console.log(updateTodo);
}
app.put("/todos/:title",updateTodo)

// Delete Todos
const deleteTodo=(req,res)=>{
  const title=req.params.title;
const mySecret = process.env['Password']
  const deletedData=req.body;
  console.log(deleteTodo);
}
app.delete("/todos/:title",deleteTodo)

module.exports = app;

