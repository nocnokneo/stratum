import { useState } from 'react';
import type { Pattern, RampState } from './gameLogic';
import {
  emptyRamp,
  totalPatternPoints,
} from './gameLogic';
import { ProgressBars } from './components/ProgressBars';
import { PatternSelector } from './components/PatternSelector';
import { RampGrid } from './components/RampGrid';
import { GoalCounter } from './components/GoalCounter';
import { MatchReset } from './components/MatchReset';
import './App.css';

function App() {
  const [pattern, setPattern] = useState<Pattern>('PPG');
  const [autoRamp, setAutoRamp] = useState<RampState>(emptyRamp());
  const [teleRamp, setTeleRamp] = useState<RampState>(emptyRamp());
  const [goalCount, setGoalCount] = useState(0);

  const patternPoints = totalPatternPoints(autoRamp, teleRamp, pattern);

  function handleReset() {
    setPattern('PPG');
    setAutoRamp(emptyRamp());
    setTeleRamp(emptyRamp());
    setGoalCount(0);
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="title-row">
          <h1 className="app-title">STRATUM</h1>
          <MatchReset onReset={handleReset} />
        </div>
        <ProgressBars patternPoints={patternPoints} goalCount={goalCount} />
      </header>

      <main className="app-main">
        <section className="section">
          <PatternSelector pattern={pattern} onChange={setPattern} />
        </section>

        <section className="section">
          <RampGrid
            label="Auto Ramp"
            ramp={autoRamp}
            pattern={pattern}
            onChange={setAutoRamp}
            onClear={() => setAutoRamp(emptyRamp())}
          />
        </section>

        <section className="section">
          <RampGrid
            label="Tele-Op Ramp"
            ramp={teleRamp}
            pattern={pattern}
            onChange={setTeleRamp}
            onClear={() => setTeleRamp(emptyRamp())}
          />
        </section>

        <section className="section">
          <GoalCounter
            count={goalCount}
            onIncrement={() => setGoalCount((c) => c + 1)}
            onDecrement={() => setGoalCount((c) => Math.max(0, c - 1))}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
