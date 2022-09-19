import '../Welcome.scss'
import btLogo from '../../../images/bootstrap-icon-css.png'
import reactLogo from '../../../images/react.png'
import reduxLogo from '../../../images/redux-logo.png'
import cssLogo from '../../../images/css.png'
import htmlLogo from '../../../images/html.png'
import jsLogo from '../../../images/js-logo.png'


const Tech = ({logo,index}) => {
    return (
        <div className={'tech-logo'} >
            <img src={logo} key={index} alt={index}/>
        </div>
    )
}

const technologies = [btLogo, reactLogo, reduxLogo, cssLogo, htmlLogo, jsLogo];
const images = technologies.map( (logo,index) => {
    return <Tech className={'tech-logo'} index={index} logo={logo} key={index}/>
})


const Technology = () => {
  return (
      <div className={'techs'}>
        {images}
      </div>
  )
}
export default Technology;