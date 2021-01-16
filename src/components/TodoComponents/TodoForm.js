import React from "react";

const TodoForm = props => {
  console.log(props);
  return (
    <form>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.Change}
      />
      <button onClick={props.update}>Add task</button>
    </form>
  );
};

export default TodoForm;
