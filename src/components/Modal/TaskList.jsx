import React from 'react';

const TaskList = ({ title, tasks, handleEdit, handleDelete, openModal }) => {
    return (
        <div className="task-category">
            <h2>{title}</h2>
            {tasks.map((task, index) => (
                <div key={index} className="task-item">
                    {task}
                    <button onClick={() => handleEdit(title.toLowerCase(), index)}>edit</button>
                    <button onClick={() => handleDelete(title.toLowerCase(), index)}>delete</button>
                </div>
            ))}
            <button onClick={openModal}>add task</button>
        </div>
    );
};

export default TaskList;

