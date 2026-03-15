import { useState } from 'react';
import styles from './MatchReset.module.css';

interface MatchResetProps {
  onReset: () => void;
}

export function MatchReset({ onReset }: MatchResetProps) {
  const [confirming, setConfirming] = useState(false);

  function handlePress() {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    setConfirming(false);
    onReset();
  }

  function handleCancel() {
    setConfirming(false);
  }

  return (
    <div className={styles.container}>
      {confirming ? (
        <div className={styles.confirmRow}>
          <span className={styles.confirmText}>Reset match?</span>
          <button className={styles.confirmYes} onClick={handlePress}>
            Yes, Reset
          </button>
          <button className={styles.confirmNo} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button className={styles.resetBtn} onClick={handlePress}>
          ↺ New Match
        </button>
      )}
    </div>
  );
}
