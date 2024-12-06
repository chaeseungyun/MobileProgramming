import MovieList from "./MovieList";
import styles from "./Recommend.module.scss";
import { useState, useEffect } from "react";
import ArrowUp from "./assets/Arrow-up.svg?react";

function Recommend() {
  const [heigth, setHeight] = useState();

  const scrollUp = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setHeight(window.scrollY);
      },
    );

    return window.removeEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
  }, [heigth]);
  return (
    <div className={heigth > 10 ? styles.container2 : styles.container}>
      <MovieList />
      {heigth > 10 && (
        <div className={styles.arrow} onClick={scrollUp}>
          <ArrowUp />
        </div>
      )}
    </div>
  );
}

export default Recommend;
