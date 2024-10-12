import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  /*
    /movie/:id url로 넘어온 파라미터는 useParams hooks을 이용하여 확인할 수 있다.
   */
  // useParams() result 👉🏻 object이므로 구조분해할당 가능
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();

    setMovie(json.data);
    setLoading(false);
    console.log(json.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>상세 영화를 기다리고 있어요...</h3>
      ) : (
        <div>
          <p>movieCount: {movie.movie_count}</p>
          <p>limit: {movie.limit}</p>
          <p>page_number: {movie.page_number}</p>
          <ul>movies : {movie.movies.map((item, index) => {})}</ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
