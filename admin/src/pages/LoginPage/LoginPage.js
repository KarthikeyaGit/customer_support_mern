import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
                <h2 className="card-title text-center mb-4">Login</h2>
                <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
                    <div className="card-body m-4">
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-4">
                                <label className="mb-1">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid email.
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label className="mb-1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid password.
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center mt-3">
                    <span>Do you have an account?</span>
                    <button className="btn btn-link text-blue text-decoration-underline" onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
}

export default LoginPage;
