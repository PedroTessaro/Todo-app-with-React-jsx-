import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState, useEffect } from "react";

const App = () => {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  // { input: "Get the groceries!", complete: false },
  // { input: "Learn how to web design", complete: false },
  // { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleCompleteTodo = (index) => {
    // update/edit/modify
    let newTodoList = [...todos];
    let completedTodo = todos[index];

    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);

    handleSaveData(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currentTodos) => {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};

export default App;
