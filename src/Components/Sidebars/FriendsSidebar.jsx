const friends = [
    {id: 9991, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
    {id: 9992, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
    {id: 9993, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
    {id: 9994, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
    {id: 9995, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
    {id: 9996, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
    {id: 9997, url:'https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq'},
];
const friendsPhoto = friends.map((photo, i) => {
    return <div className={'friends-item'}>
        <img src={photo.url} alt={photo.id + 'friend'} key={photo.id}/>
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