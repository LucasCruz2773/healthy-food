
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();

    useEffect(() => {
        let userLocal = localStorage.getItem('user');
        if(userLocal){
            setUser(JSON.parse(userLocal));
            setMenuWidth('100%')
        }
    },[]);

    const logout = () => {
        localStorage.removeItem("user");
        history.go(0);
    }

    return(
        <div className="header">
            <div className="header-title">
                <h1 className="header-title-text">Healthy Food</h1>
            </div>
            <div className="header-options">
                <div className="content-options" style={{width: menuWidth}}>
                    <h2 className="text-option">HEALTHY RECIPES</h2>
                    <h2 className="text-option">BLOG</h2>
                    <h2 className="text-option">JOIN</h2>
                    { user ?
                        <>
                            <h2 className="text-option" onClick={logout}>LOGOUT</h2>
                            <h2 className="register-option">WELCOME {user.name.toUpperCase()}</h2>
                        </>
                        : <Link to="/register" className="register-option">REGISTER</Link>
                    }
                </div> 
            </div>
        </div>
    )
}