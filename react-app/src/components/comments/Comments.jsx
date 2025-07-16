import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../context/authContext";

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    
    const comments = [
        { 
            id: 1, 
            desc: "This is a great post! I really enjoyed reading it.",
            name: "marouane",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2, 
            desc: "I really enjoyed reading this. Thanks for sharing!",
            name: "john",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3, 
            desc: "Amazing content! Keep up the good work 👍",
            name: "jane",
            userId: 3,
            profilePic: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment..." />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePic} alt="" />
                    <div className="content">
                        <div className="user">
                            <span className="name">{comment.name}</span>
                            <span className="date">1 hour ago</span>
                        </div>
                        <div className="info">
                            <p>{comment.desc}</p>
                        </div>
                        <div className="actions">
                            <button>Like</button>
                            <button>Reply</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;