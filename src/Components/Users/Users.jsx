import User from "./User";
import './Users.scss';
const Users = (props) => {
    const usersArray = props.users.map( (u, i) => <User u={u}/> )
    return (
        <div className={'content-container'}>
            {usersArray}
        </div>
    )
}
export default Users;