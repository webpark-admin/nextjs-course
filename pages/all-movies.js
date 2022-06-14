import { useRouter } from "next/router";
import Link from "next/link";
import { getAllMovies } from "../helpers";

const AllMoviesPage = ({ movies }) => {
	const { replace } = useRouter();

	if (!movies) return <p>Loading...</p>;

	return (
		<div>
			<h1>All Movies Page</h1>

			<div className="movies">
				{movies.map((movie) => (
					<div key={`movie-${movie.id}`} className="movie">
						<h3>{movie.name}</h3>
						<p>{movie.description}</p>

						<Link href={`/${movie.id}`}>
							<a>See details</a>
						</Link>

						<hr />
					</div>
				))}
			</div>

			<br />
			<br />

			<button onClick={() => replace("/")}>Go back to home page</button>
		</div>
	);
};

export const getStaticProps = async () => {
	const movies = await getAllMovies();

	return {
		props: {
			movies,
		},
		revalidate: 10,
	};
};

export default AllMoviesPage;
