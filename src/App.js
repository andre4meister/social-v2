import './App.scss';
import {
    Route,
    Routes, useLocation,
} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import LoginContainer from "./Components/Login/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import UsersContainer from "./Components/Users/UsersContainer";
import Bars from "./Components/Sidebars/Bars";
import Friends from "./Components/Friends/Friends";
import Preloader from "./Components/common/Preloader";
import {connect} from "react-redux";
import {useEffect} from "react";

function App({isFetching}) {
    const location = useLocation();
    useEffect( () => {

    },[isFetching])
    if (isFetching)  return <Preloader/>
   return (
        <div className="app-container">
                { location.pathname !== '/'  && location.pathname !=='/login' && <Bars/>}
                <Routes>
                    <Route path={'/'} element={<Welcome/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/friends'} element={<Friends/>}/>
                    <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
        </div>
    );
}

function mstp(state) {
    return {
        isFetching: state.auth.isFetching,
    }
}

export default connect(mstp, {})(App);
