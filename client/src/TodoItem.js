import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li
        className='task'
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={onToggle}
    >
        {name}
        <span
            className='delete'
            onClick={(e) => {
                e.stopPropagation();
                onDelete()
            }}
        > X </span>
    </li>
);

export default TodoItem;