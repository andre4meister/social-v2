import './Login.css'
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
                <button className={'sign-in'}>SIGN IN</button>
            </div>
            <div className={'login-item'}>
                <p>Forgot <a href={'/#'}>Username / Password?</a></p>
                <p>Create an account?<a href={'/#'}> Sign up</a></p>
            </div>
        </div>
      </div>
  )
}
export default Login;