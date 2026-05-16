import { useState, useEffect, useCallback } from 'react';
import SpeakButton from './SpeakButton';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import VocabGames from './VocabGames';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Flashcard Mode
function FlashcardMode({ vocabulary, knownIds, onMarkKnown, onMarkPractice }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { speak } = useTextToSpeech();

  const card = vocabulary[idx];

  // Auto-speak word when card changes and showing front
  useEffect(() => {
    if (!flipped) {
      speak(card.word);
    }
  }, [idx, flipped]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span>Card {idx + 1}/{vocabulary.length}</span>
        <span className="text-green-600 font-semibold">✓ Known: {knownIds.length}</span>
      </div>

      {/* Flashcard */}
      <div
        className="w-full max-w-md cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            height: '220px',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-white rounded-2xl shadow-lg border-2 border-blue-200 flex flex-col items-center justify-center p-6 select-none"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-sm text-gray-400 mb-2">English Word</div>
            <div className="text-4xl font-bold text-blue-700 mb-1">{card.word}</div>
            {card.pronunciation && (
              <div className="text-base text-blue-400 font-mono mt-1">{card.pronunciation}</div>
            )}
            <SpeakButton text={card.word} size="lg" className="mt-1 mb-1" />
            <div className="text-sm text-gray-400 mt-2">👆 Tap to see definition</div>
            {knownIds.includes(idx) && (
              <div className="mt-3 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ Known</div>
            )}
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 select-none text-white"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="text-sm opacity-80 mb-1">Definition</div>
            {card.pronunciation && (
              <div className="text-sm opacity-70 font-mono mb-2">{card.pronunciation}</div>
            )}
            <div className="text-2xl font-bold mb-3 text-center">{card.meaning}</div>
            <div className="text-sm opacity-80 mb-1">Example:</div>
            <div className="flex items-center gap-2 justify-center">
              <div className="text-base italic text-center opacity-90">"{card.example}"</div>
              <SpeakButton text={card.example} size="sm" className="bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      {flipped && (
        <div className="flex gap-3">
          <button
            onClick={() => {
              onMarkPractice(idx);
              const next = (idx + 1) % vocabulary.length;
              setIdx(next);
              setFlipped(false);
            }}
            className="px-5 py-2.5 bg-orange-100 text-orange-700 rounded-xl font-semibold hover:bg-orange-200 transition-all active:scale-95"
          >
            🔄 Practise More
          </button>
          <button
            onClick={() => {
              onMarkKnown(idx);
              const next = (idx + 1) % vocabulary.length;
              setIdx(next);
              setFlipped(false);
            }}
            className="px-5 py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95"
          >
            ✓ I Know It!
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => { setIdx((idx - 1 + vocabulary.length) % vocabulary.length); setFlipped(false); }}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
        >
          ← Previous
        </button>
        <button
          onClick={() => { setIdx((idx + 1) % vocabulary.length); setFlipped(false); }}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
        >
          Next →
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5 flex-wrap justify-center max-w-xs">
        {vocabulary.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIdx(i); setFlipped(false); }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === idx ? 'bg-blue-500 scale-125' :
              knownIds.includes(i) ? 'bg-green-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Memory Check Mode
function MemoryCheckMode({ vocabulary }) {
  const TOTAL = Math.min(vocabulary.length, 10);

  const [questions] = useState(() => shuffle(vocabulary).slice(0, TOTAL));
  const [qIdx, setQIdx] = useState(0);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const { speak } = useTextToSpeech();
  const inputRef = useCallback(node => { if (node) node.focus(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const current = questions[qIdx];

  const blankExample = (card) => {
    const regex = new RegExp(`\\b${card.word}\\b`, 'gi');
    return card.example.replace(regex, '_____');
  };

  const handleCheck = useCallback(() => {
    if (submitted || !input.trim()) return;
    const correct = input.trim().toLowerCase() === current.word.toLowerCase();
    setIsCorrect(correct);
    setSubmitted(true);
    setAnswers(prev => [...prev, { word: current.word, typed: input.trim(), correct, meaning: current.meaning }]);
    if (correct) {
      setScore(s => s + 1);
      speak(current.word);
    }
  }, [submitted, input, current, speak]);

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= TOTAL) {
      setFinished(true);
    } else {
      setQIdx(q => q + 1);
      setInput('');
      setSubmitted(false);
      setIsCorrect(false);
      setShowHint(false);
    }
  }, [qIdx, TOTAL]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!submitted) handleCheck();
      else handleNext();
    }
  };

  const handleRestart = () => {
    setQIdx(0);
    setInput('');
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  if (finished) {
    const pct = Math.round((score / TOTAL) * 100);
    return (
      <div className="text-center space-y-4">
        <div className="text-5xl mb-2">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
        <h3 className="text-2xl font-bold text-gray-800">Kết quả</h3>
        <div className="text-4xl font-bold text-blue-600">{score}/{TOTAL}</div>
        <div className={`text-lg font-semibold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
          {pct >= 80 ? 'Xuất sắc! Bạn nhớ rất tốt!' : pct >= 50 ? 'Khá tốt! Hãy ôn lại nhé!' : 'Cần ôn thêm nhiều từ nữa!'}
        </div>

        <div className="mt-4 space-y-2 text-left max-w-sm mx-auto">
          {answers.map((a, i) => (
            <div key={i} className={`p-3 rounded-xl text-sm ${a.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center gap-2">
                <span>{a.correct ? '✓' : '✗'}</span>
                <span className="font-bold text-base">{a.word}</span>
                <SpeakButton text={a.word} size="sm" />
              </div>
              {!a.correct && (
                <div className="mt-1 text-gray-500 text-xs">
                  Bạn gõ: <span className="text-red-500 font-semibold">"{a.typed || '(bỏ trống)'}"</span>
                </div>
              )}
              <div className="mt-1 text-gray-400 text-xs italic">{a.meaning}</div>
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95"
        >
          🔄 Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 font-semibold">Từ {qIdx + 1}/{TOTAL}</span>
        <span className="text-sm text-gray-500">Đúng: <span className="font-bold text-green-600">{score}</span></span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-blue-400 rounded-full transition-all duration-500"
          style={{ width: `${((qIdx) / TOTAL) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-5 text-white shadow-lg space-y-2">
        <div className="text-xs opacity-70 uppercase tracking-wide">Nghĩa</div>
        <div className="flex items-start gap-2">
          <div className="text-lg font-semibold leading-snug">{current.meaning}</div>
        </div>
        <div className="text-xs opacity-70 uppercase tracking-wide mt-2">Ví dụ</div>
        <div className="text-sm italic opacity-90">"{blankExample(current)}"</div>
      </div>

      {/* Hint */}
      {!submitted && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHint(true)}
            className="text-xs text-gray-400 hover:text-blue-500 underline transition-colors"
          >
            💡 Gợi ý (chữ cái đầu)
          </button>
          {showHint && (
            <span className="text-sm font-mono font-bold text-blue-500">
              {current.word[0].toUpperCase()}{current.pronunciation ? ` ${current.pronunciation}` : ''}
            </span>
          )}
        </div>
      )}

      {/* Input */}
      <div className="space-y-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => !submitted && setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={submitted}
          placeholder="Gõ từ tiếng Anh vào đây..."
          className={`w-full px-4 py-3 text-lg font-semibold rounded-xl border-2 outline-none transition-all
            ${submitted
              ? isCorrect
                ? 'border-green-400 bg-green-50 text-green-700'
                : 'border-red-400 bg-red-50 text-red-700'
              : 'border-gray-300 focus:border-blue-400 bg-white text-gray-800'
            }`}
        />

        {/* Feedback */}
        {submitted && (
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {isCorrect ? (
              <>✓ Chính xác! <SpeakButton text={current.word} size="sm" /></>
            ) : (
              <>
                ✗ Đáp án đúng:&nbsp;
                <span className="font-bold text-red-800">{current.word}</span>
                <SpeakButton text={current.word} size="sm" />
              </>
            )}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleCheck}
            disabled={!input.trim()}
            className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Kiểm tra ↵
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 py-3 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-all active:scale-95"
          >
            {qIdx + 1 >= TOTAL ? 'Xem kết quả 🏁' : 'Từ tiếp theo →'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function VocabQuiz({ unit, progress, onUpdateProgress }) {
  const [mode, setMode] = useState('flashcard'); // 'flashcard' | 'memory' | 'games'
  const [memoryKey, setMemoryKey] = useState(0);

  const up = progress[`unit${unit.id}`] || {};
  const knownIds = up.vocabKnown || [];

  const handleMarkKnown = (idx) => {
    const updated = knownIds.includes(idx) ? knownIds : [...knownIds, idx];
    onUpdateProgress(unit.id, { vocabKnown: updated });
  };

  const handleMarkPractice = (idx) => {
    const updated = knownIds.filter(i => i !== idx);
    onUpdateProgress(unit.id, { vocabKnown: updated });
  };

  return (
    <div className="space-y-4">
      {/* Mode toggle */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
        <button
          onClick={() => setMode('flashcard')}
          className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
            mode === 'flashcard' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          🃏 Học
        </button>
        <button
          onClick={() => { setMode('memory'); setMemoryKey(k => k + 1); }}
          className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
            mode === 'memory' ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          ✍️ Kiểm tra
        </button>
        <button
          onClick={() => setMode('games')}
          className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
            mode === 'games' ? 'bg-white shadow text-pink-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          🎮 Trò chơi
        </button>
      </div>

      {mode === 'flashcard' && (
        <FlashcardMode
          vocabulary={unit.vocabulary}
          knownIds={knownIds}
          onMarkKnown={handleMarkKnown}
          onMarkPractice={handleMarkPractice}
        />
      )}
      {mode === 'memory' && <MemoryCheckMode key={memoryKey} vocabulary={unit.vocabulary} />}
      {mode === 'games'  && <VocabGames vocabulary={unit.vocabulary} />}
    </div>
  );
}
