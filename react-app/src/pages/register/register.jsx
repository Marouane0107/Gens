import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
	<div className="register">
		<div className="card">
			<div className="left">
				<h1>Gens</h1>
				<p>
					Please enter your credentials to log in.
				</p>
				<span>Don't have an account? Register now!</span>
                <Link to="/login">
				    <button>Login</button>
                </Link>
			</div>
			<div className="right">
				<h1>Register</h1>
				<form>
					<input type="text" placeholder="Username" required />
					<input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <input type="text" placeholder="Full Name" required />

					<button>Register</button>
				</form>
			</div>
		</div>
	</div>
  );
};

export default Register;