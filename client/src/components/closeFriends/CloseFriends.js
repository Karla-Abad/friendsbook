import './closeFriends.css'

const CloseFriends = (props) => {

    const { user } = props
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    //^^link to our path to our temp photos/stock photos (PF = public folder)


    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="user" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
export default CloseFriends