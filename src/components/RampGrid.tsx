import type { Pattern, RampState } from '../gameLogic';
import { applyAutoFill, cycleColor, patternColorAt } from '../gameLogic';
import styles from './RampGrid.module.css';

interface RampGridProps {
  label: string;
  ramp: RampState;
  pattern: Pattern;
  onChange: (ramp: RampState) => void;
  onClear: () => void;
}

export function RampGrid({ label, ramp, pattern, onChange, onClear }: RampGridProps) {
  function handleTap(index: number) {
    const next = applyAutoFill(ramp, index);
    next[index] = cycleColor(next[index]);
    onChange(next);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <button className={styles.clearBtn} onClick={onClear} aria-label={`Clear ${label} ramp`}>
          Clear
        </button>
      </div>
      <div className={styles.grid}>
        {ramp.map((color, index) => {
          const expectedColor = patternColorAt(pattern, index);
          const isMatch = color !== 'blank' && color === expectedColor;
          const isMismatch = color !== 'blank' && color !== expectedColor;
          return (
            <div key={index} className={styles.cellWrapper}>
              <button
                className={`${styles.cell} ${styles[color]} ${isMatch ? styles.match : ''} ${isMismatch ? styles.mismatch : ''}`}
                onClick={() => handleTap(index)}
                aria-label={`Position ${index + 1}: ${color}`}
              >
                <span className={styles.posNum}>{index + 1}</span>
                {color !== 'blank' && (
                  <span className={styles.colorIndicator}>●</span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
