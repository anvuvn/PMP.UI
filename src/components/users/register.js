
import { useRef } from "react"
import { ButtonGroup, Button } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom"
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
        <form className="col-6 offset-3" ref={formRef}>
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
        </form>
    </>
}

export default Register