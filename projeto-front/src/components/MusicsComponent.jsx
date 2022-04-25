import React, { useState } from "react";
import api from "../service/api";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { listarMusicas } from '../store/fechActions'
import Editar from './EditarComponent'
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";

function Musics() {
    const musics = useSelector(state => state.musics)
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        dispatch(listarMusicas()) 
    }, []);

    async function excluir(id) {
        await api.delete('/playlist/deletar/' + id);
        document.location.reload(true);
    }

    const openModal = (id) => {
        setIsModalVisible({
            [id]: true
        })
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
                        <button className="music-update-btn" onClick={() => openModal(music._id)} color="warning"><FaEdit/></button>
                        {isModalVisible[music._id] ? <Editar id={music._id} onClose={() => setIsModalVisible(false)}/> : null}
                        <button className="music-delete-btn" onClick={() => {excluir(music._id)}} color="danger"><FaTrashAlt /></button>
                    </div>
                </div>
            )
        })}
        </ul>
    );
}

export default Musics;