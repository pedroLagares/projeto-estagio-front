import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "../Pages/Cadastro/Index";
import { Login } from "../Pages/Login/Index";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login/>} />
                <Route path="/cadastro" exact element={<Cadastro/>} />
            </Routes>
        </Router>
    );
}