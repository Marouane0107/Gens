import "./leftBar.scss";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const LeftBar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="leftBar">
			<div className="container">
				<div className="menu">
					<div className="user">
						<img src={currentUser.profilePic}
						alt="User Avatar" />
						<span>{currentUser.name}</span>
					</div>
					<div className="item">
						<PeopleRoundedIcon />
						<span>Friends</span>
					</div>
					<div className="item">
						<GroupsRoundedIcon />
						<span>Groups</span>
					</div>
					<div className="item">
						<StorefrontRoundedIcon />
						<span>Marketplace</span>
					</div>
					<div className="item">
						<PlayCircleRoundedIcon />
						<span>Watch</span>
					</div>
					<div className="item">
						<PhotoLibraryRoundedIcon />
						<span>Memories</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Your Shortcuts</span>
					<div className="item">
						<EventRoundedIcon />
						<span>Events</span>
					</div>
					<div className="item">
						<SportsEsportsRoundedIcon />
						<span>Gaming</span>
					</div>
					<div className="item">
						<CollectionsRoundedIcon />
						<span>Gallery</span>
					</div>
					<div className="item">
						<VideoLibraryRoundedIcon />
						<span>Videos</span>
					</div>
					<div className="item">
						<ChatRoundedIcon />
						<span>Messages</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Others</span>
					<div className="item">
						<VolunteerActivismRoundedIcon />
						<span>Fundraiser</span>
					</div>
					<div className="item">
						<SchoolRoundedIcon />
						<span>Tutorials</span>
					</div>
					<div className="item">
						<MenuBookRoundedIcon />
						<span>Courses</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftBar;