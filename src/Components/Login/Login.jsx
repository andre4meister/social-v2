import './Login.css';
import {getUserData} from "../../Redux/authReducer";
import {connect} from "react-redux";


const Login = ({}) => {

  return (
      <div className={'login-container'}>
        <div className={'form'}>
            <div className={'login-item'}>
                <h2>Account Login</h2>
            </div>
            <div className={'login-item input-container'}>
                <div>
                    <input className={'input'} placeholder={'Email'} type={'email'}/>
                </div>
                <div>
                    <input className={'input'} placeholder={'Password'}type={'password'}/>
                </div>
            </div>
            <div className={'login-item'}>
                <button onClick={getUserData()} className={'sign-in'}>SIGN IN</button>
            </div>
            <div className={'login-item'}>
                <p>Forgot <a href={'/#'}>Username / Password?</a></p>
                <p>Create an account?<a href={'/#'}> Sign up</a></p>
            </div>
        </div>
      </div>
  )
}
const mstp = (state) => {
  return {
      state: state,
  }
}
const LoginContainer = (props) => {
    console.log(props);
    getUserData()
  return (
      <Login isAuth={props.state}/>
  )
}
export default connect(mstp, {getUserData})(LoginContainer)