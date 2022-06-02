import './Welcome.css'
import {NavLink} from "react-router-dom";
const Welcome = ({}) => {
    let className = "inverted";
    let scrollTrigger = 60;

    window.onscroll = function() {
        // We add pageYOffset for compatibility with IE.
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.getElementsByTagName("header")[0].classList.add(className);
        } else {
            document.getElementsByTagName("header")[0].classList.remove(className);
        }
    };
  return (
      <div className={'welcome-container'}>
          <header className={'header'}>
              <img className={'logo-img'} src={'https://friendkit.cssninja.io/assets/img/logo/friendkit-bold.svg'}/>
              <div className={'buttons'}>
                  <button className={"btn btn-link btn-lg"}>Login</button>
                  <button className={"btn btn-outline-primary btn-lg"}>Sign in</button>
              </div>
          </header>
          <div className={'content-body'}>
              <img className={'main-img'} src={'https://friendkit.cssninja.io/assets/img/illustrations/characters/friends.svg'}/>
              <div className={'description'}>
                  <h2>Friends</h2>
                  <p>Place where you can meet a friend, or maybe someone better...</p>
                  <div className={'get-started-container'}>
                      <button className={"get-started-button"}>Get started</button>
                  </div>
              </div>
          </div>

      </div>
  )
}
export default Welcome;