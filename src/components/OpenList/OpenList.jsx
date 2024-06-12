import React from 'react';
import TaskList from '../Modal/TaskList';

const OpenTasks = ({ tasks, handleEdit, handleDelete, openModal }) => {
    return (
        <TaskList
            title="Open"
            tasks={tasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            openModal={openModal}
        />
    );
};

export default OpenTasks;
