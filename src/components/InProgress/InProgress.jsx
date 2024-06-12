import React from 'react';
import TaskList from '../Modal/TaskList';


const InProgressTasks = ({ tasks, handleEdit, handleDelete, openModal }) => {
    return (
        <TaskList
            title="InProgress"
            tasks={tasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            openModal={openModal}
        />
    );
};

export default InProgressTasks;
