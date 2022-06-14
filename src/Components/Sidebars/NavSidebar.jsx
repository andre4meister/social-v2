import home from "../../icons/home.png";
import myFriends from "../../icons/user.png";


const icons = [home, myFriends];
const sidebarItems = icons.map((el, i) => {
    return <div className={'navbar-item'}>
        <a href={'www.google.com'}>
            <img src={el} key={i} alt={`icon-${i}`}/>
        </a>
    </div>
})

const NavSidebar = (props) => {
    return (
        <div className={'sidebar-nav'}>
            {sidebarItems}
        </div>
    )
}
export default NavSidebar;