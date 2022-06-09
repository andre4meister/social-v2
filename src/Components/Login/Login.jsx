import './Login.css';
import {getUserData, login, logout} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [rememberMe, changeRememberMe] = useState(false)

    return (

      <div className={'login-container'}>
        <div className={'form'}>
            <div className={'login-item'}>
                <h2>Account Login</h2>
            </div>
            <div className={'login-item input-container'}>
                <div>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)}
                           className={'input'} placeholder={'Email'} type={'email'}/>
                </div>
                <div>
                    <input value={password}  onChange={(e)=> setPassword(e.target.value)}
                           className={'input'} placeholder={'Password'}type={'password'}/>
                </div>
                <div>
                    <input value={rememberMe}  onChange={(e)=> changeRememberMe(e.target.checked)}
                           className={'remember'} type={'checkbox'}/>
                    <span>Remember me</span>
                </div>
            </div>
            <div className={'login-item'}>
                <button onClick={()=> {
                    props.login(email, password, rememberMe, '');
                }} className={'sign-in'}>SIGN IN</button>
            </div>
            <div className={'login-item'}>
                <p>Forgot <a href={'/#'}>Username / Password?</a></p>
                <p>Create an account?<a href={'https://social-network.samuraijs.com/signUp'}> Sign up</a></p>
            </div>
        </div>
      </div>
  )
}
const mstp = (state) => {
  return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId,
      userLogin: state.auth.login,
  }
};

const LoginContainer = (props) => {
    useEffect( () => {
        alert('rerender')
    },[props.isAuth]);

    const profileRedirect = useNavigate()
    if (props.isAuth) profileRedirect('/profile');

  return (
      <Login getUserData={props.getUserData}
             isAuth={props.isAuth}
             userId={props.userId}
             userLogin={props.userLogin}
             login={props.login}
             logout={props.logout}
      />
  )
}
export default connect(mstp, {getUserData, login, logout})(LoginContainer)