import styles from "./NotFound.module.scss";

function NoResult() {
  return (
    <div className={styles.container}>
      <div>입력하신 검색어와 일치하는 작품이 없어요..</div>
    </div>
  );
}

export default NoResult;
