import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants"
import { registerOperation } from "../../redux/operations/authOperation";

const initialState = { name: "", email: "", password: "" }


const Registration = () => {
    const [form, setForm] = useState(initialState)
    const dispatch = useDispatch()
    const inputHeanler = ({ target }) => {
        const { name, value } = target
        setForm(state => ({ ...state, [name]: value }))
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(registerOperation(form))
        console.log(form);
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={submit}>
                <input onChange={inputHeanler} value={form.name} type='text' name='name' placeholder="username" />
                <input onChange={inputHeanler} value={form.email} type='email' name='email' placeholder="email" />
                <input onChange={inputHeanler} value={form.password} type='password' name='password' placeholder="password" />
                <button type='submit'>Регистрация</button>
            </form>
            <p>Если у Вас есть аккаунт, пройдите по ссылке для <NavLink to={navigation.login}>Авторизации</NavLink>.</p>
        </div>
    );
};

export default Registration;