import { Input } from '../components/Input';
import { Button } from '../components/Button';

import '../styles/register.css'
import { Link } from 'react-router-dom';

export function Register() {
    return (
        <div className="register-body">
            <aside className="register-image-content">
                <Link to="/" className="back-to-home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </Link>
            </aside>
            <div className="register-content">
                <h1>Register</h1>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="text" placeholder="Nome" />
                    <Input className="input-register" style={{marginLeft: 20}} type="text" placeholder="CPF" />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="date" placeholder="Data de Nascimento" />
                    <Input className="input-register" style={{width: '100%', marginLeft: 20}} type="text" placeholder="CEP" />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="text" placeholder="Rua" />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="text" placeholder="Bairro" />
                    <Input className="input-register" style={{width: '100%', marginLeft: 20}} type="text" placeholder="Nº" />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '70%'}} type="text" placeholder="Cidade" />
                    <Input className="input-register" style={{width: '30%', marginLeft: 20}} type="text" placeholder="Estado" />
                </div>
                <div className="register-row">
                    <Button style={{flex: 1, marginTop: '1em'}}>Register</Button>
                </div>
            </div>
        </div>
    )
}