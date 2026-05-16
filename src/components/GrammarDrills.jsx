import { useState, useMemo, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import SpeakButton from './SpeakButton';
import { grammarTopics as topicsConfig } from '../data/grammarTopics';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SESSION_SIZE = 7;

// ── Exercise types ────────────────────────────────────────────────────────────

function MultipleChoice({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (opt) => {
    if (selected !== null) return;
    setSelected(opt);
    onAnswer(opt === exercise.answer);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-800 leading-relaxed">{exercise.question}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {exercise.options.map((opt, i) => {
          let cls = 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50';
          if (selected !== null) {
            if (opt === exercise.answer) cls = 'bg-green-500 border-green-500 text-white';
            else if (opt === selected)   cls = 'bg-red-500 border-red-500 text-white';
            else                         cls = 'bg-gray-100 border-gray-200 text-gray-400';
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              disabled={selected !== null}
              className={`${cls} rounded-xl p-4 text-base font-semibold text-left transition-all duration-200 active:scale-95 disabled:cursor-not-allowed`}
            >
              <span className="text-gray-400 mr-2">{['A','B','C','D'][i]}.</span>{opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className={`p-4 rounded-xl ${selected === exercise.answer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="font-semibold mb-1">
            {selected === exercise.answer ? '✅ Đúng rồi!' : `❌ Sai! Đáp án đúng: "${exercise.answer}"`}
          </div>
          {exercise.explanation && <div className="text-sm text-gray-600">💡 {exercise.explanation}</div>}
        </div>
      )}
    </div>
  );
}

function FillBlank({ exercise, onAnswer }) {
  const [value,     setValue]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct,   setCorrect]   = useState(false);

  const handleSubmit = () => {
    if (!value.trim() || submitted) return;
    const isCorrect = value.trim().toLowerCase() === exercise.answer.toLowerCase();
    setCorrect(isCorrect);
    setSubmitted(true);
    onAnswer(isCorrect);
  };

  const parts = exercise.question.split('___');

  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold text-gray-800 leading-relaxed">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              submitted ? (
                <span className={`inline-block px-3 py-0.5 rounded-lg mx-1 font-bold ${correct ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {value}
                </span>
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  className="inline-block border-b-2 border-blue-400 mx-1 px-2 py-0.5 text-blue-700 font-bold outline-none bg-transparent w-24 text-center"
                  placeholder="___"
                  autoFocus
                />
              )
            )}
          </span>
        ))}
      </div>
      {exercise.hint && !submitted && <p className="text-sm text-gray-500 italic">💡 Gợi ý: {exercise.hint}</p>}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="px-5 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Kiểm tra
        </button>
      ) : (
        <div className={`p-4 rounded-xl ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="font-semibold">
            {correct ? '✅ Đúng rồi!' : `❌ Đáp án đúng: "${exercise.answer}"`}
          </div>
          {exercise.hint && !correct && <div className="text-sm text-gray-600 mt-1">💡 {exercise.hint}</div>}
        </div>
      )}
    </div>
  );
}

function ReorderWords({ exercise, onAnswer }) {
  const [available, setAvailable] = useState(() => shuffle(exercise.words.map((w, i) => ({ w, i }))));
  const [answer,    setAnswer]    = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct,   setCorrect]   = useState(false);

  const addWord = (item) => {
    if (submitted) return;
    setAvailable(prev => prev.filter(x => x !== item));
    setAnswer(prev => [...prev, item]);
  };

  const removeWord = (item) => {
    if (submitted) return;
    setAnswer(prev => prev.filter(x => x !== item));
    setAvailable(prev => [...prev, item]);
  };

  const handleSubmit = () => {
    if (!answer.length || submitted) return;
    const isCorrect = answer.map(x => x.w).join(' ') === exercise.answer;
    setCorrect(isCorrect);
    setSubmitted(true);
    onAnswer(isCorrect);
  };

  const handleReset = () => {
    if (submitted) return;
    setAvailable(shuffle([...available, ...answer]));
    setAnswer([]);
  };

  return (
    <div className="space-y-4">
      <p className="text-base text-gray-600">{exercise.question}</p>
      <div className={`min-h-14 p-3 rounded-xl border-2 flex flex-wrap gap-2 items-start ${
        submitted
          ? correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'
          : 'border-dashed border-blue-300 bg-blue-50'
      }`}>
        {answer.length === 0 && <span className="text-gray-400 text-sm self-center">Nhấn vào từ để sắp xếp...</span>}
        {answer.map((item, i) => (
          <button
            key={`ans-${i}`}
            onClick={() => removeWord(item)}
            disabled={submitted}
            className="word-chip bg-blue-500 text-white hover:bg-blue-600 disabled:cursor-default"
          >
            {item.w}
          </button>
        ))}
      </div>
      {!submitted && (
        <div className="flex flex-wrap gap-2">
          {available.map((item, i) => (
            <button key={`avail-${i}`} onClick={() => addWord(item)} className="word-chip bg-gray-200 text-gray-700 hover:bg-gray-300">
              {item.w}
            </button>
          ))}
        </div>
      )}
      {!submitted && (
        <div className="flex gap-3">
          <button onClick={handleReset} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 text-sm transition-all active:scale-95">
            🔄 Đặt lại
          </button>
          <button
            onClick={handleSubmit}
            disabled={!answer.length}
            className="px-5 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kiểm tra
          </button>
        </div>
      )}
      {submitted && (
        <div className={`p-4 rounded-xl ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="font-semibold mb-1">{correct ? '✅ Đúng rồi!' : '❌ Chưa đúng!'}</div>
          {!correct && <div className="text-sm text-gray-600">Đáp án đúng: <span className="font-semibold text-green-700">{exercise.answer}</span></div>}
        </div>
      )}
    </div>
  );
}

// ── Topic Selector ────────────────────────────────────────────────────────────

function TopicSelector({ topics, fullGrammar, doneMask, onSelect }) {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-gray-400">Chọn chủ điểm ngữ pháp để luyện tập</p>

      {/* Mixed practice */}
      <button
        onClick={() => onSelect('__all__')}
        className="w-full flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-4 font-semibold hover:opacity-90 transition-all active:scale-95 shadow"
      >
        <span>🎯 Luyện tập tổng hợp</span>
        <span className="text-sm opacity-80 bg-white bg-opacity-20 px-2 py-0.5 rounded-lg">{fullGrammar.length} bài</span>
      </button>

      {/* Topic cards */}
      <div className="space-y-2">
        {topics.map(topic => {
          const exs = topic.ids.map(id => fullGrammar.find(e => e.id === id)).filter(Boolean);
          const done = exs.filter(e => {
            const idx = fullGrammar.findIndex(g => g.id === e.id);
            return idx >= 0 && doneMask[idx] === true;
          }).length;
          const pct = exs.length > 0 ? (done / exs.length) * 100 : 0;

          return (
            <button
              key={topic.id}
              onClick={() => onSelect(topic.id)}
              className="w-full flex items-center gap-4 bg-white border-2 border-gray-100 rounded-2xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-all active:scale-95 shadow-sm text-left"
            >
              <span className="text-3xl flex-shrink-0">{topic.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 text-sm">{topic.name}</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-400 h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">{done}/{exs.length}</span>
                </div>
              </div>
              <span className="text-gray-300 text-xl flex-shrink-0">›</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Topic Drill (exercise session) ────────────────────────────────────────────

function TopicDrill({ exercises, unit, fullGrammar, progress, onUpdateProgress, onBack, showNewSession, onNewSession }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results,  setResults]  = useState(() => new Array(exercises.length).fill(null));
  const [answered, setAnswered] = useState(() => new Array(exercises.length).fill(false));

  const up          = progress[`unit${unit.id}`] || {};
  const exercise    = exercises[currentIdx];
  const doneCount   = results.filter(v => v === true).length;
  const allAnswered = answered.length > 0 && answered.every(Boolean);

  const handleAnswer = (isCorrect) => {
    setResults(prev  => { const a = [...prev];  a[currentIdx] = isCorrect; return a; });
    setAnswered(prev => { const a = [...prev];  a[currentIdx] = true;      return a; });

    const exId   = exercises[currentIdx].id;
    const fullIdx = fullGrammar.findIndex(e => e.id === exId);
    if (fullIdx >= 0) {
      const fullDone = [...(up.grammarDone || new Array(fullGrammar.length).fill(false))];
      fullDone[fullIdx] = isCorrect;
      onUpdateProgress(unit.id, { grammarDone: fullDone });
    }
  };

  if (!exercise) return null;

  return (
    <div className="space-y-4">
      {/* Back */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-500 transition-colors"
        >
          ← Chủ điểm khác
        </button>
      )}

      {/* Progress header */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            Bài {currentIdx + 1}/{exercises.length}
            {showNewSession && exercises.length < fullGrammar.length && (
              <span className="ml-1 text-xs text-gray-400">(chọn {exercises.length}/{fullGrammar.length})</span>
            )}
          </span>
          <span className="font-semibold text-green-600">✓ {doneCount}/{exercises.length} đúng</span>
        </div>
        <ProgressBar value={doneCount} max={exercises.length} color={unit.color} height="h-2" />
      </div>

      {/* Exercise navigation dots */}
      <div className="flex gap-1.5 flex-wrap">
        {exercises.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
              i === currentIdx ? 'bg-blue-500 text-white' :
              answered[i]
                ? results[i] ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Exercise card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
            exercise.type === 'multiple_choice' ? 'bg-blue-100 text-blue-700' :
            exercise.type === 'fill_blank'      ? 'bg-purple-100 text-purple-700' :
                                                  'bg-orange-100 text-orange-700'
          }`}>
            {exercise.type === 'multiple_choice' ? '🔘 Trắc nghiệm' :
             exercise.type === 'fill_blank'       ? '✏️ Điền vào chỗ trống' :
                                                    '🔀 Sắp xếp từ'}
          </span>
          <SpeakButton text={exercise.question.replace(/___/g, 'blank')} size="sm" />
          {answered[currentIdx] && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${results[currentIdx] ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {results[currentIdx] ? '✓ Đúng' : '✗ Sai'}
            </span>
          )}
        </div>

        {exercise.type === 'multiple_choice' && (
          <MultipleChoice key={`mc-${unit.id}-${currentIdx}-${exercise.id}`} exercise={exercise} onAnswer={handleAnswer} />
        )}
        {exercise.type === 'fill_blank' && (
          <FillBlank key={`fb-${unit.id}-${currentIdx}-${exercise.id}`} exercise={exercise} onAnswer={handleAnswer} />
        )}
        {exercise.type === 'reorder' && (
          <ReorderWords key={`ro-${unit.id}-${currentIdx}-${exercise.id}`} exercise={exercise} onAnswer={handleAnswer} />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-3">
        <button
          onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Bài trước
        </button>
        <button
          onClick={() => setCurrentIdx(i => Math.min(exercises.length - 1, i + 1))}
          disabled={currentIdx >= exercises.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Bài tiếp →
        </button>
      </div>

      {/* All answered banner */}
      {allAnswered && (
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 text-center text-white">
          <div className="text-2xl mb-1">🎉</div>
          <div className="font-bold">Hoàn thành {exercises.length} bài ngữ pháp!</div>
          <div className="text-sm opacity-90 mb-3">{doneCount}/{exercises.length} câu đúng</div>
          <div className="flex gap-2 justify-center flex-wrap">
            {onBack && (
              <button
                onClick={onBack}
                className="px-4 py-2 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-all active:scale-95 text-sm"
              >
                ← Chủ điểm khác
              </button>
            )}
            {showNewSession && exercises.length < fullGrammar.length && (
              <button
                onClick={onNewSession}
                className="px-4 py-2 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-all active:scale-95 text-sm"
              >
                🔀 Bộ bài mới
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function GrammarDrills({ unit, progress, onUpdateProgress }) {
  const fullGrammar = unit.grammar;
  const up          = progress[`unit${unit.id}`] || {};
  const topics      = topicsConfig[unit.id] || null;

  const [topicId,    setTopicId]    = useState(null);
  const [sessionKey, setSessionKey] = useState(0);

  // Reset to selector when user navigates to a different unit
  useEffect(() => {
    setTopicId(null);
    setSessionKey(0);
  }, [unit.id]);

  const allExercises = useMemo(
    () => shuffle([...fullGrammar]).slice(0, Math.min(SESSION_SIZE, fullGrammar.length)),
    [unit.id, sessionKey], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const topicExercises = useMemo(() => {
    if (!topicId || topicId === '__all__' || !topics) return [];
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return [];
    return topic.ids.map(id => fullGrammar.find(e => e.id === id)).filter(Boolean);
  }, [topicId, fullGrammar, topics]);

  // Show selector when topics exist and none is chosen
  if (topics && topicId === null) {
    return (
      <TopicSelector
        topics={topics}
        fullGrammar={fullGrammar}
        doneMask={up.grammarDone || []}
        onSelect={setTopicId}
      />
    );
  }

  const exercises   = topicId === '__all__' || !topics ? allExercises : topicExercises;
  const hasTopics   = topics !== null;

  return (
    <TopicDrill
      key={`${unit.id}-${topicId}-${sessionKey}`}
      exercises={exercises}
      unit={unit}
      fullGrammar={fullGrammar}
      progress={progress}
      onUpdateProgress={onUpdateProgress}
      onBack={hasTopics ? () => setTopicId(null) : undefined}
      showNewSession={topicId === '__all__' || !topics}
      onNewSession={() => setSessionKey(k => k + 1)}
    />
  );
}
