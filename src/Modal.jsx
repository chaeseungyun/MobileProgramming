import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const getVideo = (id) => {
  const result = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      headers: `Authorization: Bearer ${import.meta.env.VITE_TOKEN}`,
    }
  );
  return result;
};

function Modal({ overview, modalpath, setIsClicked, id }) {
  const [state, setState] = useState();
  const setVideo = async () => {
    const result = await getVideo(id);
    setState(result.data.results[0].key);
  };
  useEffect(() => {
    setVideo();
  }, []);
  return createPortal(
    <div className={styles.container}>
      <div className={styles.modal} onClick={() => setIsClicked(false)}>
        <span className={styles.modal__close}>x</span>
        {state && (
          <div className={styles.framewidth}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${state}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        )}
        <div className={styles.modal__overview}>{overview}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
