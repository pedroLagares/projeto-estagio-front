import { BrowserRouter  as Router, Routes, Route, Switch, Redirect } from "react-router-dom";
import { Cadastro } from "../Pages/CadastroPage";
import { Login } from "../Pages/LoginPage";''
import { Playlist } from "../Pages/PlaylistPage";
import { Component } from "react";

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => (
            false ? (<Component {...props}/> : (<Redirect to={{ pathname: }}))
        )} />
    )
}

export const AppRouter = () => {
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" exact element={<Login/>} />
                    <Route path="/cadastro" exact element={<Cadastro/>} />
                    <Route path="/playlist" exact element={<Playlist/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}