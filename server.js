const express = require("express");
const app = express();
const port = 3000;

const todos = [
  {
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },

  {
    title: "Todo 2",
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

// Endpoint starts here
app.get("/", (request, response) => {
  response.status(200).json(todos);
});

app.get("/todos", (request, response) => {
  response.status(200).json(todos);
});

app.get("/todos/:id", (request, response) => {
  response
    .status(200)
    .json({ data: todos.find((todo) => todo.id === request.params.id) });
});

const addpost=("/todos", (request, response) => {
  todos.push(request.body);
  response.status(201).json({ msg: "Todo created successfully" });
});


const addTodo=(request,response)=>{
  todos.push(request.body);
  response.status(201).json({msg:"Todo created sucessfully"});
}

const deletetodo=("/todos/:id", async (request, response) => {
  const id = req.params.id
  const temp = await repo.delete(id)
    response.status(200).json({ msg: "Todo deleted successfully" });
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});