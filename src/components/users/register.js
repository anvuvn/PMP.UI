
import { useRef } from "react"
import { ButtonGroup, Button } from "react-bootstrap";
import { Form, Link, useNavigate } from "react-router-dom"
import { API } from "../../service/base-service";
import { UserService } from "../../service/userservice";
import './user.scss'

const Register = () => {
    const formRef = useRef(null);
    const navigate = useNavigate()
    const registerHandler = (e) => {
        e.preventDefault();
        let data = formRef.current;
        let userInfo = {
            name: data["username"].value,
            password: data["password"].value,
            roles: [data["role"].value]
        }
        UserService.register(userInfo).then(res => {
            alert("User registered successfully");
            navigate("/authenticate")
        })
    }
    return <>
        {/* <form className="col-6 offset-3" ref={formRef}>
            <div className="row">
                <label className="form-label">User name</label>
                <input className="form-control" type="text" name="username" />
            </div>
            <div className="row">
                <label className="form-label">password</label>
                <input className="form-control" type="password" name="password" />
            </div>
            <div className="row">
                <label className="form-label">Roles</label>
                <select className="form-control" name="role">
                    <option value="Owner">Owner</option>
                    <option value="Customer">Customer</option>
                </select>
            </div>
            <div className="action-button">
                <Button variant="primary" onClick={(e) => registerHandler(e)}>Register</Button>
                <Button type="reset" variant="danger">Reset</Button>
            </div>
        </form> */}

        <section>
            <div class="page-header min-vh-100">
                <div class="container">
                    <div class="row">
                        <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                            <div class="sign-up position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" >
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                            <div class="card card-plain">
                                <div class="card-header">
                                    <h4 class="font-weight-bolder">Sign Up</h4>
                                    <p class="mb-0">Enter your email and password to register</p>
                                </div>
                                <div class="card-body">
                                    <form ref={formRef} role="form">
                                        <div class="input-group input-group-outline mb-3">
                                            {/* <label class="form-label">Name</label> */}
                                            <input type="text" placeholder="name" name="username" class="form-control" />
                                       </div>
                                        <div class="input-group input-group-outline mb-3">
                                            {/* <label class="form-label">Password</label> */}
                                            <input type="password" name="password" placeholder="Password" class="form-control" />
                                        </div>
                                        <div className="input-group input-group-outline mb-3">
                                            <select className="form-control" name="role">
                                                <option value="Owner">Owner</option>
                                                <option value="Customer">Customer</option>
                                            </select>
                                        </div>
                                       
                                        <div class="text-center">
                                            <button type="button" onClick={(e) => registerHandler(e)} class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                    <p class="mb-2 text-sm mx-auto">
                                        Already have an account?
                                        <Link to="/authenticate" class="text-primary text-gradient font-weight-bold">Sign in</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Register