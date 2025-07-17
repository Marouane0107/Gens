import "./post.scss";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Comments from "../comments/Comments";
import { useState } from "react";


const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);
    // Temporary placeholder for liked state it will be replaced with actual logic later
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes || 12);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.img} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}` } style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">{post.date}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item" onClick={handleLike}>
                        {/* Here added hover effect for like and comment icons i well change it later */}
                        {liked ? <FavoriteOutlinedIcon style={{color: "#e74c3c"}} /> : <FavoriteBorderOutlinedIcon />}
                        {likeCount} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <ChatBubbleOutlineOutlinedIcon />
                        15 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                { commentOpen && <Comments />}
            </div>
        </div>
    );
}

export default Post;