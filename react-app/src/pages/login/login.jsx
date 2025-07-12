import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
	<div className="login">
		<div className="card">
			<div className="left">
				<h1>Welcome!</h1>
				<div className="welcome-message">
					<p>Welcome, Gens!</p>
					<p>Step into your community.</p>
					<p>Connect with those who matter,</p>
					<p>Share your journey,</p>
					<p>And belong.</p>
				</div>
				
				<span>Don't have an account? Register now!</span>
				<Link to="/register">
					<button>Register</button>
				</Link>
			</div>
			<div className="right">
				<h1>Login</h1>
				<form>
					<input type="text" placeholder="Username" required />
					<input type="password" placeholder="Password" required />
					<button>Login</button>
				</form>
			</div>
		</div>
	</div>
  );
};

export default Login;