import React, { useState } from "react";
import api from "../service/api";
import { useEffect } from 'react';
import { Container } from "reactstrap";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Musics() {
    const [musics, setMusics] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await api.get('/playlist/listar');
            setMusics(response.data.musics)    
        })();
      }, [])

    async function excluir(id) {
        await api.delete('/playlist/deletar/' + id);
        document.location.reload(true);
    }

    function editar(id){
        api.patch('/playlist/editar/' + id);
        document.location.reload(true);
    }

    return(
        <ul className="list-group">
        {musics.map(music => {
            return(
                <div key={music._id} className="list-group-item">
                    <div className="music-content">
                        <h4>{music.name}</h4>
                        <a href={music.url} target="_blank" rel="noreferrer">{music.url}</a>
                    </div>
                    <div className="buttons">
                        <button className="music-update-btn" onClick={() => {editar(music._id)}} color="warning"><FaEdit/></button>
                        <button className="music-delete-btn" onClick={() => {excluir(music._id)}} color="danger"><FaTrashAlt /></button>
                    </div>
                </div>
            )
        })}
        </ul>
    );
}

export default Musics;