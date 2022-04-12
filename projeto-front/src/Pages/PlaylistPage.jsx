import { useState } from 'react';
import api from '../service/api.js'
import Musics from '../components/MusicsComponent.jsx';

export const Playlist = () => {
    const [name, setName] = useState();
    const [url, setUrl] = useState();

    async function adicionar(e) {
        e.preventDefault();
        const music = { name: name, url: url}

        await api.post("/playlist/adicionar", music).then(response => {
            console.log(response);
            document.location.reload(true);
        });
    }

    return (
        <div className='fullpage'>
            <div className='container-playlist'>
                <span className="playlist-form-title">My Playlist</span>
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

                    <div className="list-musics">
                        <Musics/>
                    </div>
            </div>
        </div>
    );

}