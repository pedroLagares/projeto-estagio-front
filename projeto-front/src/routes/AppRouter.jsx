import { BrowserRouter  as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Cadastro } from "../Pages/CadastroPage";
import { Login } from "../Pages/LoginPage";
import { Playlist } from "../Pages/PlaylistPage";
import { Component } from "react";
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const { authenticated } = useSelector((state) => state.auth); 

    return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login/>} />
                <Route path="/cadastro" exact element={<Cadastro/>} />
                <Route path="/playlist" exact element={<PrivateRoute/>}>
                    <Route path="/playlist" exact element={<Playlist/>}/>
                </Route>
            </Routes>
        </Router>
    );
}