import { useState, useEffect, useRef, useMemo } from 'react';
import ProgressBar from './ProgressBar';
import SpeakButton from './SpeakButton';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

const SHOW_DURATION = 5;
const SESSION_SIZE = 5;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function compareSentences(original, typed) {
  const origWords = original.toLowerCase().replace(/[.,!?]/g, '').trim().split(/\s+/);
  const typedWords = typed.toLowerCase().replace(/[.,!?]/g, '').trim().split(/\s+/);
  const maxLen = Math.max(origWords.length, typedWords.length);
  const results = [];
  for (let i = 0; i < maxLen; i++) {
    const orig = origWords[i] || '';
    const typed = typedWords[i] || '';
    results.push({ word: origWords[i] || typedWords[i], correct: orig === typed, orig, typed });
  }
  const correctCount = results.filter(r => r.correct && r.orig).length;
  const score = origWords.length > 0 ? Math.round((correctCount / origWords.length) * 100) : 0;
  return { results, score };
}

export default function DictationPractice({ unit, progress, onUpdateProgress }) {
  const fullDictation = unit.dictation;
  const up = progress[`unit${unit.id}`] || {};

  const [sessionKey, setSessionKey] = useState(0);

  const sessionSentences = useMemo(() => {
    return shuffle([...fullDictation]).slice(0, Math.min(SESSION_SIZE, fullDictation.length));
  }, [unit.id, sessionKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const [sentIdx, setSentIdx] = useState(0);
  const [phase, setPhase] = useState('show');
  const [countdown, setCountdown] = useState(SHOW_DURATION);
  const [typed, setTyped] = useState('');
  const [comparison, setComparison] = useState(null);
  const [scores, setScores] = useState([]);
  const [replayCount, setReplayCount] = useState(0);
  const textareaRef = useRef(null);
  const { speak } = useTextToSpeech();

  // Reset when session changes
  useEffect(() => {
    setSentIdx(0);
    setPhase('show');
    setCountdown(SHOW_DURATION);
    setTyped('');
    setComparison(null);
    setScores([]);
    setReplayCount(0);
  }, [sessionKey, unit.id]);

  const sentence = sessionSentences[sentIdx] || '';

  // Auto-play audio on show phase
  useEffect(() => {
    if (phase === 'show' && sentence) {
      speak(sentence);
    }
  }, [phase, sentIdx, sessionKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // Countdown for show phase
  useEffect(() => {
    if (phase !== 'show') return;
    if (countdown <= 0) {
      setPhase('write');
      setTimeout(() => textareaRef.current?.focus(), 100);
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  const handleSubmit = () => {
    if (!typed.trim()) return;
    const { results, score } = compareSentences(sentence, typed);
    setComparison({ results, score });
    const newScores = [...scores];
    newScores[sentIdx] = score;
    setScores(newScores);
    // Save score by original sentence text index
    const origIdx = fullDictation.indexOf(sentence);
    if (origIdx >= 0) {
      const savedScores = [...(up.dictationScores || new Array(fullDictation.length).fill(undefined))];
      savedScores[origIdx] = score;
      onUpdateProgress(unit.id, { dictationScores: savedScores });
    }
    setPhase('result');
  };

  const goNext = () => {
    if (sentIdx < sessionSentences.length - 1) {
      setSentIdx(sentIdx + 1);
      reset();
    }
  };

  const goPrev = () => {
    if (sentIdx > 0) {
      setSentIdx(sentIdx - 1);
      reset();
    }
  };

  const reset = () => {
    setPhase('show');
    setCountdown(SHOW_DURATION);
    setTyped('');
    setComparison(null);
    setReplayCount(0);
  };

  const tryAgain = () => {
    setPhase('show');
    setCountdown(SHOW_DURATION);
    setTyped('');
    setComparison(null);
    setReplayCount(0);
  };

  const handleNewSession = () => setSessionKey(k => k + 1);

  const avgScore = scores.filter(s => s !== undefined).length > 0
    ? Math.round(scores.filter(s => s !== undefined).reduce((a, b) => a + b, 0) / scores.filter(s => s !== undefined).length)
    : 0;

  const allDone = scores.filter(s => s !== undefined).length === sessionSentences.length;

  return (
    <div className="space-y-4">
      {/* Header stats */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Câu {sentIdx + 1}/{sessionSentences.length}
          {fullDictation.length > SESSION_SIZE && (
            <span className="ml-1 text-xs text-gray-400">(chọn {SESSION_SIZE}/{fullDictation.length})</span>
          )}
        </span>
        {scores.filter(s => s !== undefined).length > 0 && (
          <span className="text-sm font-semibold text-blue-600">Điểm TB: {avgScore}%</span>
        )}
      </div>

      {/* Score dots */}
      <div className="flex gap-2 flex-wrap">
        {sessionSentences.map((_, i) => (
          <button
            key={i}
            onClick={() => { setSentIdx(i); reset(); }}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
              i === sentIdx ? 'ring-2 ring-blue-400 ring-offset-1' : ''
            } ${
              scores[i] !== undefined
                ? scores[i] >= 80 ? 'bg-green-400 text-white'
                  : scores[i] >= 50 ? 'bg-yellow-400 text-white'
                  : 'bg-red-400 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {scores[i] !== undefined ? scores[i] : i + 1}
          </button>
        ))}
      </div>

      {/* SHOW phase */}
      {phase === 'show' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-center text-white shadow-lg">
            <div className="text-sm opacity-80 mb-3">📖 Đọc kỹ câu này, rồi nhớ!</div>
            <div className="text-xl font-bold leading-relaxed">{sentence}</div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <SpeakButton text={sentence} size="lg" label="Nghe câu" className="bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30" />
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold
                ${countdown <= 2 ? 'bg-red-400' : countdown <= 4 ? 'bg-yellow-400 text-yellow-900' : 'bg-white bg-opacity-20'}
              `}>
                {countdown}
              </div>
              <span className="text-sm opacity-80">giây</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${(countdown / SHOW_DURATION) * 100}%`, transition: 'width 1s linear' }}
            />
          </div>
          <p className="text-center text-sm text-gray-500">Câu sẽ biến mất sau {countdown} giây. Hãy nhớ kỹ!</p>

          <button
            onClick={() => { setPhase('write'); setTimeout(() => textareaRef.current?.focus(), 100); }}
            className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95"
          >
            Sẵn sàng → Viết ngay
          </button>
        </div>
      )}

      {/* WRITE phase */}
      {phase === 'write' && (
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-2xl p-4 text-center">
            <div className="text-gray-500 text-sm">✏️ Hãy gõ lại câu bạn vừa đọc</div>
          </div>
          <textarea
            ref={textareaRef}
            value={typed}
            onChange={e => setTyped(e.target.value)}
            rows={3}
            className="w-full border-2 border-blue-300 rounded-xl p-4 text-lg focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Gõ câu bạn vừa nhớ..."
          />
          <div className="flex gap-3">
            <button
              onClick={tryAgain}
              className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
            >
              👁 Xem lại
            </button>
            <button
              onClick={() => {
                if (replayCount < 2) {
                  speak(sentence, { rate: 0.7 });
                  setReplayCount(c => c + 1);
                }
              }}
              disabled={replayCount >= 2}
              className="px-4 py-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed font-semibold"
            >
              🔊 Nghe lại ({replayCount}/2)
            </button>
            <button
              onClick={handleSubmit}
              disabled={!typed.trim()}
              className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50"
            >
              Kiểm tra ✓
            </button>
          </div>
        </div>
      )}

      {/* RESULT phase */}
      {phase === 'result' && comparison && (
        <div className="space-y-4">
          <div className={`rounded-2xl p-4 text-center ${
            comparison.score >= 80 ? 'bg-green-50 border-2 border-green-300' :
            comparison.score >= 50 ? 'bg-yellow-50 border-2 border-yellow-300' :
            'bg-red-50 border-2 border-red-300'
          }`}>
            <div className="text-4xl font-bold mb-1 text-gray-800">{comparison.score}%</div>
            <div className="text-sm text-gray-600">
              {comparison.score === 100 ? '🎉 Hoàn hảo!' :
               comparison.score >= 80 ? '👍 Rất tốt!' :
               comparison.score >= 50 ? '💪 Khá tốt, cố thêm nhé!' :
               '📖 Hãy luyện thêm!'}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-2 font-semibold">Câu gốc:</div>
            <div className="text-base font-medium text-gray-800">{sentence}</div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-3 font-semibold">Câu của bạn (so sánh từng từ):</div>
            <div className="flex flex-wrap gap-1.5">
              {comparison.results.map((r, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-lg text-sm font-medium ${
                    r.correct ? 'bg-green-100 text-green-800'
                      : r.orig ? 'bg-red-100 text-red-800 line-through'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                  title={r.correct ? 'Đúng' : r.orig ? `Đúng: "${r.orig}"` : 'Thêm'}
                >
                  {r.typed || r.orig}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-xs text-gray-500">
              <span><span className="inline-block w-3 h-3 rounded bg-green-100 mr-1 align-middle"></span>Đúng</span>
              <span><span className="inline-block w-3 h-3 rounded bg-red-100 mr-1 align-middle"></span>Sai</span>
              <span><span className="inline-block w-3 h-3 rounded bg-orange-100 mr-1 align-middle"></span>Dư</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={tryAgain} className="px-4 py-2.5 bg-orange-100 text-orange-700 rounded-xl font-semibold hover:bg-orange-200 transition-all active:scale-95">
              🔄 Thử lại
            </button>
            {sentIdx < sessionSentences.length - 1 ? (
              <button
                onClick={goNext}
                className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95"
              >
                Câu tiếp →
              </button>
            ) : allDone && fullDictation.length > SESSION_SIZE ? (
              <button
                onClick={handleNewSession}
                className="flex-1 py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95"
              >
                🔀 Bộ câu mới
              </button>
            ) : null}
          </div>

          {allDone && (
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-4 text-center text-white">
              <div className="text-2xl mb-1">🏆</div>
              <div className="font-bold">Hoàn thành {sessionSentences.length} câu!</div>
              <div className="text-sm opacity-90">Điểm trung bình: {avgScore}%</div>
            </div>
          )}
        </div>
      )}

      {/* Prev/Next navigation */}
      {phase !== 'result' && (
        <div className="flex justify-between mt-2">
          <button
            onClick={goPrev}
            disabled={sentIdx === 0}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            ← Câu trước
          </button>
          <button
            onClick={goNext}
            disabled={sentIdx >= sessionSentences.length - 1}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            Câu tiếp →
          </button>
        </div>
      )}
    </div>
  );
}
