import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Create.css'
function Update() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [ID,setID] = useState(null);
    const sendData = () => {
        axios.put(`https://625852a3e4e0b731428af5e8.mockapi.io/crud/${ID}`, {
            id,
            title
        })
    }

    useEffect (() => {
        setId(localStorage.getItem('id'));
        setTitle(localStorage.getItem('title'));
        setID(localStorage.getItem('ID'));
    },[])
    return (
        <div className='create'>
                <label >Id</label>
                <input value={id} onChange={(e) => setId(e.target.value)} />
                <label>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={sendData} type='submit'>Update</button>
        </div>
    )
}

export default Update