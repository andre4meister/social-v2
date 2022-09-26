import User from "./User";
import './Users.scss';
const Users = ({users,follow,unfollow}) => {
    const usersArray = users.map( (u, i) => <User
        key={u.id + i + Math.floor(Math.random() * 10000) - Math.floor(Math.random() * 1000)}
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