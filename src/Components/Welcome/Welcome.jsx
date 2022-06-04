import './Welcome.css'
import btLogo from '../../images/bootstrap-icon-css.png'
import reactLogo from '../../images/react.png'
import reduxLogo from '../../images/redux-logo.png'
import cssLogo from '../../images/css.png'
import htmlLogo from '../../images/html.png'
import jsLogo from '../../images/js-logo.png'
import { useNavigate } from "react-router-dom";


const Welcome = ({}) => {
    let className = "inverted";
    let scrollTrigger = 10;

    window.onscroll = function() {
        // We add pageYOffset for compatibility with IE.
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.getElementsByTagName("header")[0].classList.add(className);
        } else {
            document.getElementsByTagName("header")[0].classList.remove(className);
        }
    };

    let navigate = useNavigate();
    const onClickLogin = () => {
        let path = '/login'
        navigate(path)
    }

  return (
      <div className={'welcome-container'}>
          <header className={'header'}>
              <img className={'logo-img'} src={'https://friendkit.cssninja.io/assets/img/logo/friendkit-bold.svg'}/>
              <div className={'buttons'}>
                  <button onClick={onClickLogin} className={"btn btn-link btn-lg"}>Login</button>
                  <button className={"btn btn-outline-primary btn-lg"}>Sign in</button>
              </div>
          </header>
          <section className={'content-body'}>
              <img className={'main-img'} src={'https://friendkit.cssninja.io/assets/img/illustrations/characters/friends.svg'}/>
              <div className={'description'}>
                  <h2>Friends</h2>
                  <p>Place where you can meet a friend, or maybe someone better...</p>
                  <div className={'get-started-container'}>
                      <button className={"get-started-button"}>Get started</button>
                  </div>
              </div>
          </section>
          <footer className={'footer'}>
              <div className={'name-tech'}>
                  <h1>
                      Technologies
                  </h1>
              </div>
              <div className={'techs'}>
                <div className={'tech-logo'}>
                    <img src={btLogo}/>
                </div>
                <div className={'tech-logo'}>
                    <img src={reactLogo}/>
                </div>
                <div className={'tech-logo'}>
                    <img src={reduxLogo}/>
                </div>
                <div className={'tech-logo'}>
                    <img src={cssLogo}/>
                </div>
                <div className={'tech-logo'}>
                    <img src={htmlLogo}/>
                </div>
                  <div className={'tech-logo'}>
                    <img src={jsLogo}/>
                </div>
              </div>
          </footer>
      </div>
  )
}
export default Welcome;