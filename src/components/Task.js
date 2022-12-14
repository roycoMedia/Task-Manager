// import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'
import React from 'react';

const Task = ({task, deleteTask, onToggle}) => {
    // const click = () => {
    //     console.log('click')
    // }
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}  onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{color: 'red', fontSize: '1.4em'}} onClick={() => deleteTask(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  );
}

// Task.propTypes = {
//     task: PropTypes.string,
//     deleteTask: PropTypes.func
// }

export default Task;
