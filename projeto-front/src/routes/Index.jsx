import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "../Pages/CadastroPage";
import { Login } from "../Pages/LoginPage";
import { Playlist } from "../Pages/PlaylistPage";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login/>} />
                <Route path="/cadastro" exact element={<Cadastro/>} />
                <Route path="/playlist" exact element={<Playlist/>} />
            </Routes>
        </Router>
    );
}