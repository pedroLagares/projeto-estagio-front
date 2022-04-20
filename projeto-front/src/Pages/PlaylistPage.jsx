import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import api from '../service/api.js'
import Musics from '../components/MusicsComponent';
import { FaSignOutAlt } from 'react-icons/fa';
import logoutService from '../service/logout.Service'

export const Playlist = () => {
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const { authenticated } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);
    const { musics } = useSelector(state => state.musics);
    const dispatch = useDispatch();
    

    async function logout() {
        authenticated && dispatch(logoutService())
    }

    async function adicionar(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const music = { name: name, url: url};
        await api.post("/playlist/adicionar", music, {
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            }})
            .catch(error => {
                alert(error.response.data.error);
            });
        };

    return (
        <div className='fullpage'>
            <div className='container-playlist'>
                <div >
                    <button className='btn-logout' onClick={logout}><FaSignOutAlt/></button>
                </div>
                <span className="playlist-form-title">Playlist de {user}</span>
                    <div className='wrap-playlist'>
                        <form className="playlist-form">
                            <div className="wrap-input">
                                <input type="text" placeholder='name' value={name} onChange={p => setName(p.target.value)}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" placeholder='url' value={url} onChange={p => setUrl(p.target.value)}/>
                            </div>
                            <div className="container-login-form-btn">
                                <button className="login-form-btn" onClick={adicionar}>Adicionar Musica</button>
                            </div>
                        </form>
                    </div>

                    <div >
                        <Musics/>
                    </div>
            </div>
        </div>
    );

}