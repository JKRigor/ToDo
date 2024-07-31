import Ract from 'react'

const TodoItems = props => {
    const {index, value, deleteTodo, clickEdit} = props
    return(
    <div className="row-wrapper">
        <span>{value}</span>
        <button onClick={() => clickEdit(index)}>Edit</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
    )
}

export default TodoItems