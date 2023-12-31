import { Board } from "./components/Board";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Board FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" />
    </div>
  );
}

export default App;
