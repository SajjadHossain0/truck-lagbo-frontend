import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthForm from "./components/Authentication/AuthForm";
import DriverRegistration from "./components/Authentication/DriverRegistration";

function App() {
    return (
        <div className="App">

            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Routes>
                    <Route path="/auth" element={<AuthForm/>}/>
                </Routes>
                <Routes>
                    <Route path="/driver-registration" element={<DriverRegistration/>}/>
                </Routes>

            </BrowserRouter>
            <Footer/>

        </div>
    );
}

export default App;
