import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import LoginContainer from "./Components/Login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={'/'} element={<Welcome/>}/>
                    <Route path={'/news'} element={<h1>News</h1>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
