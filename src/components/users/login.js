import { Button, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { UserService } from "../../service/userservice"
import { useRef } from "react"
import { ROLES } from "../../constant/Roles"

const Login = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const loginHandler = (e) => {
        e.preventDefault();
        let data = formRef.current;
        let userInfo = {
            userName: data["username"].value,
            password: data["password"].value
        }
        UserService.login(userInfo).then(res => {
            if (UserService.isInRole(ROLES.ADMIN))
                navigate("/admin");
            if (UserService.isInRole(ROLES.CUSTOMER))
                navigate("/customer");
            if (UserService.isInRole(ROLES.OWNER))
                navigate("/owner");
        });
    }

    return <>
        {/* <Form ref={formRef} className="col-6 offset-3">
            <h1 className="text-center">Login</h1>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="User name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={(e) => loginHandler(e)} variant="primary">
                Submit
            </Button>
            <Link to="/register" className="btn btn-default">
                Sign up
            </Link>
        </Form> */}
        <div class="login page-header align-items-start min-vh-100">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" ref={formRef} class="text-start">
                  <div class="input-group input-group-outline my-3">
                    {/* <label class="form-label">User Name</label> */}
                    <input type="text" placeholder="User name" name="username" class="form-control"/>
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    {/* <label class="form-label">Password</label> */}
                    <input type="password" placeholder="password" name="password" class="form-control"/>
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked/>
                    <label class="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" onClick={(e) => loginHandler(e)} class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <Link to="/register" class="text-primary text-gradient font-weight-bold">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
}

export default Login