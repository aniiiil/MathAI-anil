import React from "react"

const Login = () => {
  return (
    <div className="login-form tab-pane fade show ">
      <form>
        <div className="mb-3">
          <label for="loginEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label for="loginPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" for="rememberMe">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>Don't have an account? Signup</p>
    </div>
  )
}

export default Login
