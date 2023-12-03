import MovieList from "./MovieList";
import styles from "./Recommend.module.scss";
import { useState, useEffect } from "react";

function Recommend() {
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
  return (
    <div className={heigth > 10 ? styles.container2 : styles.container}>
      <MovieList />
    </div>
  );
}

export default Recommend;
