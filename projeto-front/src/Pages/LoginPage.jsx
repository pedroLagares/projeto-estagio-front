import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LayoutComponents } from '../components/LayoutComponents';
import { useNavigate } from 'react-router-dom';
import { UncontrolledAlert } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { authLogin } from '../store/fechActions'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function logar(e) {
        e.preventDefault();
        const user = { email: email, password: password };   
        dispatch(authLogin(user));
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
                    <button className="login-form-btn" onClick={logar}>Login</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>
                    <Link className="txt2" to="/cadastro">Cadastrar</Link>
                </div>

            </form>
        </LayoutComponents>
    );
}
