import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { fetchAllTodo, postTodo, updateTodo, deleteTodo } from "./api/todo";
import Todoitem from "./components/Todoitem";
import "./css/Todo.css";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState("");
  const [updateTask, setUpdateTask] = useState(null);

  const handleEdit = (id) => {
    // update from backend

    const item = todoItems.find((item) => item.id === id);
    setUpdateTask(item);
  };

  const handleDelete = async (id) => {
    const data = await deleteTodo(id);
    setTodoItems(data);
  };

  const handleUpdateTodo = async () => {
    const index = todoItems.findIndex((item) => item.id === updateTask.id);
    //backend
    const data = await updateTodo(updateTask, updateTask.id);

    const oldTodo = todoItems;
    oldTodo.splice(index, 1, data);

    setTodoItems(oldTodo);
    setUpdateTask(null);
  };

  const handleAddTodo = async () => {
    if (todo) {
      const item = {
        id: v4(),
        todo,
      };

      // push to db
      const data = await postTodo(item);

      // push to todoItems array

      setTodoItems((prev) => [...prev, data]);

      /// clear the input
      setTodo("");
    }
  };

  useEffect(() => {
    console.log(todoItems);
  }, [todoItems]);

  useEffect(() => {
    (async () => {
      const data = await fetchAllTodo();
      setTodoItems(data);
    })();
  }, []);
  return (
    <div className='todo'>
      <div className='container'>
        {updateTask ? (
          <div className='todo-input-container'>
            <input
              type='text'
              value={updateTask.todo}
              onChange={(e) =>
                setUpdateTask((prev) => ({ ...prev, todo: e.target.value }))
              }
              className='todo-input'
            />
            <button className='todo-btn' onClick={handleUpdateTodo}>
              Update Todo
            </button>
          </div>
        ) : (
          <div className='todo-input-container'>
            <input
              type='text'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className='todo-input'
              placeholder='enter task....'
            />
            <button className='todo-btn' onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>
        )}

        <div className='todo-wrapper'>
          {todoItems.length ? (
            todoItems.map((_todo) => (
              <Todoitem
                key={_todo.id}
                text={_todo.todo}
                handleDelete={() => handleDelete(_todo.id)}
                handleEdit={() => handleEdit(_todo.id)}
              />
            ))
          ) : (
            <p className='err'>No Todo yet...</p>
          )}
        </div>
      </div>
    </div>
  );
};
//yarn add react-router-dom

export default Todo;
