import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

const TodoList = () => {

    const [items, setItems] = useState([]);

    return (
        <div className="content">
            { items.map((elmt) => <TaskItem key={elmt.key} task={elmt} items={items} setItems={setItems} />) }
            <TaskInput items={items} setItems={setItems} />
        </div>
    );

};

export default TodoList;