import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../context/authContext";

const Stories = () => {

	const {currentUser} = useContext(AuthContext);

	// Temporary placeholder for stories component
	// This can be replaced with actual stories logic later
	// For now, it just returns a simple div with text
	const Stories = [
		{ id: 1, title: "My Adventure", image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600" },
		{ id: 2, title: "Coffee Time", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" },
		{ id: 3, title: "Nature Walk", image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600" },
		{ id: 4, title: "City Life", image: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600" },
	];

	return (
		<div className="stories">
			<div className="story">
					<img src={currentUser.profilePic} alt="" />
					<span>{currentUser.name}</span>
					<button>+</button>
			</div>
			{Stories.map((story) => (
				<div className="story" key={story.id}>
					<img src={story.image} alt="" />
					<span>{story.title}</span>
				</div>
			))}
			
		</div>
	);
}

export default Stories;