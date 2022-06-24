import './Login.scss';
import {login, logout} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {useState} from "react";
import { useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [rememberMe, changeRememberMe] = useState(false);
    const [onFocusEmail, setFocusEmail] = useState(false);
    const [onFocusPassword, setFocusPassword] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log(errors);
        props.login(email, password, rememberMe, '');
    }

    return (
      <div className={'login-container'}>
          <form noValidate={true} className={'form'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'login-item'}>
                <h2>Account Login</h2>
            </div>
            <div className={'login-item input-container'}>
                <div>
                    <input onFocus={ (e) => setFocusEmail(false)} value={email}
                           className={`input ${ errors?.email ? 'error' : ''}`}   placeholder={'Email'} type={'email'}
                           {...register("email", { required: 'Incorrect email', maxLength: 30,
                               onBlur: (e) => setFocusEmail(true), onChange: (e)=> setEmail(e.target.value)})}/>
                    <p>{errors?.email ? errors?.email.message : (!email.includes('@') && onFocusEmail) ? 'Incorrect email' : null}</p>
                </div>
                <div>
                    <input onFocus={ (e) => setFocusPassword(false)} value={password}
                           className={`input ${errors?.password ? 'error' : ''}`} placeholder={'Password'}type={'password'}
                           {...register("password", { required: 'Enter your password', maxLength: 30,
                               onBlur: (e) => setFocusPassword(true), onChange: (e)=> setPassword(e.target.value) })}/>
                    <p>{errors?.password ? errors?.password.message : (password === '' && onFocusPassword) ? 'Enter your password' : null}</p>

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
            {/*<div className={'login-item'}>*/}
            {/*    <p>Create an account?<a href={'https://social-network.samuraijs.com/signUp'}> Sign up</a></p>*/}
            {/*</div>*/}
        </form>
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
    const profileRedirect = useNavigate()
    if (props.isAuth) profileRedirect(`/profile/${props.userId}`);

  return (
      <Login isAuth={props.isAuth}
             userId={props.userId}
             userLogin={props.userLogin}
             login={props.login}
             logout={props.logout}
      />
  )
}
export default connect(mstp, { login, logout})(LoginContainer)