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
              <div className={'profile-photo-login'}>
                <img className={'profile-photo'} alt={'my-profile-photo'}
                     src={'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png'}/>
                  <div>
                      <p>{props.login}</p>
                  </div>
              </div>
          </header>
  )
}
export default Header;