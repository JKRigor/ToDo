import React, {useState} from 'react'
import TodoItems from './Todoitems'

const Todolist = () => {

    const [state, setState] = useState({
        todo: '',
        todolist: []
    })

    const [edit, setEdit] = useState({
        editTodo: '',
        editIndex: ''
    })

    const [isUpdate, setIsUpdate]= useState(false)

    const {todo, todolist} = state
    const { editTodo, editIndex} = edit
    
    const inputTodo = (el) => {
        const {name, value} = el.target

        setState({...state, [name]: value})
    }


   /* Create*/

   const createTodo = () => {
    const list = todolist
    list.push(todo)

    setState({todo: '', todolist: list})
   }

   /* Delete */
   const deleteTodo = (index) => {
    const list = todolist
    list.splice(index, 1)

    setState({todo: '', todolist: list})
   }

    /* Update */
    const editTodoList = (el) => {
        const {name, value} = el.target

        setEdit({...edit, [name]: value})
    }

    const clickEdit = (index) => {
        setIsUpdate(true)
        setEdit({...edit, editIndex: index})
    }

    const cancelEdit = () => {
        setIsUpdate(false)
    }
    const updateTodo = (index) => {
        const list = todolist
        list[index] = editTodo

        setState({...state, todolist: list})
    }
    return(
        <>
        <div className="todolist-main">
           <div className="form-wrapper">
            <input type="text" name="todo" placeholder="Create Todolist" value={todo} 
            onChange={inputTodo}/>
            <button onClick={createTodo}>ADD</button>
           </div>
     

           <div className="table-main">
            <div className='header-wrapper'>
                        <span>To Do</span>
                        <span>Action</span>
            </div>
                     {
                            todolist.length ?

                            todolist.map((value, index) =>(
                            <div className='table'>
                                <TodoItems
                                key={index}
                                index={index}
                                value={value}
                                deleteTodo={deleteTodo}
                                clickEdit={clickEdit}
                                />
                            </div>    
                            )) : <span>No Record Found</span>
                        }   
               
                {
                    isUpdate ? 
                    <div className="form-wrapper">
                    <input type="text" 
                    name="editTodo" 
                    placeholder="Update todolist" 
                    value={editTodo} 
                    onChange={editTodoList}/>
                    <button onClick={() => updateTodo(edit.editIndex)}>Update</button>
                    <button onClick={cancelEdit}>Cancel</button>
                    </div> : ""
                }
          
           </div>

        </div>
        </>
    )
}

export default Todolist 