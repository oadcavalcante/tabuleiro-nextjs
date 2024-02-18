import Quadrado from "./Quadrado";
import styles from "./tabuleiro.module.css";

export default function Tabuleiro() {
  return (
    <div className={styles.tabuleiro}>
      {[...Array(8).keys()].map((row) => (
        <div key={row}>
          {[...Array(8).keys()].map((col) => (
            <Quadrado key={col} preto={(row + col) % 2 === 0} />
          ))}
        </div>
      ))}
    </div>
  );
}
