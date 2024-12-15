import React from "react";

const Task = (props) => {
  if (props.task.complete) {
    return (
      <div className="todo-complete">
        {props.task.title}
        <div>
          {props.task.complete == false ? (
            <button
              onClick={() => props.statusHandler(props.task)}
              className="tick"
            >
              ✔️
            </button>
          ) : (
            <button
              onClick={() => props.statusHandler(props.task)}
              className="cross"
            >
              ❌
            </button>
          )}
          <button
            onClick={() => props.deleteHandler(props.task)}
            className="delete"
          >
            🗑️
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="todo-incomplete">
      {props.task.title}
      <div>
        {props.task.complete == false ? (
          <button
            onClick={() => props.statusHandler(props.task)}
            className="tick"
          >
            ✔️
          </button>
        ) : (
          <button
            onClick={() => props.statusHandler(props.task)}
            className="cross"
          >
            ❌
          </button>
        )}
        <button
          onClick={() => props.deleteHandler(props.task)}
          className="delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Task;
