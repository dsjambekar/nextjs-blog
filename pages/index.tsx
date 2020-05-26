import PostList from "../components/post-list";

export default function Home() {
	return (
		<div className="container">
			<div>
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">My name is Dhanashree. I am a software developer from India.</p>

				<p>I have recently started to learn React. This blog is all about that and a little more.</p>

				<hr className="my-4"></hr>
			</div>
			<PostList></PostList>
			<style jsx>{`
			.jumbotron{
				background: white;
			}
			.btn{
				margin:1px;
			}
      `}</style>
		</div>
	)
}
