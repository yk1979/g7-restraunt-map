import styles from "./style.module.css";

type Props = {
  // こんな感じで props の中身の型を定義しよう！
  text: string;
};

export const Sample: React.FC<Props> = ({ text }) => {
  return (
    // 同じ階層に style.module.css ってファイルを置けば、css が書けるよ！
    // import styles from "./style.module.css"; って感じで読み込むと、styles.root みたいな感じでクラス名参照できる！
    <div className={styles.root}>
      <h2 className={styles.title}>サンプルのコンポーネント</h2>
      <p>{text}</p>
    </div>
  );
};
