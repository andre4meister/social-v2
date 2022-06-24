import './Paginator.scss';
import left from '../../../icons/angle-left.png';
import right from '../../../icons/angle-right.png';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onArrowClick = (back, currentPage) =>{
        if (back) {
            props.onPageChanged(currentPage-1)
        } else {
            props.onPageChanged(currentPage+1)
        }
    }
    return (
      <ul className={'pagination justify-content-center'}>
          <li>
              <img className={(props.currentPage === 1 || props.currentPage === pages.length) ?
                  'disabled-arrow' :
                  'active-arrow'}
                  src={left} onClick={() => onArrowClick(true, props.currentPage)}/>
          </li>
          {pages.map( (p) => {
              if((p < props.currentPage && p > props.currentPage-5)|| (p > props.currentPage && p < props.currentPage+5 )
                  || p === pages.length || p === props.currentPage || p === 1) {
                  return <li className={ (p === props.currentPage) ? 'page-item active' : 'page-item'}
                  onClick={() => props.onPageChanged(p)}>
                      {p}
                  </li>
              }
          })}
          <li>
              <img src={right} onClick={() => onArrowClick(false, props.currentPage)}/>
          </li>
      </ul>
  )
}
export default Paginator;