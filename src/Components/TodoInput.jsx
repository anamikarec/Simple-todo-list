import {useState} from 'react';
import Button from './Button';

const TodoInput = ({onTaskCreate}) =>{

    const [text, setText] = useState("");

    const handleChange = (e) =>{
        setText(e.target.value);
    };

    const handleClick = () =>{ 
        onTaskCreate(text);
    };

    return (
    <div>
        <input type="text" placeholder="Create a new Todo.." value={text} onChange={handleChange} className="input-btn"/>
        <Button title="+" onClick={handleClick} />
    </div>
    );
};
export default TodoInput;