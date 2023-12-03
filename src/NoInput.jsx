import styles from "./NotFound.module.scss";

function NoInput() {
  return (
    <div className={styles.container}>
      <div>검색어를 입력해주세요!</div>
    </div>
  );
}

export default NoInput;
