import "./leftBar.scss";
import friendsIcon from "../../images/friends.svg";
import groupsIcon from "../../images/groups.svg";
import marketplaceIcon from "../../images/marketplace.svg";
import watchIcon from "../../images/watch.svg";
import memoriesIcon from "../../images/memories.svg";
import eventsIcon from "../../images/events.svg";
import gamingIcon from "../../images/gaming.svg";
import galleryIcon from "../../images/gallery.svg";
import videosIcon from "../../images/videos.svg";
import messagesIcon from "../../images/messages.svg";
import fundraiserIcon from "../../images/fundraiser.svg";
import tutorialsIcon from "../../images/tutorials.svg";
import coursesIcon from "../../images/courses.svg";


const LeftBar = () => {
	return (
		<div className="leftBar">
			<div className="container">
				<div className="menu">
					<div className="user">
						<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
						<span>Mar1</span>
					</div>
					<div className="item">
						<img src={friendsIcon} alt="Friends" />
						<span>Friends</span>
					</div>
					<div className="item">
						<img src={groupsIcon} alt="Groups" />
						<span>Groups</span>
					</div>
					<div className="item">
						<img src={marketplaceIcon} alt="Marketplace" />
						<span>Marketplace</span>
					</div>
					<div className="item">
						<img src={watchIcon} alt="Watch" />
						<span>Watch</span>
					</div>
					<div className="item">
						<img src={memoriesIcon} alt="Memories" />
						<span>Memories</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Your Shortcuts</span>
					<div className="item">
						<img src={eventsIcon} alt="Events" />
						<span>Events</span>
					</div>
					<div className="item">
						<img src={gamingIcon} alt="Gaming" />
						<span>Gaming</span>
					</div>
					<div className="item">
						<img src={galleryIcon} alt="Gallery" />
						<span>Gallery</span>
					</div>
					<div className="item">
						<img src={videosIcon} alt="Videos" />
						<span>Videos</span>
					</div>
					<div className="item">
						<img src={messagesIcon} alt="Messages" />
						<span>Messages</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Others</span>
					<div className="item">
						<img src={fundraiserIcon} alt="Fundraiser" />
						<span>Fundraiser</span>
					</div>
					<div className="item">
						<img src={tutorialsIcon} alt="Tutorials" />
						<span>Tutorials</span>
					</div>
					<div className="item">
						<img src={coursesIcon} alt="Courses" />
						<span>Courses</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftBar;