import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, completeTask }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;