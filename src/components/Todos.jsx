import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import MainDivCss from "../components/Todo.module.css"


const Todos = () => {
  const [todo,setTodo] = useState([]);
  const [newTodo,setNewTodo] = useState("");

  const saveInfo = () => {

    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        text: newTodo,
        isCompleted: false,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      setTodo([...todo,data]);
      setNewTodo("");
    });

};
  
  useEffect(() => {

    fetch("http://localhost:8080/todos?_page=1&_limit=10")
    .then((res) => res.json())
    .then((data) => {

      setTodo(data);
    });

  }, [])
  
  return (
    <div>
      <div className={MainDivCss.Main_div}>
          <h1>My Todo List</h1>
          <div>
            <input
              value={newTodo}
              onChange={({ target }) => setNewTodo(target.value)}
              placeholder="Add Your Task"
            />
            <button className={MainDivCss.btn} onClick={saveInfo}>+</button>
            {todo.map((todu) => (
              <div key={todu.id}>{todu.text}</div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Todos