import MovieSet from "./MovieSet";
import styles from "./FavoriteList.module.scss";
import { genre } from "./genre.js";

function findMostFrequent(arr) {
  const frequencyMap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let mostFrequentValue;
  let maxFrequency = 0;

  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxFrequency) {
      maxFrequency = frequencyMap[key];
      mostFrequentValue = key;
    }
  }

  return mostFrequentValue;
}

const getFavoriteList = () => {
  const list = [];
  const genreList = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    if (item != null) {
      let obj = JSON.parse(item);
      list.push(obj);
      obj.genre_ids.map((item) => genreList.push(item));
    }
  }

  return { list, genreList };
};

export default function FavoriteList() {
  const { list, genreList } = getFavoriteList();
  const mostFrequent = findMostFrequent(genreList);
  const filteredGenre = genre.filter((item) => item.id == mostFrequent);

  return (
    <div className={list.length > 0 ? styles.container : styles.container2}>
      <h1>
        {filteredGenre.length > 0
          ? "내가 좋아하는 영화"
          : "좋아요 목록에 추가된 영화가 없어요"}
      </h1>
      <div>
        {filteredGenre.length > 0 &&
          `${filteredGenre[0].name}장르를 가장 좋아하시는군요!`}
      </div>
      <div className={styles.list}>
        {list.map((item) => (
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
  );
}
