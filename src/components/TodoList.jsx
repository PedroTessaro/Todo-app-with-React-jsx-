import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, selectedTab } = props;

  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
        ? todos.filter((val) => val.complete)
        : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            {...props}
          />
        );
      })}
    </>
  );
};

export default TodoList;
