import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../../services/api'

const Login = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
const handleSubmit = (e)=>{
    e.preventDefault()
    api.post('/users/login',{
        email: form.email,
        password: form.password
    })
    .then((res)=>{
        navigate('/main/home')
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('resfreshToken', res.data.data.refreshTokem)
    })
    .catch((err)=>{
        alert('gagal')
    })
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <ul>
            <li>
                email: <input type="email" placeholder='email' name="email" value={form.email} onChange={handleChange} />
            </li>
            <li>
                password: <input type="password" placeholder='password' name="password" value={form.password} onChange={handleChange} />
            </li>
            <li>
                <button>Login</button>
            </li>
        </ul>
        </form>
    </div>
  )
}

export default Login