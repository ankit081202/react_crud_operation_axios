import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Read.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://625852a3e4e0b731428af5e8.mockapi.io/crud')
            .then((getData) => {
                setApiData(getData.data);
            })
    });
    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id);
    }

    const getData = () => {
        axios.get('https://625852a3e4e0b731428af5e8.mockapi.io/crud')
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://625852a3e4e0b731428af5e8.mockapi.io/crud/${id}`)
        .then(()=> {
            getData();
        })
    }
    return (
        <div className='data_main'>
            {apiData.map((data) => {
                return (
                    <div className='data'>
                        <div>id: {data.id}</div>
                        <div>title: {data.title}</div>
                        <div className='btn'>
                            <Link to='/update'>
                                <button className='upd' onClick={() => setID(data.id)} type='submit'>update</button>
                            </Link>
                            <Link to='/delete'>
                                <button className='del' onClick={() => onDelete(data.id)} type='submit'>Delete</button>
                            </Link>
                            
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Read