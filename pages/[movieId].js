import { getMovieById, generateStaticPaths } from "../helpers";

const MovieDetailsPage = ({ movie }) => {
	if (!movie) return <h1>Loading...</h1>;

	return <h1>{movie.name}</h1>;
};

export const getStaticProps = async ({ params }) => {
	const { movieId } = params;

	const movie = await getMovieById(movieId);

	return {
		props: {
			movie,
		},

		notFound: !movie ? true : false,
	};
};

export const getStaticPaths = async () => {
	const paths = await generateStaticPaths();

	return {
		paths,
		fallback: true,
	};
};

export default MovieDetailsPage;
