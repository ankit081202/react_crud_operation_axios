import React, { useState } from 'react'
import axios from 'axios';
import './Create.css'
function Create() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const sendData = () => {
        axios.post('https://625852a3e4e0b731428af5e8.mockapi.io/crud', {
            id,
            title
        })
    }
    return (
        <div className='create'>
                <label >Id</label>
                <input onChange={(e) => setId(e.target.value)} />
                <label>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} />
                <button onClick={sendData} type='submit'>Submit</button>
        </div>
    )
}

export default Create