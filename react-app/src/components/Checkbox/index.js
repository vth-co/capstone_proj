import { useState } from "react";
import { useDispatch } from "react-redux";

function Checkbox({ task }) {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(task.finished);


  return (
      <input
        type="checkbox"
        value={finished}
        checked={task?.finished === true}
      />
  );
}

export default Checkbox;
