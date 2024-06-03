import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
let nextId = 0;

const CreateUjTodo = () => {
  const [listName, setListName] = useState("");
  const [toDo, setToDo] = useState("");
  const [inputList, setInputList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputList.length >= 10) {
      console.log("elég");
    } else {
      setInputList([...inputList, { id: nextId++, toDo: toDo }]);
    }

    setToDo("");
    console.log(inputList);
  };

  const handleSubmit = (e) => {
    // ; //wont fresh the website
  };

  /*Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists whose IDs are different from artist.id”.*/

  const Delete = (index) => {
    setInputList((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="title"
          placeholder={"Name of the List"}
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        ></input>

        <div>
          <input
            type="text"
            placeholder={"ToDo"}
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          ></input>
          <button onClick={addTodo} disabled={!toDo || inputList.length >= 10}>
            add
          </button>
          <div>
            {inputList.length >= 10 ? (
              <p>A lista hossza elérte a maximális 10 elemet. </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </form>
      <div>
        <ul>
          {inputList.map((x, index) => (
            <li key={x.id}>
              {x.toDo}{" "}
              <div>
                <TiDeleteOutline
                  onClick={() => {
                    Delete(index);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit">create post</button>
    </div>
  );
};

export default CreateUjTodo;
