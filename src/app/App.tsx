import Counter from "../components/Counter/Counter";
import styles from '../index.module.scss'

export const App = () => {
    return (
        <div className={styles.app}>
          <Counter/>
        </div>
    )
}