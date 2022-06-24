import {useNavigate} from "react-router-dom";


const FriendsSidebar = ({bestFriends}) => {
    const toFriendProfile = useNavigate();
    const friendsPhoto = bestFriends.map( f => {
        return <div className={'friends-item'} key={f.id}>
            <img src={ (f.photos.small) ? f.photos.small : 'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'}
                 alt={f.name + 'friend'} key={f.id} onClick={() => toFriendProfile(`/profile/${f.id}`)}/>
        </div>
    })
    return (
        <div className={'friends-bar'}>
            {friendsPhoto}
        </div>
    )
}
export default FriendsSidebar;