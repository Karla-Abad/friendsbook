import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Profile(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //^^link to our path to our temp photos/stock photos

  const [user, setUser] = useState({});
  const params = useParams();
  //alternatively, the above line could be written as:
  //const username = useParams().username

  //--- NEED AN API CALL TO FIND USER BY USERNAME ----
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/users/${post.userId}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [post.userId]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
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
              <h4 className="profileInfoName">{params.username}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            {/* Note that currently the feed user photos are not loading. this will be updated once pulling data from server-side. -jackson  */}
            <Feed username={params.username} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
