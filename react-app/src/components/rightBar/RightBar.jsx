import "./rightBar.scss";

const RightBar = () => {
	return (
		<div className="rightBar">
			<div className="container">
				<div className="item">
					<span>Suggestions For You</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<span>Marouane zal</span>
						</div>
						<div className="buttons">
							<button>Follow</button>
							<button>Dismiss</button>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<span>Jrboo3 1</span>
						</div>
						<div className="buttons">
							<button>Follow</button>
							<button>Dismiss</button>
						</div>
					</div>
				</div>
				<div className="item">
					<span>Latest Activities</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<p>
								<span>Marouane zal</span> liked your post
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<p>
								<span>Marouane zal</span> shared your post
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<p>
								<span>Jrboo3 1</span> commented on your photo
							</p>
						</div>
						<span>5 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<p>
								<span>Jrboo3 1</span> started following you
							</p>
						</div>
						<span>10 min ago</span>
					</div>
				</div>
				<div className="item">
					<span>Online Friends</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<div className="online"></div>
							<span>Marouane zal</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<div className="online"></div>
							<span>Jrboo3 1</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<div className="online"></div>
							<span>Dba3</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
							<div className="online"></div>
							<span>skartah</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightBar;