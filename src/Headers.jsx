import styles from "./Headers.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "./assets/star.svg?react";
import EmptyStar from "./assets/emptyStar.svg?react";

function Headers() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          setInput("");
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      >
        CHAEFLIX
      </div>
      <div className={styles.toolSet}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className={styles.input}
          value={input}
          onChange={handleInput}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            if (input.length == 0) alert("검색어를 입력해주세요!");
            else {
              navigate(`/search/${input}`, {
                state: input,
              });
            }
          }}
        >
          검색
        </button>
        <div className={styles.emptyStar}>
          <EmptyStar />
        </div>
        <div className={styles.star} onClick={() => navigate("/favorite")}>
          <Star />
        </div>
        <div className={styles.tooltip}>좋아요</div>
      </div>
    </div>
  );
}

export default Headers;
