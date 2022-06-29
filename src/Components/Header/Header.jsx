import './Header.scss';
import BlueButton from "../common/BlueButton";

const Header = ({login,logout}) => {

  return (
          <header className={'header-main'}>

                  <img className={'logo'} alt={'Friends-logo'}
                       src={'https://friendkit.cssninja.io/assets/img/logo/friendkit-bold.svg'}/>

                <input type={'text'} placeholder={'Search here...'} className={'search-input'}/>


                  {login && <BlueButton text={'Logout'} method={logout}/>}
          </header>
  )
}
export default Header;