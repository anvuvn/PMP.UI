import { Link, useLocation, useNavigate } from 'react-router-dom'
import './header.scss'
import { useContext, useEffect, useState } from 'react'

import { UserService } from '../../service/userservice'
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userName, setUserName] = useState({})
    const [isAuthenticated, setIsAuthenticate] = useState()
    const logout = (e) => {
        e.preventDefault();
        UserService.logout(e);
        reloadStatus()
        navigate("/authenticate")

    }
    const reloadStatus = () => {
        setUserName(UserService.getUser()?.username)
        setIsAuthenticate(UserService.isAuthenticated());
    }
    useEffect(() => {
        reloadStatus()
    }, [location])

    return <div className="header">
        <ul>
            <li><Link to="/my-properties">My Properties</Link></li>
            <li><Link to="/offer">Offers</Link></li>
        </ul>

        {isAuthenticated ? <div className='right-div'>
            <div>profile</div>
            <div>Welcome, {userName}</div>
            <div><a href='#' onClick={(e) => logout(e)}>Logout</a> </div>
        </div> :
            <div className="right-div"><Link to="/authenticate">sign in</Link> </div>}
    </div>
}
export default Header