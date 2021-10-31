import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import swal from 'sweetalert';
import { cpf } from 'cpf-cnpj-validator'; 
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import '../styles/register.css'

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

export function Register() {

    const [name, setName] = useState('');
    const [cpfUser, setCpfUser] = useState('');
    const [date, setDate] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const history = useHistory();
    const cookies = new Cookies();

    const register = () => {
        if(name && cpfUser && date && cep && street && district && number && city && state){
            
            let cpfNoFormat = cpfUser.replaceAll(".", "");
            cpfNoFormat = cpfNoFormat.replace(".", "");
            if(cpf.isValid(cpfNoFormat)){
                let user: User = {
                    name,
                    cpf: cpfUser,
                    date,
                    cep,
                    street,
                    district,
                    number,
                    city,
                    state
                }
                let userStringfy = JSON.stringify(user);
                localStorage.setItem('user', userStringfy);
                cookies.set('user', userStringfy, { path: '/' });
                swal({
                    title: "Success!",
                    text: "Successfully registered!",
                    icon: "success",
                  }).then(() => {
                    history.push("/");
                  })
            } else {
                swal({
                    title: "Warning!",
                    text: "Please, enter a valid CPF!",
                    icon: "warning",
                    dangerMode: true,
                  })
            }
        } else {
            swal({
                title: "Warning!",
                text: "Please, fill all fields!",
                icon: "warning",
                dangerMode: true,
              })
        }
    }

    const findCep = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCep(e.target.value);
        fetch('https://viacep.com.br/ws/'+e.target.value.replace("-", "")+'/json/', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                if(!data.erro){
                    setStreet(data.logradouro);
                    setDistrict(data.bairro);
                    setState(data.uf)
                    setCity(data.localidade);
                }
            })
            .catch((err) => err)
    }

    return (
        <div className="register-body">
            {
                window.innerWidth >= 1024 ?
                <aside className="register-image-content">
                    <Link to="/" className="back-to-home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </Link>
                </aside>
                :
                <Link to="/" className="back-to-home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </Link>
            }
            <div className="register-content">
                <h1>Register</h1>
                <div className="register-row">
                    <Input className="input-register" style={{width: '70%'}} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <InputMask className="input-register" style={{width: '30%', marginLeft: 20}} mask="999.999.999-99" placeholder="CPF" value={cpfUser} onChange={(e) => setCpfUser(e.target.value)} />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="date" placeholder="Birth Date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <InputMask className="input-register" style={{width: '100%', marginLeft: 20}} mask="99999-999" placeholder="CEP" value={cep} onChange={(e) => findCep(e)} />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '100%'}} type="text" placeholder="District" value={district} onChange={(e) => setDistrict(e.target.value)} />
                    <Input className="input-register" style={{width: '100%', marginLeft: 20}} type="text" placeholder="Nº" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="register-row">
                    <Input className="input-register" style={{width: '70%'}} type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <Input className="input-register" style={{width: '30%', marginLeft: 20}} type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="register-row">
                    <Button style={{flex: 1, marginTop: '1em'}} onClick={register} >Register</Button>
                </div>
            </div>
        </div>
    )
}