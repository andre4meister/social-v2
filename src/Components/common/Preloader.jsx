import {getAuthUserData} from "../../Redux/authReducer";
import {useEffect} from "react";
import {connect} from "react-redux";

const Preloader = ({ getAuthUserData, isAuth}) => {
    useEffect( () => {
        if (!isAuth) getAuthUserData()
    }, [])
  return <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
  </div>
}

function mstp(state) {
    return {
        // isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mstp,{getAuthUserData})(Preloader);