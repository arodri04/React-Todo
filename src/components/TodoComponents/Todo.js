import React from "react";

function Todo(props) {
  console.log({ props });
  return (
    <div>
      <div className="list" onClick={() => props.complete(props.todo.task)}>
        <h3>TASK:{props.todo.task}</h3>
      </div>
    </div>
  );
}

export default Todo;
