import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../service/api.js'
import { LayoutComponents } from '../components/LayoutComponents';
import 'bootstrap/dist/css/bootstrap.css';

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    async function registrar(e) {
        e.preventDefault();
        const model = { name: name, email: email, password: password };

        await api.post("/auth/register", model).then(response => {
            window.location.href="/login";
            console.log(response);
        });

    };

    const hasVal = (val) => val !== "" ? 'has-val input' : 'input';

    return (
        <LayoutComponents>
            <form className="login-form">

                <span className="login-form-title">Criar conta</span>

                <div className="wrap-input">
                    <input className={hasVal(name)} type="name" value={name} onChange={p => setName(p.target.value)} />
                    <span className="focus-input" data-placeholder="name"></span>
                </div>

                <div className="wrap-input">
                    <input className={hasVal(email)} type="email" value={email} onChange={p => setEmail(p.target.value)} />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input className={hasVal(password)} type="password" value={password} onChange={p => setPassword(p.target.value)} />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" onClick={registrar} >Cadastrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta?</span>
                    <Link className="txt2" to="/login">Acessar com Email e Senha.</Link>
                </div>
            </form>
        </LayoutComponents>

    );
}