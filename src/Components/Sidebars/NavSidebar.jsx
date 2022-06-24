import home from "../../icons/home.png";
import myFriends from "../../icons/user.png";
import users from "../../icons/users-alt.svg";
import settings from "../../icons/settings.svg";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


const mstp = (state) => {
    return {
        userId: state.auth.userId,
    }
}
const NavSidebarContainer = ({userId}) => {
    const icons = [
        {icon: home, id: 201, url: `/profile/${userId}`},
        {icon: myFriends, id: 202, url: `/friends`},
        {icon: users, id: 203, url: `/users`},
        {icon: settings, id: 204, url: `/settings`},
    ];
    const sidebarItems = icons.map((el, i) => {
        return <div className={'navbar-item'} key={el.id}>
            <NavLink activeClassName={'active'} to={el.url}>
                <img src={el.icon} alt={`icon-${el.id}`}/>
            </NavLink>
        </div>
    });

    return (
        <div className={'sidebar-nav'}>
            {sidebarItems}
        </div>
    );
};



export default connect(mstp, {})(NavSidebarContainer);



