import { useContext } from "react";
import "./profile.scss";
import { AuthContext } from "../../components/context/authContext";
import { 
	LinkedIn, 
	GitHub, 
	Facebook, 
	Instagram, 
	Twitter, 
	Email,
	Language,
	LocationOn, 
	MoreVert
} from '@mui/icons-material';
import Posts from "../../components/posts/Posts";


const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	
	return (
		<div className="profile">
			<div className="images">
				<img 
					src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600" 
					alt="" 
					className="cover" 
					/>
				<img 
					src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" 
					alt="" 
					className="profilePic" 
				/>
			</div>
			<div className="profileContainer">
				<div className="uInfo">
					<div className="left">
						<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
							<LinkedIn fontSize="large"/>
						</a>
						<a href="https://github.com" target="_blank" rel="noopener noreferrer">
							<GitHub fontSize="large"/>
						</a>
						<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
							<Facebook fontSize="large"/>
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
							<Instagram fontSize="large"/>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
							<Twitter fontSize="large"/>
						</a>
					</div>
					<div className="center">
						<span>{currentUser.name}</span>
						<div className="info">
							<div className="item">
								<LocationOn fontSize="small" />
								<span>Morocco</span>
							</div>
							<div className="item">
								<Language fontSize="small" />
								<span>Gens</span>
							</div>
						</div>
						<button className="button">Follow</button>
					</div>
					<div className="right">
						<Email />
						<MoreVert />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
}

export default Profile;