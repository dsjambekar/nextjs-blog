import NavBar from "./nav-bar";

export default function Layout(props) {
	return (
		<div className="container">
			<NavBar></NavBar>
			{props.children}
		</div>
	);
}