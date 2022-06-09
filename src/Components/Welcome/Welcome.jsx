
import {useNavigate} from "react-router-dom";
import Technology from "./Technologies/Technologies";


const Welcome = () => {
    let className = "inverted";
    let scrollTrigger = 10;

    window.onscroll = function() {
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.getElementsByTagName("header")[0].classList.add(className);
        } else {
            document.getElementsByTagName("header")[0].classList.remove(className);
        }
    };

    let navigate = useNavigate();
    let loginPath = '/login';
    let signUpPath = 'https://social-network.samuraijs.com/signUp'

  return (
      <div className={'welcome-container'}>
          <header className={'header'}>
              <img className={'logo-img'} alt={'Friends'} src={'https://friendkit.cssninja.io/assets/img/logo/friendkit-bold.svg'}/>
              <div className={'buttons'}>
                  <button onClick={() => navigate(loginPath)} className={"btn btn-link btn-lg"}>Login</button>
                  <button onClick={() => window.location.replace(signUpPath)} className={"btn btn-outline-primary btn-lg"}>Sign up</button>
              </div>
          </header>
          <section className={'content-body'}>
              <img className={'main-img'} alt={'main-friends'} src={'https://friendkit.cssninja.io/assets/img/illustrations/characters/friends.svg'}/>
              <div className={'description'}>
                  <h2>Friends</h2>
                  <p>Place where you can meet a friend, or maybe someone better...</p>
                  <div className={'get-started-container'}>
                      <button onClick={() => window.location.replace(signUpPath)}
                              className={"get-started-button"}>Get started</button>
                  </div>
              </div>
          </section>
          <footer className={'footer'}>
              <div className={'name-tech'}>
                  <h1>
                      Technologies
                  </h1>
              </div>
                  <Technology/>
          </footer>
      </div>
  )
}
export default Welcome;