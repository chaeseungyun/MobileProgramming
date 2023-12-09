import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MovieList.module.scss";
import MovieSet from "./MovieSet";

const getMovieList = (count) =>
  axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=${count}&sort_by=popularity.desc&append_to_response=videos`,
    {
      headers: `Authorization: Bearer ${import.meta.env.VITE_TOKEN}`,
    }
  );

function MovieList() {
  const [count, setCount] = useState(1);
  const [state, setState] = useState([]);
  const getMovie = async () => {
    const result = await getMovieList(count);
    console.log(result.data);
    setState((prev) => [...prev, ...result.data.results]);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (state.length == 0) return <div>로딩중..</div>;

  return (
    <div className={styles.layout}>
      <div className={styles.title}>추천 드라마</div>
      <div className={styles.topVideo}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VMZBhtnCk4I?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className={styles.topInfo}>
          스위트홈2
          <br />
          넷플릭스 절찬 상영중
        </div>
      </div>
      <div className={styles.title}>인기 영화</div>
      <div className={styles.container}>
        {state.map((item) => (
          <MovieSet
            title={item.title}
            path={item.poster_path}
            overview={item.overview}
            modalpath={item.backdrop_path}
            id={item.id}
            key={item.id}
            vote={item.vote_average}
            date={item.release_date}
            genre={item.genre_ids}
          />
        ))}
      </div>
      <div onClick={getMovie} className={styles.middle}>
        더보기 (more)
      </div>
    </div>
  );
}

export default MovieList;
