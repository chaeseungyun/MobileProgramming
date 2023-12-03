import styles from "./Headers.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
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
      </div>
    </div>
  );
}

export default Headers;
