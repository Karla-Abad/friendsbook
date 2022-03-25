import './closeFriends.css'

const CloseFriends = (props) => {

    const { user } = props

    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="user" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
export default CloseFriends