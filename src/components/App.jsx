import React from "react";

function App() {
  var items = []
  const [item, setItem] = React.useState("")
  const [itemsList, displayItemes] = React.useState([])

  function handleInput(event) {
  const newItem = event.target.value
  setItem(newItem)
  }

  function updateToDoList() {
    displayItemes( prevArray => {
       return [...prevArray, item];
    });

  }

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="itemInput" onChange={handleInput} type="text" placeholder="Write down new item" value={item} />
        <button type="submit" onClick={updateToDoList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.map(element => <li>{element}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
