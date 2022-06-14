import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const MoviesPage = (props) => {
	const [movies, setMovies] = useState(props.movies);

	const { data, error } = useSWR(
		"https://62a81480943591102b9996fd.mockapi.io/movies",
		fetcher
	);

	useEffect(() => {
		if (data) setMovies(data);

		return () => false;
	}, [data]);

	if (!data && !movies) return <p>Loading</p>;

	if (error) return <div>Somethin went wrong while fetching data</div>;

	return (
		<div className="movies">
			{movies.map((movie) => (
				<div key={movie.id}>
					<h3>Movie: {movie.name}</h3>
					<p>{movie.description}</p>
				</div>
			))}
		</div>
	);
};

export const getStaticProps = async () => {
	const res = await fetch(
		"https://62a81480943591102b9996fd.mockapi.io/movies"
	);
	const data = await res.json();

	return {
		props: {
			movies: data,
		},
	};
};

export default MoviesPage;
