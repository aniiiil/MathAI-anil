import React from "react"
import { Link } from "react-router-dom"
import Login from "../auth/Login"

const TabCard = () => {
  return (
    <>
      <div className="side-img  mobile-logo overflow-x-hidden ">
        <img
          className="w-100 d-block d-lg-none"
          src="./logo.png"
          alt=""
          srcset=""
        />
      </div>
      <div className=" tab-cards px-5 px-sm-0 ">
        <ul className="nav nav-tabs mb-4 " id="authTabs" role="tablist">
          <li className="nav-item me-4" role="presentation">
            <button
              className="nav-link active nav-title"
              id="login-tab"
              data-bs-toggle="tab"
              data-bs-target="#login"
              type="button"
              role="tab"
              aria-controls="login"
              aria-selected="true"
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-title  "
              id="signup-tab"
              data-bs-toggle="tab"
              data-bs-target="#signup"
              type="button"
              role="tab"
              aria-controls="signup"
              aria-selected="false"
            >
              Signup
            </button>
          </li>
        </ul>

        {/* tab-content  */}
        <div className="tab-content" id="authTabsContent">
          {/* login  */}
          <div className="card-body">
            <div className="tab-content tab-container" id="authTabsContent">
              <div
                className="tab-pane fade show active"
                id="login"
                role="tabpanel"
              >
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control auth-inputs"
                      id="loginEmail"
                      placeholder="Please enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control auth-inputs"
                      id="loginPassword"
                      placeholder="Please enter your password"
                      required
                    />
                  </div>
                  <div className="d-flex  gap-3   ">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 register-btn  "
                    >
                      Login
                    </button>
                    <span className="align-self-center ">
                      <Link className="forget-text" to={"/"}>
                        Forget Password?{" "}
                      </Link>
                    </span>
                  </div>
                  <p className="register-info">
                    * Don't have any Account? Create an account
                  </p>
                </form>
              </div>

              {/* signup  */}
              <div className="tab-pane fade" id="signup" role="tabpanel">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control auth-inputs"
                      id="signupName"
                      placeholder="Please enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control auth-inputs"
                      id="signupEmail"
                      placeholder="Please enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control auth-inputs"
                      id="signupPassword"
                      placeholder="Please enter your password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary btn px-5 ">
                    Signup
                  </button>
                  <p className="register-info">
                    * Already have an Account? login
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabCard
