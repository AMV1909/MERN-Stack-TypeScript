import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					My Youtube Videos
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/newVideo">
								Create New Video
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
