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
        <Form ref={formRef} className="col-6 offset-3">
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
        </Form>
    </>
}

export default Login