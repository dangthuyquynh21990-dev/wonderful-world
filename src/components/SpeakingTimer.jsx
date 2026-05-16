import { useState, useEffect, useRef } from 'react';
import SpeakButton from './SpeakButton';

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function SpeakingTimer({ unit, onBack }) {
  const [promptIdx, setPromptIdx] = useState(0);
  const [duration, setDuration] = useState(30);
  const [timeLeft, setTimeLeft] = useState(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  const prompts = unit.speaking;
  const pronunciation = unit.pronunciation;

  const start = () => {
    setTimeLeft(duration);
    setActive(true);
    setDone(false);
  };

  const stop = () => {
    setActive(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTimeLeft(null);
    setDone(false);
  };

  useEffect(() => {
    if (!active) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          setActive(false);
          setDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const progress = timeLeft !== null ? (1 - timeLeft / duration) : 0;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  const timerColor = !active && done ? '#22c55e'
    : timeLeft === null ? '#3b82f6'
    : timeLeft > duration * 0.5 ? '#3b82f6'
    : timeLeft > duration * 0.2 ? '#f59e0b'
    : '#ef4444';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="px-3 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
        >
          ← Quay lại
        </button>
        <div>
          <h2 className="text-lg font-bold text-gray-800">🎤 Luyện nói – {unit.title}</h2>
          <p className="text-xs text-gray-500">Unit {unit.id}</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Prompt */}
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-indigo-500">
          <div className="text-xs text-indigo-600 font-semibold mb-2 uppercase tracking-wide">
            Câu hỏi {promptIdx + 1}/{prompts.length}
          </div>
          <div className="flex items-start gap-3">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed flex-1">{prompts[promptIdx]}</p>
            <SpeakButton text={prompts[promptIdx]} size="md" label="Đọc đề" className="flex-shrink-0" />
          </div>
        </div>

        {/* Prompt navigation */}
        <div className="flex gap-2 flex-wrap">
          {prompts.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPromptIdx(i); reset(); }}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                promptIdx === i ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Timer duration selector */}
        {timeLeft === null && (
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="text-sm font-semibold text-gray-600 mb-3">⏱ Chọn thời gian:</div>
            <div className="flex gap-3 justify-center">
              {[30, 45, 60].map(s => (
                <button
                  key={s}
                  onClick={() => setDuration(s)}
                  className={`px-5 py-3 rounded-xl font-bold text-base transition-all active:scale-95 ${
                    duration === s ? 'bg-indigo-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s}s
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Timer circle */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <svg width="160" height="160" className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="80" cy="80" r={RADIUS}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="10"
              />
              {/* Progress circle */}
              <circle
                cx="80" cy="80" r={RADIUS}
                fill="none"
                stroke={timerColor}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-gray-800" style={{ color: timerColor }}>
                {done ? '✓' : timeLeft !== null ? timeLeft : duration}
              </span>
              <span className="text-sm text-gray-500">{done ? 'Xong!' : 'giây'}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            {timeLeft === null ? (
              <button
                onClick={start}
                className="px-8 py-3 bg-indigo-500 text-white rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all active:scale-95 shadow-md"
              >
                ▶ Bắt đầu
              </button>
            ) : active ? (
              <button
                onClick={stop}
                className="px-8 py-3 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all active:scale-95 shadow-md"
              >
                ⏸ Dừng
              </button>
            ) : done ? (
              <button
                onClick={reset}
                className="px-8 py-3 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all active:scale-95 shadow-md"
              >
                🔄 Lại
              </button>
            ) : (
              <>
                <button onClick={() => setActive(true)} className="px-6 py-2.5 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-all active:scale-95">
                  ▶ Tiếp
                </button>
                <button onClick={reset} className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-all active:scale-95">
                  🔄 Reset
                </button>
              </>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200">
          <div className="text-sm font-bold text-yellow-800 mb-2">💡 Gợi ý khi nói:</div>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Nói rõ ràng, không quá nhanh hay quá chậm</li>
            <li>• Dùng các từ nối: First, Then, Also, Because...</li>
            <li>• Nhìn vào người nghe khi nói</li>
            <li>• Không cần hoàn hảo – hãy mạnh dạn nói!</li>
          </ul>
        </div>

        {/* Pronunciation tips */}
        {pronunciation && (
          <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-200">
            <div className="text-sm font-bold text-indigo-800 mb-2">🔊 Phát âm: {pronunciation.focus}</div>
            <div className="flex flex-wrap gap-2">
              {pronunciation.words.map((w, i) => (
                <SpeakButton
                  key={i}
                  text={w.replace(/\/.+\//, '').replace(/[↗↘.]/g, '').trim()}
                  label={w}
                  size="sm"
                  className="px-3 py-1 bg-white rounded-lg text-sm font-mono text-indigo-700 border border-indigo-200 w-auto h-auto"
                />
              ))}
            </div>
            {pronunciation.chant && (
              <pre className="mt-3 text-xs text-indigo-600 whitespace-pre-wrap bg-white rounded-lg p-2 border border-indigo-100">{pronunciation.chant}</pre>
            )}
          </div>
        )}

        {/* Next prompt */}
        <button
          onClick={() => { setPromptIdx((promptIdx + 1) % prompts.length); reset(); }}
          className="w-full py-3 bg-white border-2 border-indigo-300 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-all active:scale-95"
        >
          Câu tiếp theo →
        </button>
      </div>
    </div>
  );
}
