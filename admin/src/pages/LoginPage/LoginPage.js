import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css'

function LoginPage() {
    const navigate = useNavigate();
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {

                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed.');
                }
            })
            .then((data) => {
                setTimeout(() => {
                    navigate('/app/home')

                })
            })
            .catch((error) => {
                console.error("helo");
                toast.warn('Email or Password is invalid', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setUsername('');
                setPassword('');
                document.getElementById('email').classList.add('is-invalid');
                document.getElementById('password').classList.add('is-invalid');
            });
    };

    return (
        <div className="main">
            <div className="card" id="login-card">
                <div className="c-header">
                    Log in
                </div>
                <form onSubmit={handleLogin}>
                    <div className="card-form-group">
                        <label>Email</label>
                        <input type="email"
                            className="form-control"
                            placeholder="Logan@mail.com"
                            id="email"
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                        <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                    </div>
                    <div class="card-form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <div className="invalid-feedback">
                            Please provide a valid password.
                        </div>
                    </div>
                    <div className="checkbox-wrapper">
                        <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                        <label for="example-1">Remember Me</label>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn-primary">Log in</button>
                    </div>
                    <div className="card-footer">
                        <div className="btn-text pointer">Forgot Password?</div>
                    </div>
                    <div className="divider"></div>
                    <div className="card-footer">
                        <div className="btn-text-dark">Don’t have an account?</div>
                    </div>
                    <div className="card-footer">
                        <div className="btn-text pointer" onClick={() => navigate('/signup')}>Sign up</div>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
}

export default LoginPage;
