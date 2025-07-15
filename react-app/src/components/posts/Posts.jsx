import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
	// Temporary placeholder for post component
	// This can be replaced with actual post logic later
	// For now, it just returns a simple image and text
	const posts = [
		{ 
			id: 1, 
			name: "Marouane", 
			userId: 1,
			profilePic: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600",
			date: "1 hour ago",
			likes: 120,
			comments: 30,
			shares: 10,
			views: 500,
			tags: ["nature", "adventure"],
			location: "Morocco",
			content: "This is a post", 
			img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600" ,
			desc: "A beautiful scenery of nature"
		},
		{ 
			id: 2, 
			name: "Alice",
			userId: 2,
			profilePic: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
			date: "2 hours ago",
			likes: 200,
			comments: 50,
			shares: 20,
			views: 1000,
			tags: ["coffee", "relax"],
			location: "Paris",
			content: "Another post", 
			img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
			desc: "Enjoying a cup of coffee"
		},
	];

	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
}

export default Posts;