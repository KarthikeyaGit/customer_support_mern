import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
            navigate('/');
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

    <div className="main">
      <div className="card" id="login-card">
        <div className="c-header">
          Sign Up
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-form-group">
            <label>Username</label>
            <input type="name"
              name="name"
              className="form-control"
              placeholder="Enter username"
              value={formData.name}
              onChange={handleInputChange}
              required />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
          <div class="card-form-group">
            <label>Email</label>
            <input type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

          <div class="card-form-group">
            <label>Password</label>
            <input type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
          <div class="card-form-group">
            <label>Confirm Password</label>
            <input type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
    
          <div className="card-footer">
            <button type="submit" className="btn-primary">Sign Up</button>
          </div>

          <div className="card-footer">
            <div className="btn-text-dark">Already have an account?
            </div>
          </div>
          <div className="card-footer">
            <div className="btn-text pointer" onClick={() => navigate('/')}>Log in</div>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default SignupPage;
