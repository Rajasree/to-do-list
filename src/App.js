import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import KeyBoard from './KeyBoard'

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  return (
    <div className="App">
      <div>
        <h1>ToDo List</h1>
      </div>
      <div>
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type='text' placeholder='Add item...'></input>
        <i onClick={()=>setToDos([...toDos,{id: Date.now(),text: toDo, status: false}])} className='fas fa-plus'></i>
      </div>
      <h2>Created List</h2>
      { toDos.map((objct) => {
        return(
      <div id={objct.id}>
        <div>
          <input onChange={(e)=>setToDos(toDos.filter(obj2=>{
            if(obj2.id===objct.id){
              obj2.status = e.target.checked
            }
            return obj2
          }))} value={objct.status} type='checkbox' name='' id=''></input>
          <p>{objct.text}</p>
        </div>
        <div>
        <i onClick={()=>setToDos(toDos.filter(obj2=>{
          if(obj2.id===objct.id){
            obj2.status = false
            document.getElementById(obj2.id).remove()
          }
          return obj2
        }))} className="fas fa-times"></i>
        </div>
      </div>)})
      }
      <h3>Selected Items</h3>
      <div>
        {toDos.map((ob)=>{
          if(ob.status){
            return(<p>{ob.text}</p>)
          }
          return null
        })}
      </div>
    </div>
    

  );
}

export default App;