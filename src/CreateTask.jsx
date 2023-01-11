import React, { useState } from 'react'

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title: '',
        content: '',
    });
    function detectChange(event) {
        const { name, value } = event.target;

        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,
            };
        });
    }

    function submitTask(event){
        props.onAdd(task);
        setTask({
            title:'',
            content:''
        })
        event.preventDefault();
    }

    return (
        <div className='todoDivArea'>
            <form className='todoDiv'>
                <input type="text"
                    className='form-control todoText mb-3'
                    name='title'
                    onChange={detectChange}
                    value={task.title}
                    placeholder='Title' />

                <textarea name="content"
                    value={task.content}
                    className='form-control todoText mb-3'
                    rows="3"
                    onChange={detectChange}
                    placeholder='Ihre Beschäftigung'
                ></textarea>

                <button className='btn btn-primary todoButton' onClick={submitTask}>
                    Hinzufugen
                </button>

            </form>
        </div>
    )
}
