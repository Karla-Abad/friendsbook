import "./online.css";

const Online = (props) => {
    const { user } = props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    //^^link to our path to our temp photos/stock photos

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img
                    src={PF + user.profilePicture}
                    alt=""
                    className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}
export default Online
