import React, { useState } from 'react';
import StyledDiv from './StyledBox';

const TaskItem = ({task, items, setItems}) => {

    const fake = useState(false);

    const handleDone = (e) => {
        task.completed = !task.completed;
        fake[1](task.completed);
    };

    const handleSubmit = (e, key) => {
        e.preventDefault();
        setItems(items.filter((elmt) => elmt.key !== key));
    };

    return (
<form className="line">
  <div className="form-row">
    <StyledDiv className="col-3" decoration={ task.completed ? 'line-through' : 'none' }>
        { task.name }
    </StyledDiv>
    <div className="col-3">
      <div className="form-check mb-2 mr-sm-2">
        <input className="form-check-input" type="checkbox" name="done" id="done" defaultChecked={ task.completed ? 'checked' : ''} onChange={handleDone} />
        <label className="form-check-label" htmlFor="done">Done</label>
      </div>
    </div>
    <div className="col-2">
      <button type="submit" className="btn btn-danger" onClick={ (e) => handleSubmit(e, task.key )}>Delete</button>
    </div>
  </div>
</form>

    );
};

export default TaskItem;