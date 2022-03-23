import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      {/* <Sidebar/> */}
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img className="profileCoverImg" src="assets/posts/post4.jpg" alt="" />
          <img className="profileUserImg" src="assets/users/7.jpg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Karla Abad</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          {/* <Feed/>
          <Rightbar profile/> */}
        </div>
      
      </div>
     
    </div>
    </>
  )
}
