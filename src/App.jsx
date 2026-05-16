import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import UnitDetail from './components/UnitDetail';
import SpeakingTimer from './components/SpeakingTimer';
import { units } from './data/curriculum';
import './index.css';

const PROGRESS_KEY = 'ww5_progress';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export default function App() {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'unit' | 'speaking'
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [progress, setProgress] = useState(loadProgress);

  // Persist progress to localStorage on change
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const selectedUnit = selectedUnitId ? units.find(u => u.id === selectedUnitId) : null;

  const handleSelectUnit = (unitId) => {
    setSelectedUnitId(unitId);
    setView('unit');
  };

  const handleBack = () => {
    setView('dashboard');
    setSelectedUnitId(null);
  };

  const handleSpeaking = () => {
    setView('speaking');
  };

  const handleUpdateProgress = (unitId, updates) => {
    setProgress(prev => {
      const key = `unit${unitId}`;
      const current = prev[key] || {};
      return {
        ...prev,
        [key]: { ...current, ...updates }
      };
    });
  };

  if (view === 'dashboard') {
    return (
      <Dashboard
        onSelectUnit={handleSelectUnit}
        progress={progress}
      />
    );
  }

  if (view === 'unit' && selectedUnit) {
    return (
      <UnitDetail
        unit={selectedUnit}
        progress={progress}
        onUpdateProgress={handleUpdateProgress}
        onBack={handleBack}
        onSpeaking={handleSpeaking}
      />
    );
  }

  if (view === 'speaking' && selectedUnit) {
    return (
      <SpeakingTimer
        unit={selectedUnit}
        onBack={() => setView('unit')}
      />
    );
  }

  // Fallback
  return <Dashboard onSelectUnit={handleSelectUnit} progress={progress} />;
}
