// import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar.js";
// import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

//Added the below imports on 4/15
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewTopBar from "../../components/topbar/NewTopBar";
import NewFeed from "../../components/feed/NewFeed.js";


const Home = () => {

  //NEW COMMENT: 
  //Added useState, useEffect, NewTopBar, NewFeed
  //Then I passed the username down as props to all components. 
  //Wasnt sure exactly which components would need it. 4/15

  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

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
    axios.get('http://localhost:8000/api/posts/all/catchThemAll')
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <NewTopBar user={user} />
      {/* <Topbar user={user} /> */}
      <div className="homeContainer">
        <Sidebar user={user} />
        <NewFeed user={user} posts={posts} setPosts={setPosts} />
        {/* <Feed user={user} posts={posts} /> */}
        <Rightbar user={user} />
      </div>
    </>
  );
};
export default Home;
