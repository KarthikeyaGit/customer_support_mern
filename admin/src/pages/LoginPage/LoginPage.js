import React from 'react';
// import './LoginPage.css';

function LoginPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h2 className="card-title text-center mb-4">Login</h2>
            <div className="card"  style={{'width': '100%', 'max-width': '500px'}}>
                <div className="card-body m-4">
                    <form>
                        <div className="form-group mb-4">
                            <label className='mb-1'>Email or Username</label>
                            <input type="text" className="form-control" placeholder="Enter email or username" />
                        </div>

                        <div className="form-group mb-4">
                            <label className='mb-1'>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
            {/* <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="text-primary">Forgot Password?</a>
            <a href="#" className="text-primary">Sign Up</a>
          </div> */}
        </div>
    );
}

export default LoginPage;
