import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../service/api.js'
import { LayoutComponents } from '../components/LayoutComponents';
import Alerta from '../components/AlertaComponent';
import { useNavigate } from 'react-router-dom';
import { UncontrolledAlert } from 'reactstrap';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false)
    })

    async function logar(e) {
        try {
            e.preventDefault();
            const model = { email: email, password: password };   
            const {data: {token}} = await api.post("/auth/login", model)
            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            navigate("/playlist");
        } catch (err) {
            console.log(err);
        }
        // await api.post("/auth/login", model).then(response => {
        //     console.log(response.token, response.id, response.headers)
        //     navigate("/playlist");
        // }).catch(res => {
        //     Alerta(res.response.data.error);
        // });

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
                <UncontrolledAlert color="info">
                    Registro salvo com sucesso!
                </UncontrolledAlert>

            </form>
        </LayoutComponents>
    );
}
