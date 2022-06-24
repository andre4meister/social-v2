import User from "./User";
import './Users.scss';
const Users = (props) => {
    const usersArray = props.users.map( (u, i) => <User
        u={u}
        follow={props.follow}
        unfollow={props.unfollow}/> )
    return (
        <div className={'content-container users-container'}>
            {usersArray}
        </div>
    )
}
export default Users;