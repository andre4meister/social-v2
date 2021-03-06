import User from "./User";
import './Users.scss';
const Users = ({users,follow,unfollow}) => {
    const usersArray = users.map( (u, i) => <User
        u={u}
        follow={follow}
        unfollow={unfollow}/> )
    return (
        <div className={'content-container users-container'}>
            {usersArray}
        </div>
    )
}
export default Users;