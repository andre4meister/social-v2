const friends = [
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
    'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq',
];
const friendsPhoto = friends.map((photo, i) => {
    return <div className={'friends-item'}>
        <img src={photo} alt={i + 'friend'} key={10 * i}/>
    </div>
})

const FriendsSidebar = (props) => {
    return (
        <div className={'friends-bar'}>
            {friendsPhoto}
        </div>
    )
}
export default FriendsSidebar;