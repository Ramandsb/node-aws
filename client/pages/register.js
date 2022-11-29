import { useState } from 'react'
import Layout from '../components/Layout'
import axios, { Axios } from 'axios'
const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: '',
        buttonText: 'Register'
    })
    const {
        name,
        email,
        password,
        error,
        success,
        buttonText
    } = state

    const handleChange = name => e => {
        setState({
            ...state,
            [name]: e.target.value,
            error: '',
            success: '',
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name,
            email,
            password
        }
        axios.post('http://localhost:8080/api/register', data)
        .then(res => console.log('response', res))
        .catch(error => console.log('error', error))
    }

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder='Type your name' />
            </div>
            <div className='form-group'>
                <input value={email} onChange={handleChange('email')}  type="email" className="form-control" placeholder='Type your email' />
            </div>
            <div className='form-group'>
                <input value={password} onChange={handleChange('password')}  type="password" className="form-control" placeholder='Type your password' />
            </div>
            <div className='form-group'>
                <button className='btn btn-outline-warning'>
                    {buttonText}
                </button>
            </div>
        </form>
    )
    return <Layout>
        <div className='col-md-6 offset-md-3'>
            {registerForm()}
        </div>
    </Layout>
}

export default Register