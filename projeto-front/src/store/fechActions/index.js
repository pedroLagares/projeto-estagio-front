import api from '../../service/api'
import { login } from '../ducks/auth';

export const authLogin = (user) => {
    return dispatch => {
        api.post("/auth/login", user).then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch(login(res.data.user.name));
            window.location.pathname = '/playlist'
        }
        ).catch(error => {
            alert(error.response.data.error);
        });
    }
}