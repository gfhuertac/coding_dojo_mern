import React, { useState } from 'react';

const TaskInput = ({ items, setItems }) => {

    const [ task, setTask ] = useState('');
    const [ counter, setCounter ] = useState(1);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter+1);
        setItems( [...items, { name: task, key: counter }] );
        setTask('');
    };

    return (
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="task" className="sr-only">New task</label>
                <input type="input" className="form-control" name="task" id="task" placeholder="Task"
                    value={task} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}>Add</button>
        </form>
    );
};

export default TaskInput;