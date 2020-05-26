import PostExcerpt from "./post-excerpt";

export default function PostList() {
	const elements = ['one', 'two', 'three'];
	return (
		<div>
			{elements.map((value, index) => {
				return <PostExcerpt key={index}></PostExcerpt>
			})}
		</div>
	)
}