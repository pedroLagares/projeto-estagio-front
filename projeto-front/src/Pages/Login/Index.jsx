import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../../service/api.js'
import { LayoutComponents } from '../../components/LayoutComponentes/Index';
import Alerta from '../../components/Alerta.jsx';
import { useNavigate } from 'react-router-dom';
import { UncontrolledAlert } from 'reactstrap';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function Logar(e) {
        e.preventDefault();
        const model = { email: email, password: password };     

        await api.post("/auth/login", model).then(response => {
            navigate("/playlist");
        }).catch(res => {
            Alerta(res.response.data.error);
        });

    };

    const hasVal = (val) => val !== "" ? 'has-val input' : 'input';

    return (
        <LayoutComponents>
            <form className="login-form">

                <span className="login-form-title">Faça seu login</span>

                <div className="wrap-input">
                    <input className={hasVal(email)} type="email" value={email} onChange={p => setEmail(p.target.value)} />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input className={hasVal(password)} type="password" value={password} onChange={p => setPassword(p.target.value)} />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" onClick={Logar}>Login</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>
                    <Link className="txt2" to="/cadastro">Cadastrar</Link>
                </div>
                <UncontrolledAlert color="info">
                    Registro salvo com sucesso!
                </UncontrolledAlert>

            </form>
        </LayoutComponents>
    );
}
