import Link from 'next/link'

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<Link href="./">
				<a className="navbar-brand abs" >Dhanahsree Jambekar</a>
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="collapsingNavbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link href="./about">
							<a className="nav-link" data-target="#myModal" data-toggle="modal">About</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="./personal">
							<a className="nav-link" href="./personal" data-target="#myModal" data-toggle="modal">Personal</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="./technical">
							<a className="nav-link" href="./technical" data-target="#myModal" data-toggle="modal">Technical</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}