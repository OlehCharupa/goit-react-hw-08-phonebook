import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants"
import { loginOperation } from "../../redux/operations/authOperation"


const initialState = { email: "", password: "" }

const Login = () => {
    const [form, setForm] = useState(initialState)
    const dispatch = useDispatch()

    const inputHeanler = ({ target }) => {
        const { name, value } = target
        setForm(state => ({ ...state, [name]: value }))
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(loginOperation(form))
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input onChange={inputHeanler} value={form.email} type='email' name='email' placeholder="email" />
                <input onChange={inputHeanler} value={form.password} type='password' name='password' placeholder="password" />
                <button type='submit'>Login</button>
            </form>
            <p>If You already have an accout please <NavLink to={navigation.registration}>Sing UP</NavLink></p>

        </div>
    );
};

export default Login;