import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hooks";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    // data from Provider -> auth.hook.js
    const auth = useContext(AuthContext)
    // handmade hooks
    const message = useMessage() // alert from library materialize for errors
    const {loadind, request, error, clearError} = useHttp()
    // hook useState for get data from form
    const [form, setForm] = useState( {
        email: '', password: ''
    })
    // hook for tracking errors
    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])
    // hook for update field of form authorization -> materialize
    useEffect( () => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value }) // Spread syntax
    }

    // server request
    // registration
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
            console.log("Data", data)
        } catch (e) {}
    }
    // login
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="row_auth">
            <div className="col s6 offset-s3">
                <h3>Welcome to the resume site</h3>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>

                            <div className="input-field">
                                <input placeholder="Enter email"
                                       id="email"
                                       type="text"
                                       name="email"
                                       className="grey-input"
                                       value={form.email}
                                       onChange={changeHandler}
                                       />
                                    <label htmlFor="first_name">Email</label>
                            </div>

                            <div className="input-field">
                                <input placeholder="Enter password"
                                       id="password"
                                       type="password"
                                       name="password"
                                       className="grey-input"
                                       value={form.password}
                                       onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn green darken-3"
                            style={{marginRight:10}}
                            disabled={loadind}
                            onClick={loginHandler}
                        >
                            Enter
                        </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loadind}
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}