import { Link, useLocation, useNavigate } from 'react-router-dom'
import './header.scss'
import { useContext, useEffect, useState } from 'react'

import { UserService } from '../../service/userservice'
import { MessageService } from '../../service/messager-service'
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userName, setUserName] = useState({})
    const [isAuthenticated, setIsAuthenticate] = useState()
    const [messages, setMessages] = useState([])
    const [role, setRole] = useState({})
    const logout = (e) => {
        e.preventDefault();
        UserService.logout(e);
        reloadStatus()
        navigate("/authenticate")

    }
    const reloadStatus = () => {
        let user = UserService.getUser();
        setUserName(user?.username)
        setIsAuthenticate(UserService.isAuthenticated());
        setRole({
            isAdmin: UserService.isAdmin(),
            iaOwner: UserService.isOwner(),
            isCustomer: UserService.isCustomer(),
        })
    }
    const loadMessages = (e) => {
        if (!isAuthenticated)
            return
        MessageService.getMyMessage().then(res => {
            setMessages(res);
        })
    }
    useEffect(() => {
        reloadStatus()
        loadMessages();
    }, [location])


    return <div className="">
        {isAuthenticated ?
            <div className='header d-flex justify-content-between mx-4'>
                <div><h2>👋 Welcome, {userName} !</h2></div>
                <div className={"d-flex"}>
                    <Link to="/messages" className="text-dark position-relative mx-4">
                        <i className="material-icons">mail</i>
                        <span className="badge position-absolute top-0 translate-middle rounded-pill bg-primary">{messages.length}</span>
                    </Link>
                    <div className={"mx-2"}>
                        <a href='#' onClick={(e) => logout(e)} className={"text-danger"}>
                            <i className={"material-icons"}>logout</i>
                        </a>
                    </div>
                </div>
            </div>
            :
            <div className="right-div"><Link to="/authenticate">sign in</Link> </div>}
    </div>
}
export default Header