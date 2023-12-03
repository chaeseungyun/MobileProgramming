import styles from "./MovieSet.module.scss";
import Modal from "./Modal";
import { useState } from "react";

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MovieSet({ title, path, overview, modalpath, id, date, vote }) {
  const [isClicked, setIsClicked] = useState();
  return (
    <div className={styles.set}>
      <p className={styles.set__title}>{title}</p>
      <img src={IMG_URL + path} className={styles.set__img} />
      <div className={styles.set__cursorImg}>
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
