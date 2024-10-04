const TaskItem = ({ task, editTask, deleteTask, completeTask }) => {
    return (
      <div className="flex justify-between items-center border p-4 rounded-lg">
        <div className={`${task.completed ? 'line-through' : ''}`}>
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div className="space-x-2">
          <button onClick={() => completeTask(task.id)} className="text-green-500">Complete</button>
          <button onClick={() => editTask(task.id)} className="text-blue-500">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
        </div>
      </div>
    );
  };
  
  export default TaskItem;