import notFound from '../../images/pageNotFound.png';
import './PageNotFound.scss'
const PageNotFound = () => {
  return (
      <div className={'not-found-container'}>
          <h1>Page not found...</h1>
          <img src={notFound} alt={'Not Found'}/>
      </div>
  )
};

export default PageNotFound;