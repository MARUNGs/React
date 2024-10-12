import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

/*
  ☝🏻 route는 기본적으로 App Component 전체를 관리하는 역할
  ☝🏻 Movie Component에 있던 소스코드를 Home Component로 옮겼음.
 */
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  // useEffect 안에서 실행했던 소스코드는 async-await로 묶인 함수로 처리를 변경하였음
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>잠시만 기다려 주세요...</h1>
      ) : (
        // 영화 목록 생성
        movies.map((movie) => (
          <MovieDetail
            key={movie.id}
            mediumCoverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
