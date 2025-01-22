import { useState } from 'react'
import { TasksList } from './TasksList';


export const ToDoApp = () => {
const [newTask, setNewTask] = useState<string>("");
const [tasksList, setTasksList] = useState<string[]>([]);

const handleAddTask = () => {
    if(newTask.trim() === '') {return}
    setTasksList([...tasksList, newTask]);
    setNewTask("");
};

const handleDeleteTask = (index: number) => {
    setTasksList(tasks => tasks.filter((_, task) => task !== index));
};

  return (
    <div>
        <h1>TODO List</h1>
        <div className='flex'>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='New Task' 
            />
            <button onClick={handleAddTask}>Add Task</button>
            <TasksList tasksList={tasksList} deleteTask={handleDeleteTask} />
        </div>
    </div>
  )
}