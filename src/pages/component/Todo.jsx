import React, { useState } from 'react';
import './Todo.css'

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]) //input array
  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const addHandler = (e) => {
    console.log("Add value:" + inputText)
    if (inputText !== "") {
      setTodoList([...todoList, inputText]);
      setInputText("")
    }
    e.preventDefault();

  }
  const editHandler = (id) => {
    console.log("Edit id:" + id)
    const oldItem = todoList.filter((item, index) => index === id)
    const newItem = window.prompt("Edit item:", oldItem) //submit OK condition
    if (newItem) {
      console.log("New item:" + newItem)
      const updatedTodoItems = todoList.map((item, index) =>
        index === id ? newItem : item
      )
      console.log("New Item:" + updatedTodoItems)
      setTodoList(updatedTodoItems)
    }

  }
  const deleteHandler = (deleteId) =>{
    const updateTodoList = todoList.filter((item,index) => index != deleteId
    )
    setTodoList(updateTodoList)
  }

  return (
    <>

      <h1>TODO LIST</h1>
      <hr></hr>

      {/* <input type="text" value={} onChange={} />
      <button type='button' onClick={}>Add</button> */}


      <form onSubmit={addHandler}>
        <input type="text" className='input' placeholder='add item...' value={inputText} onChange={inputHandler} />

        <button type='submit' className='btn'>ADD</button>
      </form>
      <div className='todo'>
        {
          todoList.map((item, index) =>
            <div className='task' key={index}>
              <div className='para'>
              <p >{item}</p>
              </div>
              <div className='button'>
                <button type='submit' onClick={() =>deleteHandler(index)} >Delete</button>
                <button type='submit' onClick={() => editHandler(index)}>Edit</button>
              </div>
            </div>
          )
        }

      </div>



    </>
  );

}
export default Todo;
