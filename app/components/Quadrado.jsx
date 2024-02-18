import styles from "@/app/assets/css/quadrado.module.css";

export default function Quadrado(props) {
  const corClasse = props.preto ? styles.preto : styles.branco;
  const irParaBaixoClasse = props.irParaBaixo ? styles.irParaBaixo : "";

  return <div className={`${styles.quadrado} ${corClasse} ${irParaBaixoClasse}`} />;
}
