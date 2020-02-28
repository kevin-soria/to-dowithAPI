import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from "./js/components/Cards/cards"

function App() {

    const [todo,
        setTodo] = useState([]);

    const [input,
        setInput] = useState('')

    useEffect(() => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/kevinsoria')
            .then(res => res.json())
            .then(res => setTodo(res))
    },[]);

    const addTask = (val) => {
      console.log("htis is the val---->", val)
        const data = [
            ...todo, {
                label: (val),
                done: false
            }
        ]

        fetch('https://assets.breatheco.de/apis/fake/todos/user/kevinsoria', {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        // <--------------------Dont forget for fetchs!!!------------------>
          }).then(res => {
            if (res.status == 200) {
                return res.json();
            }
            else{
              throw new Error("There is a problem");
            }
        }).then(dataBack => setTodo(data))
        .catch(err => {
          alert('Check the console log')
          console.error(err);
        });
    }

// <---------------------------------------------------------------------------------------->

const removeTask = (bubu) => {
    
    let itemToUpdate = todo.filter((item,index)=> index != bubu)
    console.log("item", itemToUpdate)
    fetch('https://assets.breatheco.de/apis/fake/todos/user/kevinsoria', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify()
    }).then(res => {
        if (res.status == 200) {
            return res.json();
            }
        })
        .then(dataBack => setTodo(itemToUpdate))
        .catch(err => {
            alert('Check the delete console log ')        
             console.error(err);       });   }

// <----------------------------------------------------------------------------------------------->
    const handleChange = (event) => {
        return setInput(event.target.value)
    }
    //   const handleClick2 = (event) => {     // getfrom API     return
    // setInput(event.target.value) }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setTodo([
                ...todo,
                input
            ]);
            setInput("")
        }
    }
    // console.log("todos->", todo);
    const list = todo.map((item, index) => <Cards onDelete={()=> removeTask(index)} key={index} name={item.label} />)

    return (
        <div className="container1">

            <div className="heading">
                <h1>To-Do List!!!</h1>
                <h2>
                    Get These Done!!!!</h2>
            </div>

            <div className='input'>
                <input
                    value={input}
                    type="text"
                    id="input"
                    onChange={(event) => handleChange(event)}
                    placeholder="Add a Task :)"
                    onKeyDown={(event) => handleKeyDown(event)}/>

                <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => addTask(input)}>Add task</button>
            </div>
            <div className="cardTable">
                {list}
            </div>
        
            <div className="heading">
            
                <h2> Click them When You're Finish!!!!</h2>
            </div>

        
        </div>
    );
}

export default App;
