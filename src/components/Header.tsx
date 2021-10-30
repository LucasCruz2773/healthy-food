
import { Link } from 'react-router-dom';

import '../styles/header.css';

export function Header(){
    return(
        <div className="header">
            <div className="header-title">
                <h1 className="header-title-text">Healthy Food</h1>
            </div>
            <div className="header-options">
                <div className="content-options">
                    <h2 className="text-option">HEALTHY RECIPES</h2>
                    <h2 className="text-option">BLOG</h2>
                    <h2 className="text-option">JOIN</h2>
                    <Link to="#" className="register-option">REGISTER</Link>
                </div> 
            </div>
        </div>
    )
}