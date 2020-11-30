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
            <h1>Авторизация</h1>
            <form onSubmit={submit}>
                <input onChange={inputHeanler} value={form.email} type='email' name='email' placeholder="email" />
                <input onChange={inputHeanler} value={form.password} type='password' name='password' placeholder="password" />
                <button type='submit'>Авторизация</button>
            </form>
            <p>Если у Вас нету аккаунта, пройдите по ссылке для <NavLink to={navigation.registration}>регистрации</NavLink>.</p>
        </div>
    );
};

export default Login;