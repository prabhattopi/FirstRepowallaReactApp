import "./App.css";
import Header from "./Compnents/Header";
import { Todos } from "./Compnents/Todos";
import { Footer } from "./Compnents/Footer";
import { AddTodo } from "./Compnents/AddTodo";
import { About } from "./Compnents/About";

import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //jsx ka jalwa
  let initTodo = JSON.parse(localStorage.getItem("todo")) || [];
  const onDelete = (todo) => {
    console.log("I am on Delete", todo);
    // Deleting this way in react does not Worker
    // let inedx=todos.indexOf(todo);
    // todos.splice(index,1)

    setTodos(
      todos.filter((el) => {
        return el !== todo;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am addding to", title, desc);
    let sno;
     if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]); //
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    //Everyone should be in block
    <>
      <Router>
        <Header title="My TodosList" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                  </>
              
          }
          />

          <Route exact path="/about" element={  <About />}/>
          
         
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
