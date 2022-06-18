import './Paginator.scss'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
      <ul className={'pagination justify-content-center'}>
          {pages.map( (p) => {
              if((p < props.currentPage && p > props.currentPage-5)|| (p > props.currentPage && p < props.currentPage+5 )
                  || p === pages.length - 1 || p === props.currentPage || p === 1) {
                  return <li className={ (p === props.currentPage) ? 'page-item active' : 'page-item'}
                  onClick={() => props.onPageChanged(p)}>
                      {p}
                  </li>
              }
          })}
      </ul>
  )
}
export default Paginator;