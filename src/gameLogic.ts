export type ArtifactColor = 'blank' | 'purple' | 'green';
export type Pattern = 'PPG' | 'PGP' | 'GPP';
export type RampState = ArtifactColor[];

export const RAMP_SIZE = 9;
export const PATTERN_RP_THRESHOLD = 22;
export const GOAL_RP_THRESHOLD = 36;

export const PATTERNS: Pattern[] = ['PPG', 'PGP', 'GPP'];

/** Returns the expected color for each ramp index given a pattern.
 *  Index 0 = bottom of ramp (position 1), index 8 = top (position 9).
 *  The 3-letter pattern repeats across all 9 positions (e.g. PPG → PPGPPGPPG).
 */
export function patternColorAt(pattern: Pattern, index: number): 'purple' | 'green' {
  const letter = pattern[index % 3]; // repeating pattern
  return letter === 'P' ? 'purple' : 'green';
}

/** Compute points earned for a ramp against the active pattern.
 *  2 points per correctly-colored filled position.
 */
export function computePatternPoints(ramp: RampState, pattern: Pattern): number {
  return ramp.reduce((sum, color, index) => {
    if (color === 'blank') return sum;
    return sum + (color === patternColorAt(pattern, index) ? 2 : 0);
  }, 0);
}

/** Total pattern points from both ramps combined. */
export function totalPatternPoints(autoRamp: RampState, teleRamp: RampState, pattern: Pattern): number {
  return computePatternPoints(autoRamp, pattern) + computePatternPoints(teleRamp, pattern);
}

/** Auto-fill: when tapping position i, fill positions 0..i-1 with purple if blank. */
export function applyAutoFill(ramp: RampState, tappedIndex: number): RampState {
  const next = [...ramp];
  for (let i = 0; i < tappedIndex; i++) {
    if (next[i] === 'blank') {
      next[i] = 'purple';
    }
  }
  return next;
}

/** Cycle a single position: blank → purple → green → blank */
export function cycleColor(current: ArtifactColor): ArtifactColor {
  if (current === 'blank') return 'purple';
  if (current === 'purple') return 'green';
  return 'blank';
}

export function emptyRamp(): RampState {
  return Array(RAMP_SIZE).fill('blank') as RampState;
}
