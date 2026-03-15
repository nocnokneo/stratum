import { PATTERNS } from '../gameLogic';
import type { Pattern } from '../gameLogic';
import styles from './PatternSelector.module.css';

interface PatternSelectorProps {
  pattern: Pattern;
  onChange: (pattern: Pattern) => void;
}

const PATTERN_COLORS: Record<string, string> = {
  P: 'purple',
  G: 'green',
};

export function PatternSelector({ pattern, onChange }: PatternSelectorProps) {
  function handleTap() {
    const idx = PATTERNS.indexOf(pattern);
    const next = PATTERNS[(idx + 1) % PATTERNS.length];
    onChange(next);
  }

  return (
    <div className={styles.container}>
      <span className={styles.label}>Pattern</span>
      <button
        className={styles.button}
        onClick={handleTap}
        aria-label={`Current pattern: ${pattern}. Tap to cycle.`}
      >
        {pattern.split('').map((letter, i) => (
          <span
            key={i}
            className={`${styles.letter} ${styles[PATTERN_COLORS[letter]]}`}
          >
            {letter}
          </span>
        ))}
      </button>
      <span className={styles.hint}>Tap to cycle</span>
    </div>
  );
}
