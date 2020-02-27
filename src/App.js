import React, {useState} from 'react';
import './App.css';
import Cards from "./js/components/Cards/cards"

function App() {

    const [todo,
        setTodo] = useState([]);
    const [input,
        setInput] = useState('')
    console.log(input)
    console.log(todo)

    const handleClick = (event) => {
        return setInput(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setTodo([
                ...todo,
                input
            ]);
            setInput("")
        }
    }

    const list = todo.map((item, index) => <Cards key={index} nameL={item}/>)

    return (
      <div className="container1">

        <div className="heading">
          <h1>To-Do List!!!</h1>
          <h2> Get These Done!!!!</h2>
        </div>

            <div className='input'>
                <input
                    value={input}
                    type="text"
                    id="input"
                    onChange={(event) => handleClick(event)}
                    placeholder= "Add a Task :)"
                    onKeyDown={(event) => handleKeyDown(event)}/>
            </div>
            <div className="cardTable">
                {list}
            </div>
        </div>
    );
}

export default App;
