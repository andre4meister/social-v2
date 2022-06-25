import './Header.scss';

const Header = ({login,logout}) => {

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
                  {login && <button className="btn btn-primary" onClick={() => logout()}>Logout</button>}
              </div>
          </header>
  )
}
export default Header;