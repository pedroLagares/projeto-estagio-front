import React, { useState } from "react";
import api from "../../service/api";
import { useEffect } from 'react';
import { Container } from "reactstrap";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Musics() {
    const [musics, setMusics] = useState([]);

    const listarMusicas = async() => {
        const response = await api.get('/playlist/listar');
        setMusics(response.data.musics)    
    }


    useEffect(() => {
        listarMusicas();
        console.log(musics)
      }, [])

    async function Excluir(id) {
        await api.delete('/playlist/deletar/' + id);
        document.location.reload(true);
    }

    function Editar(id){
        api.patch('/playlist/editar/' + id);
        document.location.reload(true);
    }

    return(
        <Container>
            <div>
            {musics.map(music => {
                return(
                    <div>
                    <div className="container-music">
                        <script src="https://kit.fontawesome.com/baed3c6267.js" crossorigin="anonymous"></script>
                        <div key={music._id} style={{alignItems:'center',margin:'20px 60px', maxWidth: '350px'}}>
                            <h4>{music.name}</h4>
                            <a href={music.url} target="_blank" style={{textDecoration: 'none', overflowWrap: "break-word"}} rel="noreferrer">{music.url}</a>
                        </div>
                        <div className="buttons">
                            <button className="music-update-btn" onClick={() => {Editar(music._id)}} color="warning"><FaEdit/></button>
                            <button className="music-delete-btn" onClick={() => {Excluir(music._id)}} color="danger"><FaTrashAlt /></button>
                        </div>
                    </div>
                    <hr />
                    </div> 
                )
            })}
            </div>
        </Container>
    );
}

export default Musics;