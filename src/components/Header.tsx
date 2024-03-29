
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

import '../styles/header.css';

type User = {
    name: string;
    cpf: string;
    date: string;
    cep: string;
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
}

export function Header(){
    const [user, setUser] = useState<User | null>();
    const [menuWidth, setMenuWidth] = useState('68%');
    const [cookies, ] = useState(new Cookies())
    const history = useHistory();

    useEffect(() => {
        // let userLocal = localStorage.getItem('user');
        let userCookies = cookies.get("user");
        if(userCookies){
            setUser(userCookies);
            setMenuWidth('100%')
        }
    },[cookies]);

    const logout = () => {
        localStorage.removeItem("user");
        cookies.remove("user");
        history.go(0);
    }

    return(
        <div className="header">
            
            <div className="header-title">
                <h1 className="header-title-text">Healthy Food</h1>
            </div>
            <div className="header-options">
                <div className="content-options" style={{width: menuWidth}}>
                    <a href="#best-recipes" className="text-option">HEALTHY RECIPES</a>
                    <a href="#blog" className="text-option">BLOG</a>
                    <a href="#join" className="text-option">JOIN</a>
                    { user ?
                        <>
                            <h2 className="text-option" onClick={logout}>LOGOUT</h2>
                            <h2 className="register-option">WELCOME {user.name.split(" ")[0].toUpperCase()}</h2>
                        </>
                        : <Link to="/register" className="register-option">REGISTER</Link>
                    }
                </div> 
            </div>
        </div>
    )
}