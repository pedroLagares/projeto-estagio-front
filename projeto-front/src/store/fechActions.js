import api from '../service/api'
import { login } from './ducks/auth';

export const authLogin = (user) => {
    return dispatch => {
        return api.post("/auth/login", user).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', res.data.user.name);
            return dispatch(login(res.data.user.name));
        }
        ).catch(error => {
            alert(error.response.data.error);
        });
    }
}

export const listarMusicas = () => {
    return dispatch => {
        return api.get('/playlist/listar', {
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            }});
            return dispatch(login(res.data.user.name));
        }
        ).catch(error => {
            alert(error.response.data.error);
        });
    }
}