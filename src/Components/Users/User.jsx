import './Users.scss';
import {NavLink} from "react-router-dom";


const User = ({u, follow, unfollow}) => {
    return (
        <div className={'user'}>
            <NavLink to={`/profile/${u.id}`}>
                <img
                    src={(u.photos.small) ? u.photos.small : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
                    alt={`user ${u.id}`} key={u.id}/>
            </NavLink>
            {(u.followed) ?
                <button onClick={ ()=> unfollow(u.id)}>Unfollow</button> :
                <button onClick={ ()=> follow(u.id)}>Follow</button>}
            <h2>{u.name}</h2>
            {u.status && <span className={'user-status'}>{u.status}</span>}
        </div>
    )
}

export default User;