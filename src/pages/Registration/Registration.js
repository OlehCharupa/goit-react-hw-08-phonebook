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
            <h1>Registration</h1>
            <form onSubmit={submit}>
                <input onChange={inputHeanler} value={form.name} type='text' name='name' placeholder="username" />
                <input onChange={inputHeanler} value={form.email} type='email' name='email' placeholder="email" />
                <input onChange={inputHeanler} value={form.password} type='password' name='password' placeholder="password" />
                <button type='submit'>Sing UP</button>
            </form>
            <p>If You already have an accout please <NavLink to={navigation.login}>Login</NavLink></p>
        </div>
    );
};

export default Registration;