import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [response, setResponse] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("formData", formData);
    if (formData.get('password') !== formData.get('confirmPassword')) {
      toast.error('Passwords do not match');
      return;
    }
    console.log("formData", formData.password);
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: formData.get('name'), email: formData.get('email'), password: formData.get('password') })
    })
    .then(response => response.json())
      .then(data => { 
        console.log("signup successful", data);
        if (data.error) {
          console.log(data.error);
          alert(data.error)
          setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          })
        } else if (data.token) {
          toast.success('Account created successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          setTimeout(() => { 
            navigate('/login');
          }, 3000)

        }
       })
      .catch(error => {
        console.log("error", error);
    });
  };
  

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
          <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h2 className="card-title text-center mb-4">Sign Up</h2>
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body m-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label className="mb-1">Username</label>
              <input
                type="name"
                name="name"
                className="form-control"
                placeholder="Enter username"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label className="mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label className="mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label className="mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-center mt-3">
                    <span>Have an account?</span>
                    <button className="btn btn-link text-blue text-decoration-underline" onClick={() => navigate('/login')}>Login</button>
                </div>
    </div>       
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default SignupPage;
