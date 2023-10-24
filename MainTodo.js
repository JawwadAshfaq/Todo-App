import React, {useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function MainTodo() {
    const[listTodo, setListTodo] = useState ([]);

    let addList = (inputText)=>{
        setListTodo([...listTodo, inputText]);
    }
    const deleteItemList = (key)=>{
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }
  return (
    <>
    <div className="container">
    <TodoInput addList={addList} />
    {listTodo.map((listItem, i)=>{
       return(
        <TodoList item={listItem} index={i} deleteItem={deleteItemList}/>
       )
    })}
    </div>
    </>
  )
}

export default MainTodo;