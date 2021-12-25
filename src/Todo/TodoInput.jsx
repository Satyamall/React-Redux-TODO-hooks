import { useState } from "react";

function TodoInput({ onAdd }) {
  const [state, setState] = useState("");

  return (
    <div>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Add something"
      />
      <button
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default TodoInput;
