import { useState, useEffect, useMemo } from 'react';
import SpeakButton from './SpeakButton';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import ProgressBar from './ProgressBar';

const SESSION_SIZE = 8;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ListenFill({ unit, progress, onUpdateProgress }) {
  const fullPool = unit.listenFill;

  const [sessionKey, setSessionKey] = useState(0);
  const [itemIdx, setItemIdx] = useState(0);
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [correct, setCorrect] = useState({});
  const [finished, setFinished] = useState(false);
  const { speak } = useTextToSpeech();

  const items = useMemo(() => {
    return shuffle([...fullPool]).slice(0, Math.min(SESSION_SIZE, fullPool.length));
  }, [unit.id, sessionKey]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-4xl mb-3">🎧</div>
        <p>Chưa có bài nghe điền cho unit này.</p>
      </div>
    );
  }

  const currentItem = items[itemIdx];

  // Auto-play audio when item changes
  useEffect(() => {
    speak(currentItem.audio, { rate: 0.78 });
  }, [itemIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  const correctCount = Object.values(correct).filter(Boolean).length;
  const pct = items.length > 0 ? Math.round((correctCount / items.length) * 100) : 0;

  const handleSubmit = () => {
    const userAnswer = (inputs[itemIdx] || '').trim().toLowerCase();
    const answers = currentItem.answers.map(a => a.trim().toLowerCase());
    const isCorrect = answers.includes(userAnswer);
    setSubmitted(prev => ({ ...prev, [itemIdx]: true }));
    setCorrect(prev => ({ ...prev, [itemIdx]: isCorrect }));
  };

  const goToItem = (i) => {
    setItemIdx(i);
  };

  const handleFinish = () => setFinished(true);

  const handleRestart = () => {
    setSessionKey(k => k + 1);
    setItemIdx(0);
    setInputs({});
    setSubmitted({});
    setCorrect({});
    setFinished(false);
  };

  // Parse display string into parts split by ___
  const parts = currentItem.display.split('___');

  const isCurrentAnswered = submitted[itemIdx] !== undefined;

  if (finished) {
    return (
      <div className="space-y-5">
        <div className="text-center space-y-3">
          <div className="text-5xl">
            {pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Kết quả nghe điền</h3>
          <div className="text-4xl font-bold text-blue-600">{correctCount}/{items.length}</div>
          <div className={`text-lg font-semibold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
            {pct >= 80 ? 'Xuất sắc! Tai nghe rất tốt!' : pct >= 50 ? 'Tốt! Luyện thêm nhé!' : 'Hãy nghe lại và thử lần nữa!'}
          </div>
          <ProgressBar value={correctCount} max={items.length} color="blue" height="h-3" />
        </div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className={`flex items-start gap-2 p-3 rounded-xl text-sm ${correct[i] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <span className="text-lg">{correct[i] ? '✅' : '❌'}</span>
              <div className="flex-1">
                <div className="text-gray-700">{item.display.replace('___', `[${item.answers[0]}]`)}</div>
                {!correct[i] && inputs[i] && (
                  <div className="text-gray-500 text-xs mt-0.5">Bạn điền: "{inputs[i]}"</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95"
        >
          🔄 Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">
          Câu {itemIdx + 1}/{items.length}
          {fullPool.length > SESSION_SIZE && (
            <span className="ml-1 text-xs text-gray-400">(chọn {SESSION_SIZE}/{fullPool.length})</span>
          )}
        </span>
        <span className="font-semibold text-green-600">✓ {correctCount}/{items.length} đúng</span>
      </div>
      <ProgressBar value={correctCount} max={items.length} color="blue" height="h-2" />

      {/* Progress dots */}
      <div className="flex gap-1.5 flex-wrap">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToItem(i)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
              i === itemIdx ? 'ring-2 ring-blue-400 ring-offset-1' : ''
            } ${
              submitted[i] !== undefined
                ? correct[i] ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Listen & Fill card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
        {/* Audio controls */}
        <div className="flex gap-3 flex-wrap">
          <SpeakButton
            text={currentItem.audio}
            size="lg"
            rate={0.78}
            label="Nghe câu"
          />
          <button
            onClick={() => speak(currentItem.audio, { rate: 0.65 })}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-semibold text-sm hover:bg-indigo-100 transition-all active:scale-95"
          >
            🐢 Nghe chậm
          </button>
        </div>

        {/* Sentence with blank */}
        <div className="text-lg font-semibold text-gray-800 leading-relaxed">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                isCurrentAnswered ? (
                  <span className={`inline-block px-3 py-0.5 rounded-lg mx-1 font-bold ${
                    correct[itemIdx] ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                  }`}>
                    {inputs[itemIdx] || '_'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={inputs[itemIdx] || ''}
                    onChange={e => setInputs(prev => ({ ...prev, [itemIdx]: e.target.value }))}
                    onKeyDown={e => e.key === 'Enter' && (inputs[itemIdx] || '').trim() && handleSubmit()}
                    className="inline-block border-b-2 border-blue-400 mx-1 px-2 py-0.5 text-blue-700 font-bold outline-none bg-transparent text-center"
                    style={{ width: `${Math.max(80, (currentItem.answers[0]?.length || 6) * 14)}px` }}
                    placeholder="___"
                    autoFocus
                  />
                )
              )}
            </span>
          ))}
        </div>

        {/* Feedback */}
        {isCurrentAnswered && (
          <div className={`p-3 rounded-xl ${correct[itemIdx] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="font-semibold">
              {correct[itemIdx] ? '✅ Đúng rồi!' : `❌ Đáp án đúng: "${currentItem.answers[0]}"`}
            </div>
            {!correct[itemIdx] && (
              <div className="text-sm text-gray-500 mt-1">Câu hoàn chỉnh: {currentItem.audio}</div>
            )}
          </div>
        )}

        {/* Submit / Next */}
        {!isCurrentAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={!(inputs[itemIdx] || '').trim()}
            className="w-full py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50"
          >
            Kiểm tra ✓
          </button>
        ) : (
          <button
            onClick={() => {
              if (itemIdx < items.length - 1) {
                goToItem(itemIdx + 1);
              } else {
                handleFinish();
              }
            }}
            className="w-full py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95"
          >
            {itemIdx < items.length - 1 ? 'Câu tiếp →' : 'Xem kết quả 🏆'}
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => goToItem(Math.max(0, itemIdx - 1))}
          disabled={itemIdx === 0}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
        >
          ← Câu trước
        </button>
        <button
          onClick={() => goToItem(Math.min(items.length - 1, itemIdx + 1))}
          disabled={itemIdx >= items.length - 1}
          className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
        >
          Câu tiếp →
        </button>
      </div>
    </div>
  );
}
