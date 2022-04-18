import "./profile.css";
// import Feed from "../../components/feed/Feed";
// import Topbar from "../../components/topbar/Topbar";
import NewTopBar from "../../components/topbar/NewTopBar";
import NewFeed from "../../components/feed/NewFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";


const NewProfile = (props) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate = useNavigate()

    // const { username } = props;
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const username = useParams().username


    useEffect(() => {
        axios.get('http://localhost:8000/api/users/lock', { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
                navigate('/')
            })
    }, [navigate])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/profile/${username}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                setPosts(res.data);
            })
            .catch(err => console.log(err))
    }, [username])


    return (
        <>
            <NewTopBar user={user} />
            <div className="profile">
                <Sidebar user={user} />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={user.coverPicture || `${PF}users/noCover.png`}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user.profilePicture || `${PF}users/noAvatar.png`}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{username}</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                        
                    </div>
                    <div className="profileRightBottom">
                        {/* Note that currently the feed user photos are not loading. this will be updated once pulling data from server-side. -jackson  */}
                        {/* <Feed username={username} /> */}
                        <NewFeed user={user} posts={posts} setPosts={setPosts} profile='true' />
                        <Rightbar user={user} profile = "true" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default NewProfile