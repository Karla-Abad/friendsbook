import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import axios from "axios";
import FormData from 'form-data';
import { useState } from "react";

const NewShare = (props) => {

    const { posts, setPosts, user } = props
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [file, setFile] = useState('')
    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("image", file);

        fetch('http://localhost:8000/api/posts/upload', { method: 'POST', body: data })
            .then(() => console.log('File Successfully uplodaed'))
            .catch(err => console.log(err))

        const newPost = {
            user: user._id,
            profilePicture: user.profilePicture,
            desc: text,
            img: file.name
        }

        axios.post('http://localhost:8000/api/posts', newPost, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                setPosts((prevPosts) => {
                    return [...prevPosts,, newPost]
                })

                setText('')
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={
                            user.profilePicture
                                ? user.profilePicture
                                : PF + "users/noAvatar.png"
                        }
                        alt=""
                    />
                    <input
                        className="shareInput"
                        placeholder={"What's on your mind " + user.username + "?"}
                        name='desc'
                        form="post"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <hr className="shareHr" />
                <form id="post" onSubmit={handleSubmit} className="shareBottom">
                    <div className="shareOptions">

                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo / Video</span>
                            <input
                                type="file"
                                style={{ display: "none" }}
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])} //[0] to just take one file at the time and not multiple files.-Karla
                            />
                        </label>

                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold" className="shareIcon" />
                            <span className="shareOptionText">Emojis</span>
                        </div>
                    </div>
                    <button type="submit" className="shareButton">
                        Share
                    </button>
                </form>
            </div>
        </div>
    )

}
export default NewShare