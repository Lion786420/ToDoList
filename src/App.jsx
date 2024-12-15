import { useEffect, useState } from "react";
import Task from "./Components/Task";

const App = () => {
  const [allTasks, allTasksUpdate] = useState([]);
  const [addTask, addTaskHandler] = useState("");

  useEffect(() => {
    const getItems = localStorage.getItem("task");
    if (getItems) {
      allTasksUpdate(JSON.parse(getItems));
    }
  }, []);

  const addHandler = () => {
    const newTask = { title: addTask, complete: false };
    allTasksUpdate(allTasks.concat(newTask));
    localStorage.setItem("task", JSON.stringify(allTasks.concat(newTask)));
    addTaskHandler("");
  };

  const deleteHandler = (task) => {
    const newList = allTasks.filter((each) => each !== task);
    allTasksUpdate(newList);
    localStorage.setItem("task", JSON.stringify(newList));
  };

  const statusHandler = (task) => {
    const updated = task;
    updated.complete = !updated.complete;
    const newList = allTasks.map((each) => (each === task ? updated : each));
    allTasksUpdate(newList);
    localStorage.setItem("task", JSON.stringify(newList));
  };

  return (
    <div className="wrapper">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={addTask}
        placeholder="Add new task"
        onChange={(e) => addTaskHandler(e.target.value)}
      />
      <button onClick={addHandler} className="add">
        Add
      </button>
      <div>
        {allTasks == []
          ? ""
          : allTasks.map((each, key) => (
              <Task
                task={each}
                deleteHandler={deleteHandler}
                statusHandler={statusHandler}
                key={key}
              />
            ))}
      </div>
    </div>
  );
};

export default App;
