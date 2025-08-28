import React from "react"

const Signup = () => {
  return (
    <div className="signup-form tab-pane fade show overflow-hidden">
      <form>
        <div className="mb-3">
          <label for="signupName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="signupName"
            required
          />
        </div>
        <div className="mb-3">
          <label for="signupEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="signupEmail"
            required
          />
        </div>
        <div className="mb-3">
          <label for="signupPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
