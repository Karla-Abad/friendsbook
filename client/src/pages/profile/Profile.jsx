import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img className="profileCoverImg" src={`${PF}posts/post4.jpg`} alt="" />
          <img className="profileUserImg" src={`${PF}users/7.jpg`} alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Karla Abad</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      
      </div>
     
    </div>
    </>
  )
}
