import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => { 
    const navigate = useNavigate()
    const todo = () => {
        navigate('/todolist')
    }
    return(
        <div className='home-main'>
            <fieldset>
            <h1> Welcome To Home Page</h1>
            <legend><button onClick={todo}>Start Now!</button></legend>
            </fieldset>
        </div>
    )
}

export default Home 