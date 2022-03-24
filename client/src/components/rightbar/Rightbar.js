import "./rightbar.css";

const Rightbar = (props) => {
  const { profile } = props;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Jake Muncy</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/5.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Erica Meechum</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/2.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dillon French</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/3.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/4.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Idris Elba</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/6.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Wan Chang</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/7.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Claire Thompson</span>
          </li>
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
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Miami</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
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
            <img src="assets/users/3.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/2.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/4.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/5.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/6.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/1.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/2.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/users/3.jpg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
};
export default Rightbar;
