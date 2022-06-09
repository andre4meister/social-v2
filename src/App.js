import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes, useLocation,
} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import LoginContainer from "./Components/Login/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
    const location = useLocation();

    return (
        <div className="App">
                { location.pathname !== '/'  && location.pathname !=='/login' && <HeaderContainer/>}
                <Routes>
                    <Route path={'/'} element={<Welcome/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
        </div>
    );
}

export default App;
