import { Task } from "./Task"

type Props = {
    tasksList: string[];
    deleteTask: (index:number) => void;
}

export const TasksList = ({tasksList, deleteTask}: Props) => {
  return (
    <div className="taskList">
        {tasksList.map((task, index) => (
            <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
        ))}
    </div>
  )
}