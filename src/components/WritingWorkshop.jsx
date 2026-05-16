import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'ww5_class_board';

function getBoard() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function saveBoard(board) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
}

export default function WritingWorkshop({ unit, progress, onUpdateProgress }) {
  const [subTab, setSubTab] = useState('template'); // 'template' | 'board'
  const [text, setText] = useState('');
  const [timerMin, setTimerMin] = useState(8);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [board, setBoard] = useState(getBoard);
  const [promptIdx, setPromptIdx] = useState(0);
  const intervalRef = useRef(null);

  const writing = unit.writing;
  const upKey = `unit${unit.id}`;
  const up = progress[upKey] || {};

  // Timer countdown
  useEffect(() => {
    if (!timerActive) return;
    if (timeLeft <= 0) {
      setTimerActive(false);
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setTimerActive(false);
          clearInterval(intervalRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [timerActive]);

  const startTimer = () => {
    setTimeLeft(timerMin * 60);
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSubmit = () => {
    if (!text.trim()) return;
    stopTimer();
    const entry = {
      id: Date.now(),
      unitId: unit.id,
      unitTitle: unit.title,
      prompt: writing.prompts[promptIdx],
      text: text.trim(),
      timestamp: new Date().toLocaleString('vi-VN'),
      likes: 0,
    };
    const newBoard = [entry, ...board];
    setBoard(newBoard);
    saveBoard(newBoard);
    onUpdateProgress(unit.id, { writingsCount: (up.writingsCount || 0) + 1 });
    setSubmitted(true);
  };

  const handleLike = (id) => {
    const updated = board.map(b => b.id === id ? { ...b, likes: (b.likes || 0) + 1 } : b);
    setBoard(updated);
    saveBoard(updated);
  };

  const handleDeleteEntry = (id) => {
    const updated = board.filter(b => b.id !== id);
    setBoard(updated);
    saveBoard(updated);
  };

  const handleNewWriting = () => {
    setText('');
    setSubmitted(false);
    setTimeLeft(null);
    setTimerActive(false);
  };

  const timerPct = timeLeft !== null ? (timeLeft / (timerMin * 60)) * 100 : 100;
  const timerColor = timerPct > 50 ? 'text-green-600' : timerPct > 20 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="space-y-4">
      {/* Sub-tabs */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
        <button
          onClick={() => setSubTab('template')}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            subTab === 'template' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          ✏️ Viết bài
        </button>
        <button
          onClick={() => setSubTab('board')}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            subTab === 'board' ? 'bg-white shadow text-purple-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          📋 Bảng lớp ({board.length})
        </button>
      </div>

      {/* WRITE tab */}
      {subTab === 'template' && (
        <div className="space-y-4">
          {!submitted ? (
            <>
              {/* Prompt selector */}
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="text-xs font-semibold text-purple-700 mb-2">📝 Chọn đề bài:</div>
                <div className="space-y-2">
                  {writing.prompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setPromptIdx(i)}
                      className={`w-full text-left p-2.5 rounded-lg text-sm transition-all ${
                        promptIdx === i
                          ? 'bg-purple-500 text-white font-semibold'
                          : 'bg-white text-gray-700 hover:bg-purple-100 border border-purple-200'
                      }`}
                    >
                      {i + 1}. {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Template */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-xs font-semibold text-blue-700 mb-2">📋 Gợi ý cấu trúc: "{writing.title}"</div>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{writing.template}</pre>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-200">
                <span className="text-sm text-gray-600 font-semibold">⏱ Thời gian:</span>
                <div className="flex gap-2">
                  {[5, 8, 10].map(m => (
                    <button
                      key={m}
                      onClick={() => { setTimerMin(m); if (timerActive) { stopTimer(); } setTimeLeft(null); }}
                      className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
                        timerMin === m ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {m} phút
                    </button>
                  ))}
                </div>
                {timeLeft === null ? (
                  <button onClick={startTimer} className="ml-auto px-4 py-1.5 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-all active:scale-95">
                    Bắt đầu ▶
                  </button>
                ) : (
                  <div className="ml-auto flex items-center gap-2">
                    <span className={`text-2xl font-mono font-bold ${timerColor}`}>
                      {formatTime(timeLeft)}
                    </span>
                    <button onClick={timerActive ? stopTimer : startTimer} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-300 transition-all">
                      {timerActive ? '⏸' : '▶'}
                    </button>
                  </div>
                )}
              </div>

              {/* Timer bar */}
              {timeLeft !== null && (
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all ${timerPct > 50 ? 'bg-green-400' : timerPct > 20 ? 'bg-yellow-400' : 'bg-red-500'}`}
                    style={{ width: `${timerPct}%` }}
                  />
                </div>
              )}

              {/* Textarea */}
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                rows={10}
                className="w-full border-2 border-gray-200 rounded-xl p-4 text-base focus:outline-none focus:border-blue-400 resize-none leading-relaxed"
                placeholder={`Viết bài về: ${writing.prompts[promptIdx]}\n\nSử dụng gợi ý cấu trúc ở trên...`}
              />
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>{text.split(/\s+/).filter(Boolean).length} từ</span>
                <span>{text.length} ký tự</span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={text.trim().length < 20}
                className="w-full py-3 bg-blue-500 text-white rounded-xl font-bold text-base hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Nộp bài 📤
              </button>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-5xl">🎉</div>
              <h3 className="text-xl font-bold text-gray-800">Nộp bài thành công!</h3>
              <p className="text-gray-500">Bài viết của bạn đã được lưu vào Bảng lớp.</p>
              <div className="flex gap-3 justify-center">
                <button onClick={handleNewWriting} className="px-5 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95">
                  Viết bài mới
                </button>
                <button onClick={() => setSubTab('board')} className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all active:scale-95">
                  Xem bảng lớp 📋
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CLASS BOARD tab */}
      {subTab === 'board' && (
        <div className="space-y-4">
          {board.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <div className="text-4xl mb-3">📝</div>
              <p>Chưa có bài viết nào. Hãy viết bài đầu tiên!</p>
            </div>
          ) : (
            board.map(entry => (
              <div key={entry.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                      Unit {entry.unitId}: {entry.unitTitle}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{entry.timestamp}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="text-gray-300 hover:text-red-400 text-sm transition-colors"
                    title="Xóa"
                  >
                    ✕
                  </button>
                </div>
                {entry.prompt && (
                  <p className="text-xs text-purple-600 italic mb-2">📝 {entry.prompt}</p>
                )}
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{entry.text}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {entry.text.split(/\s+/).filter(Boolean).length} từ
                  </span>
                  <button
                    onClick={() => handleLike(entry.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 text-pink-600 rounded-xl text-sm font-semibold hover:bg-pink-100 transition-all active:scale-95"
                  >
                    👍 {entry.likes || 0}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
