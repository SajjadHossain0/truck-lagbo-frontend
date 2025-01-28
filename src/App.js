import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthForm from "./components/Authentication/AuthForm";
import DriverRegistration from "./components/Authentication/DriverRegistration";
import SettingsPage from "./components/SettingsPage";
import ProfilePage from "./components/ProfilePage";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import ResetPassword from "./components/Authentication/ResetPassword";
import ChangePassword from "./components/Authentication/ChangePassword";
import {useEffect, useState} from "react";

function App() {
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setLogin(!!token);
    })
    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth" element={<AuthForm/>}/>
                    <Route path="/forget-pass" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/driver-registration" element={<DriverRegistration/>}/>
                    <Route path="/settings" element={
                        isLogin ? (<SettingsPage/>):(<AuthForm/>)
                    }/>
                    <Route path="//change-password" element={<ChangePassword/>}/>
                    <Route path="/profile" element={
                        isLogin ? (<ProfilePage/>) : (<AuthForm/>)
                    }/>


                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}

export default App;
