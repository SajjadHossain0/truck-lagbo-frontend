import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>*/}

            <Header/>
            <Home/>

        </div>
    );
}

export default App;
