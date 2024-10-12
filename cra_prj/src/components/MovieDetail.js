/*
  ☝🏻  Link: 브라우저 새로고침없이도 유저를 다른페이지로 이동시켜주는 컴포넌트
*/
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({ id, mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
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
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string[]
};

export default MovieDetail;
