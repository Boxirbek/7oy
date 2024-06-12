import React, { useState } from 'react';
import Modal from 'react-modal';
import OpenTasks from './components/OpenList/OpenList';
import PendingTasks from './components/Pending/Pending';
import InProgressTasks from './components/InProgress/InProgress';
import './App.css';

Modal.setAppElement('#root');

const App = () => {
  const [tasks, setTasks] = useState({
    open: [],
    pending: [],
    inproge: [],
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newTask, setNewTask] = useState({ category: 'open', description: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editCategory, setEditCategory] = useState('open');

  const openModal = () => {
    setNewTask({ category: 'open', description: '' });
    setIsEdit(false);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    const updatedTasks = { ...tasks };
    updatedTasks[newTask.category].push(newTask.description);
    setTasks(updatedTasks);
    closeModal();
  };

  const editTask = () => {
    const updatedTasks = { ...tasks };
    updatedTasks[editCategory][editIndex] = newTask.description;
    setTasks(updatedTasks);
    closeModal();
  };

  const deleteTask = (category, index) => {
    const updatedTasks = { ...tasks };
    updatedTasks[category].splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (category, index) => {
    setNewTask({ category: category, description: tasks[category][index] });
    setIsEdit(true);
    setEditCategory(category);
    setEditIndex(index);
    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <div className="task-container">
        <OpenTasks
          tasks={tasks.open}
          handleEdit={handleEdit}
          handleDelete={deleteTask}
          openModal={openModal}
        />
        <PendingTasks
          tasks={tasks.pending}
          handleEdit={handleEdit}
          handleDelete={deleteTask}
          openModal={openModal}
        />
        <InProgressTasks
          tasks={tasks.inproge}
          handleEdit={handleEdit}
          handleDelete={deleteTask}
          openModal={openModal}
        />
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{isEdit ? 'Edit Task' : 'Add Task'}</h2>
        <form>
          <label className='category'>
            Category:
            <select name="category" value={newTask.category} onChange={handleInputChange}>
              <option value="open">open</option>
              <option value="pending">pending</option>
              <option value="inproge">inproge</option>
            </select>
          </label>
    
          <label className="description">
            Description:
            <input
              type="text"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={isEdit ? editTask : addTask}>
            {isEdit ? 'Edit Task' : 'Add Task'}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
