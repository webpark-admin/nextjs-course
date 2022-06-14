import Link from "next/link";

const HomePage = () => (
	<div>
		<nav>
			<Link href="/all-movies">
				<a>Browse All Movies</a>
			</Link>
		</nav>
	</div>
);

export default HomePage;
