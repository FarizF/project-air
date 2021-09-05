let loggedIn: boolean;

const homeButtonList: JSX.Element =
	<ul>
		<li className="nav-button"></li>
		<li className="nav-button"></li>
		<li className="nav-button"></li>
		<li className="nav-button user" id="login-register">Log On</li>
	</ul>;

const inGameButtonList: JSX.Element =
	<ul>
		<li className="nav-button"></li>
		<li className="nav-button"></li>
		<li className="nav-button"></li>
		<li className="nav-button user" id="login-off-profile">Log Off</li>
	</ul>

export default function Navbar() {
	return (
		<header>
			<nav id="navbar">
				{loggedIn ? inGameButtonList : homeButtonList}
			</nav>
		</header>
	)
}