import React from 'react';
import TaskList from '../Modal/TaskList';


const PendingTasks = ({ tasks, handleEdit, handleDelete, openModal }) => {
    return (
        <TaskList
            title="Pending"
            tasks={tasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            openModal={openModal}
        />
    );
};

export default PendingTasks;
