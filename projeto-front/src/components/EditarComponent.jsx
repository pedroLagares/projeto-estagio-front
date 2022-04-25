import React from "react";
import { useState } from "react";
import { FaRegWindowClose } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import api from "../service/api";
import { editarMusica } from "../store/fechActions";

const Editar = ({id, onClose = () => {}}) => {
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const editar = () => {
        const music = { name: name, url: url};
        dispatch(editarMusica(id, music)).then(() => onClose());
    } 

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal') onClose();
    }

    return (
    <div id='modal' className="modal" onClick={handleOutsideClick}> 
        <div className="containerModal">
            <button className="close" onClick={onClose}><FaRegWindowClose/></button>
            <div className="editar-content">
                <div className="editar-input">
                    <input type="text" placeholder='name' value={name} onChange={p => setName(p.target.value)}/>
                </div>
                <div className="editar-input">
                    <input type="text" placeholder='url' value={url} onChange={p => setUrl(p.target.value)}/>
                </div>
                <div className="editar-btn">
                <button className="login-form-btn" onClick={editar}>Editar Musica</button>
                </div>
            </div>
        </div>
    </div>);
};

export default Editar;