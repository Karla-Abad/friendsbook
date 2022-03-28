import "./rightbar.css";

//delete this import once we have real data
import { Users } from '../../dummyData'
import Online from "../online/Online";

const Rightbar = ({ profile }) => {


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //^^link to our path to our temp photos/stock photos (PF = public folder)
  //Updated HomeRightBar to display data from dummyData.js Delete imports once we have our server/db up and running: -Jackson 

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="gift" />
          <span className="birthdayText">
            <b>Jake Muncy</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={`${PF}ad.jpg`} alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {/* Mapping through our list of users to dynamically display the users online. We created an Online component that holds the data/formatting for that user: -Jackson  */}
          {
            Users.map((user) => (
              <Online key={user.id} user={user} />
            ))
          }

        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Current City:</span>
            <span className="rightbarInfoValue">Miami</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Hometown:</span>
            <span className="rightbarInfoValue">Guayaquil</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship status:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}users/3.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John1 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/2.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John2 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/4.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John3 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/5.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John4 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/6.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John5 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/1.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John6 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/2.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John7 Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}users/3.jpg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">John8 Doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};
export default Rightbar;
