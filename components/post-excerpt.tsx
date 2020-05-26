export default function PostExcerpt() {
	return (
		<div>
			<h3><a href="./post">PRD - My Blog</a></h3>
			<small>21st May 2020</small>
			<span className="badge badge-secondary">Technical</span>
			<p>
				I want to have my own blog, build by myself in React.
			The blog will be live at - www.developerwithabindi.in<br />
			In this first phase, the blog should just read the contents
			from the database and display it.<br />
			</p>
			<style jsx>{`
			a {
				color: black;
				text-decoration: none;
				background-color: transparent;
			}
			a:hover {
				color: black;
				text-decoration: underline;
			}
			.badge{
				margin-left:10px;
			}
      `}</style>
		</div>
	);
}