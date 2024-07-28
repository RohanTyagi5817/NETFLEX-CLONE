import { movies } from "../../../public/movies";

const Movies = () => {
  return <div>{JSON.stringify(movies[0])}</div>;
};

export default Movies;
