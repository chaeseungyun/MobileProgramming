import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NoInput from "./NoInput";
import NoResult from "./NoResult";
import styles from "./SearchPage.module.scss";
import MovieSet from "./MovieSet";

const search = (keyword) => {
  const result = axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=ko-KR`,
    {
      headers: `Authorization: Bearer ${import.meta.env.VITE_TOKEN}`,
    }
  );
  return result;
};

function SearchPage() {
  const location = useLocation();
  const input = location.state;
  const params = useParams();

  const [result, setResult] = useState([]);
  if (input == null) {
    return <NoInput />;
  }
  const searchResult = async () => {
    const result = await search(params.input);
    setResult(result.data.results);
    console.log(result.data.results);
  };

  const [heigth, setHeight] = useState();

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setHeight(window.scrollY);
      },
      [heigth]
    );
  });

  useEffect(() => {
    searchResult();
  }, [params]);

  return (
    <div>
      {result.length == 0 ? (
        <NoResult />
      ) : (
        <div className={heigth > 0 ? styles.container2 : styles.container}>
          <div className={styles.quote}>이것을 찾으셨나요??</div>
          <div className={styles.list}>
            {result.map((item) => (
              <MovieSet
                title={item.title}
                path={item.poster_path}
                overview={item.overview}
                modalpath={item.backdrop_path}
                id={item.id}
                key={item.id}
                vote={item.vote_average}
                date={item.release_date}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
