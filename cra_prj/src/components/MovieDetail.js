import PropTypes from "prop-types";

function MovieDetail({ mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres ? genres.map((genre, i) => <li key={i}>{genre}</li>) : null}
      </ul>

      <hr />
    </div>
  );
}

// prop types 설정
MovieDetail.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string[]
};

export default MovieDetail;
