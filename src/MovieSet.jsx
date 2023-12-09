import styles from "./MovieSet.module.scss";
import Modal from "./Modal";
import { useState } from "react";
import Star from "./assets/star.svg?react";
import EmptyStar from "./assets/emptyStar.svg?react";

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MovieSet({ title, path, overview, modalpath, id, date, vote, genre }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(!!localStorage.getItem(`${id}`));
  const toggleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      localStorage.removeItem(`${id}`);
    } else {
      const favorite = {
        title: title,
        poster_path: path,
        overview: overview,
        backdrop_path: modalpath,
        id: id,
        release_date: date,
        vote_average: vote,
        genre_ids: genre,
      };
      localStorage.setItem(`${id}`, JSON.stringify(favorite));
      setIsFavorite(true);
    }
  };
  return (
    <div className={styles.set}>
      <p className={styles.set__title}>{title}</p>
      <img src={IMG_URL + path} className={styles.set__img} />
      <div className={styles.set__mobileFavorite} onClick={toggleFavorite}>
        {isFavorite ? <Star /> : <EmptyStar />}
      </div>
      <div className={styles.set__cursorImg}>
        <div className={styles.set__favorite} onClick={toggleFavorite}>
          {isFavorite ? <Star /> : <EmptyStar />}
        </div>
        <img
          src={IMG_URL + modalpath}
          onClick={() => setIsClicked(true)}
          className={styles.set__otherImg}
        />
        <p className={styles.explain}>평점: {vote}</p>
        <p className={styles.explain}>개봉일: {date}</p>
      </div>
      {isClicked && (
        <Modal
          overview={overview}
          modalpath={modalpath}
          setIsClicked={setIsClicked}
          id={id}
        />
      )}
    </div>
  );
}

export default MovieSet;
