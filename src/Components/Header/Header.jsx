import './Header.scss';

const Header = (props) => {

  return (
          <header className={'header-main'}>
              <div className={'logo-and-name'}>
                  <img className={'logo'} alt={'Friends-logo'}
                       src={'https://friendkit.cssninja.io/assets/img/logo/friendkit-bold.svg'}/>
                  <div>
                      <h2>Friends</h2>
                  </div>
              </div>
              <div className={'search'}>
                <input type={'text'} placeholder={'Search here...'} className={'search-input'}/>
              </div>
              <div className={'profile-login'}>
                  {props.login && <button className="btn btn-primary" onClick={() => props.logout()}>Logout</button>}
              </div>
          </header>
  )
}
export default Header;