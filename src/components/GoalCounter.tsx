import styles from './GoalCounter.module.css';

interface GoalCounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function GoalCounter({ count, onIncrement, onDecrement }: GoalCounterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.labelRow}>
        <span className={styles.label}>Goal Counter</span>
        <span className={styles.sublabel}>Balls through Square</span>
      </div>
      <div className={styles.controls}>
        <button
          className={styles.decrementBtn}
          onClick={onDecrement}
          disabled={count <= 0}
          aria-label="Decrement goal count"
        >
          −
        </button>
        <button
          className={styles.incrementBtn}
          onClick={onIncrement}
          aria-label="Increment goal count"
        >
          <span className={styles.incrementCount}>{count}</span>
          <span className={styles.incrementLabel}>+1 Ball</span>
        </button>
      </div>
    </div>
  );
}
