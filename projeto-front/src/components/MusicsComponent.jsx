import React, { useState } from "react";
import api from "../service/api";
import { useEffect } from 'react';
import { Container } from "reactstrap";
import bootstrap from 'bootstrap'
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

    async function excluir(id) {
        await api.delete('/playlist/deletar/' + id);
        document.location.reload(true);
    }

    function editar(id){
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
                            <button className="music-update-btn" onClick={() => {editar(music._id)}} color="warning"><FaEdit/></button>
                            <button className="music-delete-btn" onClick={() => {excluir(music._id)}} color="danger"><FaTrashAlt /></button>
                        </div>
                    </div>
                    <hr />
                    </div> 
                )
            })}
            <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
            </div>
        </Container>
    );
}

export default Musics;