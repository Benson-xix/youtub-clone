import  "../css/Todoitem.css"

const Todoitem = ({handleEdit, handleDelete, text}) => {
    return (
        <div className="todo-item">
           
                <p className="todo-text">
                    {text}

                </p>
                <div className="todo-actions">
                    <button onClick={handleEdit}className="todo-btn-edit">Edit</button>
                    <button onClick={handleDelete} className="todo-btn-Delete">Delete</button>
                </div>
           
        </div>
    )
}

export default Todoitem