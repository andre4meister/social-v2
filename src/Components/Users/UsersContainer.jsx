import Users from "./Users";

const UsersContainer = (props) => {
    return (
        <div className={'container-sm'}>
            <Users {...props}/>
        </div>
    )
}
export default UsersContainer;