import './Paginator.scss';
import left from '../../../icons/angle-left.png';
import right from '../../../icons/angle-right.png';
import Preloader from "../../common/Preloader";

const Paginator = ({totalCount, count, onPageChanged, currentPage, isFetchingNewUsers}) => {
    let pagesCount = Math.ceil(totalCount / count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onArrowClick = (back, currentPage) =>{
        if (back) {
            onPageChanged(currentPage-1)
        } else {
            onPageChanged(currentPage+1)
        }
    }

    return (
        <>
            {isFetchingNewUsers || !totalCount
                ?
                <Preloader/>
                :
                <ul className={'pagination justify-content-center'}>
                    <li>
                        <img className={(currentPage === 1 || currentPage === pages.length) ?
                            'disabled-arrow' :
                            'active-arrow'}
                             alt='Previous'
                             src={left} onClick={() => onArrowClick(true, currentPage)}/>
                    </li>
                    {pages.map( (p) => {
                        if((p < currentPage && p > currentPage-5)|| (p > currentPage && p < currentPage+5 )
                            || p === pages.length || p === currentPage || p === 1) {
                            return <li className={ (p === currentPage) ? 'page-item active' : 'page-item'}
                                       key={p}
                                       onClick={() => onPageChanged(p)}>
                                {p}
                            </li>
                        }
                    })}
                    <li>
                        <img src={right} alt='Next' onClick={() => onArrowClick(false, currentPage)}/>
                    </li>
                </ul>
            }
        </>
  )
}
export default Paginator;