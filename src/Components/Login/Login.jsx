import './Login.scss';
import {login, logout} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {useState} from "react";
import { useNavigate} from "react-router-dom";

const Login = ({login}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, changeRememberMe] = useState(false);
    const [onFocusEmail, setFocusEmail] = useState(false);
    const [onFocusPassword, setFocusPassword] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [generalError, setGeneralError] = useState(null);

    const onSubmit = () => {
        login(email, password, rememberMe, '')
            .then( response => {
                setGeneralError(!response.fieldsErrors.length ? response.messages[0] : null);
                if (!generalError) {
                    setEmailError(response.fieldsErrors[0].field === 'email' ? response.fieldsErrors[0].error : null)
                    setPasswordError(response.fieldsErrors[0].field === 'password' ? response.fieldsErrors[0].error : null)
                }
            })
            .catch( error => console.log(error))
    }
    const onFocusEmailChange = (e) =>{
        setFocusEmail(false);
        setEmailError(null);
        setGeneralError(null);
    }
    const onFocusPasswordChange = (e) =>{
        setFocusPassword(false);
        setPasswordError(null);
        setGeneralError(null);
    }
    return (
      <div className={'login-container'}>
          <div className={'form'}>
            <div className={'login-item'}>
                <h2>Account Login</h2>
            </div>
            <div className={'login-item input-container'}>
                <div>
                    <input onFocus={ (e) => onFocusEmailChange(e)} value={email}
                           className={`input ${ emailError ? 'error' : ''}`}   placeholder={'Email'} type={'email'}
                           onBlur={(e) => setFocusEmail(true)}
                           onChange={(e)=> setEmail(e.target.value)}/>
                    <p>{ generalError ? generalError : emailError ? emailError
                        : ((!email || !email.includes('@')) && onFocusEmail) ? 'Incorrect email' : null}</p>
                </div>
                <div>
                    <input onFocus={ (e) => onFocusPasswordChange(e)} value={password}
                           className={`input ${passwordError ? 'error' : ''}`} placeholder={'Password'}type={'password'}
                               onBlur={(e) => setFocusPassword(true)}
                           onChange={(e)=> setPassword(e.target.value)} />
                    <p>{ generalError ? generalError : passwordError ? passwordError
                        : (password === '' && onFocusPassword) ? 'Enter your password' : null}</p>
                </div>
                <div>
                    <input value={rememberMe}  onChange={(e)=> changeRememberMe(e.target.checked)}
                           className={'remember'} type={'checkbox'}/>
                    <span>Remember me</span>
                </div>
            </div>
            <div className={'login-item'}>
                <button onClick={()=> {
                    onSubmit();
                }} className={'sign-in'}>SIGN IN</button>
            </div>
        </div>
      </div>
  )
}
const mstp = (state) => {
  return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId,
  }
};

const LoginContainer = ({isAuth,userId,login}) => {
    const profileRedirect = useNavigate()
    if (isAuth) profileRedirect(`/profile/${userId}`);

  return (
      <Login {...{login}}/>
  )
}
export default connect(mstp, { login, logout})(LoginContainer)