import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const NewTopBar = (props) => {

    const navigate = useNavigate();
    const username = useParams().username;

    const { user } = props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const logout = (e) => {
        axios.post("http://localhost:8000/api/users/logout", {}, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span className="logo">Friendsbook</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friends, posts or videos."
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={
                            user.profilePicture
                                ? user.profilePicture
                                : PF + "users/noAvatar.png"
                        }
                        alt=""
                        className="topbarImg"
                    />
                </Link>
                <button className="logout" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    )
}
export default NewTopBar