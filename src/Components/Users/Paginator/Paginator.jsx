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
              if(p < 10 || p === pages.length - 1) {
                  return <li className={ (p === props.currentPage) ? 'page-item active' : 'page-item'}>
                      {p}
                  </li>
              }
          })}
      </ul>
  )
}
export default Paginator;