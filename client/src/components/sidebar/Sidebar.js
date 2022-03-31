import "./sidebar.css";
import { RssFeed, ChatBubbleOutline, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons'
import CloseFriends from "../closeFriends/CloseFriends";
import { Link } from 'react-router-dom'
import { Users } from '../../dummyData'
import { useState } from "react";

const Sidebar = (props) => {

  const [isShowing, setIsShowing] = useState(false)
  const [btnText, setBtnText] = useState('Show More')

  const moreFriendsHandler = () => {
    setIsShowing(!isShowing)
    if (btnText === 'Show More') {
      setBtnText('Show Less')
    }
    if (btnText === 'Show Less') {
      setBtnText('Show More')
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to='/' style={{ textDecoration: "none" }}>
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">

            <School className="sidebarIcon" />

            <span className="sidebarListItemText">School</span>
          </li>
        </ul>
        <button className="sidebarButton" onClick={moreFriendsHandler}>{btnText}</button>
        {
          isShowing
            ? <>
              <hr className="sidebarHr" />
              <ul className="sidebarFriendList">

                {
                  Users.map((user) => (
                    < CloseFriends key={user.id} user={user} />
                  ))
                }
              </ul>
            </>
            :
            <></>
        }

      </div>
    </div >
  );
};
export default Sidebar;
