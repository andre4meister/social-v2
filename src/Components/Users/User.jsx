import './Users.scss';


const User = ({u}) => {
    return (
        <div className={'user'}>
            <img
                src={(u.photos.small) ? u.photos.small : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
                alt={`user ${u.id}`} key={u.id}/>
            {(u.followed) ?
                <button>Unfollow</button> :
                <button>Follow</button>}
            <h2>{u.name}</h2>
            {u.status && <span className={'user-status'}>{u.status}</span>}
        </div>
    )
}

export default User;