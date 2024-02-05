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


    return <div className="header">

        {/* <ul>
            <li><Link to="/my-properties">My Properties</Link></li>
            <li><Link to="/offer">Offers</Link></li>
            {role.isAdmin?<li><Link to="/admin">Admin</Link></li>:""}
        </ul> */}

        {isAuthenticated ? <div className='right-div'>
            <div>Welcome, {userName}</div>
            <div>
                <Link to="/messages" className="text-dark position-relative">
                    <i className="fas fa-envelope"></i>
                    <span className="badge position-absolute top-0 translate-middle rounded-pill bg-danger">{messages.length}</span>
                </Link>
            </div>


            <div><a href='#' onClick={(e) => logout(e)}>Logout</a> </div>
        </div> :
            <div className="right-div"><Link to="/authenticate">sign in</Link> </div>}



    </div>
}
export default Header