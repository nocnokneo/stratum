import { GOAL_RP_THRESHOLD, PATTERN_RP_THRESHOLD } from '../gameLogic';
import styles from './ProgressBars.module.css';

interface ProgressBarsProps {
  patternPoints: number;
  goalCount: number;
}

export function ProgressBars({ patternPoints, goalCount }: ProgressBarsProps) {
  const patternPct = Math.min(100, (patternPoints / PATTERN_RP_THRESHOLD) * 100);
  const goalPct = Math.min(100, (goalCount / GOAL_RP_THRESHOLD) * 100);
  const patternNeeded = Math.max(0, PATTERN_RP_THRESHOLD - patternPoints);
  const goalNeeded = Math.max(0, GOAL_RP_THRESHOLD - goalCount);
  const patternAchieved = patternPoints >= PATTERN_RP_THRESHOLD;
  const goalAchieved = goalCount >= GOAL_RP_THRESHOLD;

  return (
    <div className={styles.container}>
      <div className={styles.barGroup}>
        <div className={styles.label}>
          <span className={styles.barTitle}>Pattern RP</span>
          <span className={`${styles.status} ${patternAchieved ? styles.achieved : ''}`}>
            {patternAchieved
              ? '✓ Achieved!'
              : `${patternNeeded} pts needed`}
          </span>
        </div>
        <div className={styles.track}>
          <div
            className={`${styles.fill} ${styles.patternFill} ${patternAchieved ? styles.achievedFill : ''}`}
            style={{ width: `${patternPct}%` }}
          />
        </div>
        <div className={styles.subLabel}>
          {patternPoints} / {PATTERN_RP_THRESHOLD}
        </div>
      </div>

      <div className={styles.barGroup}>
        <div className={styles.label}>
          <span className={styles.barTitle}>Goal RP</span>
          <span className={`${styles.status} ${goalAchieved ? styles.achieved : ''}`}>
            {goalAchieved
              ? '✓ Achieved!'
              : `${goalNeeded} balls needed`}
          </span>
        </div>
        <div className={styles.track}>
          <div
            className={`${styles.fill} ${styles.goalFill} ${goalAchieved ? styles.achievedFill : ''}`}
            style={{ width: `${goalPct}%` }}
          />
        </div>
        <div className={styles.subLabel}>
          {goalCount} / {GOAL_RP_THRESHOLD}
        </div>
      </div>
    </div>
  );
}
