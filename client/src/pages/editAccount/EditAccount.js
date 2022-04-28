import "./editAccount.css";
import NewTopBar from "../../components/topbar/NewTopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { PermMedia } from "@material-ui/icons";
import FormData from 'form-data';

const EditAccount = ()=> {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate = useNavigate()
    const id = useParams().id;
    const [profilePicture, setProfilePicture] = useState('')
    const [coverPicture, setCoverPicture] = useState('')

    // const username = useParams().username;
    const [user, setUser] = useState({});
    const [loadedUser, setLoadedUser] = useState(false);
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then((res) => {
                console.log(res.data)
                setUser(res.data);
                setLoadedUser(!loadedUser);
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = (e)=>{
        console.log("name: "+ e.target.name);
        console.log("value: "+ e.target.value);
        let tempUser = {...user};
        tempUser[e.target.name]= e.target.value
        setUser(tempUser)
    }

    const updateAccount = (e)=> {
        e.preventDefault();
        const data = new FormData()
        data.append("image", profilePicture);
        
        axios
        .put("http://localhost:8000/api/users/"+id, {
            city: user.city,
            from: user.from,
            relationship:user.relationship,
            profilePicture: profilePicture.name
        })
        .then((res)=> {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            
          })

    }

    return (
        <div>
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
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                            
                        </div>
                        <div className="accountDetails">
                            {loadedUser && (
                                <div>
                                    <h2>Account Details</h2>
                                    <form onSubmit={(e)=>updateAccount(e)}>
                                        <div>
                                            <label className="updateDesc">Current City: </label>
                                            <input className="updateInput" type="text" name="city" value={user.city} onChange={(e)=> handleInputChange(e)}/>
                                        </div>
                                        <div>
                                            <label className="updateDesc">Hometown:    </label>
                                            <input className="updateInput" type="text" name="from" value={user.from} onChange={(e)=> handleInputChange(e)}/>
                                        </div>
                                        <div>
                                            <label className="updateDesc">Relationship status: </label>
                                            <select className="updateInput" name="relationship" value={user.relationship} onChange={(e)=> handleInputChange(e)}>
                                                <option>Select one</option>
                                                <option>Single</option>
                                                <option>Married</option>
                                                <option>It's complicated</option>
                                            </select>
                                        </div>
                                        <div>
                                        <label htmlFor="file" className="shareOption">
                                            <PermMedia htmlColor="tomato" className="shareIcon" />
                                            <span className="shareOptionText">Profile Picture</span>
                                            <input
                                                type="file"
                                                style={{ display: "none" }}
                                                id="file"
                                                accept=".png,.jpeg,.jpg"
                                                name="profilePicture"  
                                                onChange={(e) => setProfilePicture(e.target.files[0])} //[0] to just take one file at the time and not multiple files.-Karla
                                            />
                                        </label>
                                        </div>
                                        <div>
                                        <label htmlFor="file" className="shareOption">
                                            <PermMedia htmlColor="green" className="shareIcon" />
                                            <span className="shareOptionText">Cover Picture</span>
                                            <input
                                                type="file"
                                                style={{ display: "none" }}
                                                id="file"
                                                accept=".png,.jpeg,.jpg"
                                                name="coverPicture"
                                                onChange={(e) => setCoverPicture(e.target.files[0])} //[0] to just take one file at the time and not multiple files.-Karla
                                            />
                                        </label>
                                        </div>
                                        <div>
                                            <button className="updateButton" type="submit">Update Account</button>
                                        </div>
                                    </form>   
                                </div>
                                
                            )}   
                            
                        </div>  
                    </div>
                    </div>
                    
                </div>
                 
        </div>
    )
}

export default EditAccount;