import { useState, useMemo } from 'react';
import ProgressBar from './ProgressBar';

const SESSION_SIZE = 5;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ErrorCorrection({ items }) {
  const [sessionKey, setSessionKey] = useState(0);
  const [idx, setIdx] = useState(0);
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [correct, setCorrect] = useState({});
  const [finished, setFinished] = useState(false);

  const session = useMemo(
    () => shuffle([...items]).slice(0, Math.min(SESSION_SIZE, items.length)),
    [items, sessionKey] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const item = session[idx];
  const correctCount = Object.values(correct).filter(Boolean).length;
  const pct = session.length > 0 ? Math.round((correctCount / session.length) * 100) : 0;

  const handleSubmit = () => {
    const userAns = (inputs[idx] || '').trim().toLowerCase();
    const isCorrect = userAns === item.answer.toLowerCase();
    setSubmitted(p => ({ ...p, [idx]: true }));
    setCorrect(p => ({ ...p, [idx]: isCorrect }));
  };

  const handleRestart = () => {
    setSessionKey(k => k + 1);
    setIdx(0);
    setInputs({});
    setSubmitted({});
    setCorrect({});
    setFinished(false);
  };

  const parts = item ? item.display.split('___') : [];
  const isAnswered = submitted[idx] !== undefined;

  if (finished) {
    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <div className="text-4xl">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
          <div className="text-3xl font-bold text-blue-600">{correctCount}/{session.length}</div>
          <div className={`font-semibold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
            {pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Tốt, cố thêm nhé!' : 'Hãy luyện thêm!'}
          </div>
          <ProgressBar value={correctCount} max={session.length} color="red" height="h-3" />
        </div>
        <div className="space-y-2">
          {session.map((it, i) => (
            <div key={i} className={`p-3 rounded-xl text-sm border ${correct[i] ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <span className="mr-2">{correct[i] ? '✅' : '❌'}</span>
              <span className="line-through text-gray-400 mr-2">{it.wrong}</span>
              <span className="text-green-700 font-semibold">→ {it.display.replace('___', `[${it.answer}]`)}</span>
            </div>
          ))}
        </div>
        <button onClick={handleRestart} className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all active:scale-95">
          🔄 Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Câu {idx + 1}/{session.length}
          {items.length > SESSION_SIZE && <span className="ml-1 text-xs text-gray-400">(chọn {SESSION_SIZE}/{items.length})</span>}
        </span>
        <span className="font-semibold text-green-600">✓ {correctCount}/{session.length} đúng</span>
      </div>
      <ProgressBar value={correctCount} max={session.length} color="red" height="h-2" />

      <div className="flex gap-1.5 flex-wrap">
        {session.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${i === idx ? 'ring-2 ring-red-400 ring-offset-1' : ''} ${
              submitted[i] !== undefined ? correct[i] ? 'bg-green-400 text-white' : 'bg-red-400 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}>{i + 1}</button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="text-sm text-gray-500 font-medium">❌ Câu sai:</div>
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 font-semibold line-through">
          {item.wrong}
        </div>

        <div className="text-sm text-gray-500 font-medium">✏️ Điền từ đúng vào chỗ trống:</div>
        <div className="text-lg font-semibold text-gray-800 leading-relaxed">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                isAnswered ? (
                  <span className={`inline-block px-3 py-0.5 rounded-lg mx-1 font-bold ${correct[idx] ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {inputs[idx] || '_'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={inputs[idx] || ''}
                    onChange={e => setInputs(p => ({ ...p, [idx]: e.target.value }))}
                    onKeyDown={e => e.key === 'Enter' && (inputs[idx] || '').trim() && handleSubmit()}
                    className="inline-block border-b-2 border-red-400 mx-1 px-2 py-0.5 text-red-700 font-bold outline-none bg-transparent text-center"
                    style={{ width: `${Math.max(80, (item.answer?.length || 5) * 14)}px` }}
                    placeholder="___"
                    autoFocus
                  />
                )
              )}
            </span>
          ))}
        </div>

        {isAnswered && (
          <div className={`p-3 rounded-xl ${correct[idx] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="font-semibold">{correct[idx] ? '✅ Đúng rồi!' : `❌ Đáp án đúng: "${item.answer}"`}</div>
            {item.hint && <div className="text-sm text-gray-500 mt-1">💡 {item.hint}</div>}
          </div>
        )}

        {!isAnswered ? (
          <button onClick={handleSubmit} disabled={!(inputs[idx] || '').trim()}
            className="w-full py-2.5 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all active:scale-95 disabled:opacity-50">
            Kiểm tra ✓
          </button>
        ) : (
          <button
            onClick={() => { if (idx < session.length - 1) setIdx(idx + 1); else setFinished(true); }}
            className="w-full py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95">
            {idx < session.length - 1 ? 'Câu tiếp →' : 'Xem kết quả 🏆'}
          </button>
        )}
      </div>

      <div className="flex gap-3">
        <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-sm">
          ← Câu trước
        </button>
        <button onClick={() => setIdx(Math.min(session.length - 1, idx + 1))} disabled={idx >= session.length - 1}
          className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-sm">
          Câu tiếp →
        </button>
      </div>
    </div>
  );
}

function OddOneOut({ items }) {
  const [sessionKey, setSessionKey] = useState(0);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState({});
  const [finished, setFinished] = useState(false);

  const session = useMemo(
    () => shuffle([...items]).slice(0, Math.min(SESSION_SIZE, items.length)),
    [items, sessionKey] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const item = session[idx];
  const correctCount = Object.entries(selected).filter(([i, w]) => w === session[i]?.answer).length;
  const pct = session.length > 0 ? Math.round((correctCount / session.length) * 100) : 0;

  const handlePick = (word) => {
    if (selected[idx] !== undefined) return;
    setSelected(p => ({ ...p, [idx]: word }));
  };

  const handleRestart = () => {
    setSessionKey(k => k + 1);
    setIdx(0);
    setSelected({});
    setFinished(false);
  };

  const isAnswered = selected[idx] !== undefined;
  const isCorrect = selected[idx] === item?.answer;

  if (finished) {
    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <div className="text-4xl">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
          <div className="text-3xl font-bold text-orange-600">{correctCount}/{session.length}</div>
          <div className={`font-semibold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
            {pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Tốt, cố thêm nhé!' : 'Hãy luyện thêm!'}
          </div>
          <ProgressBar value={correctCount} max={session.length} color="orange" height="h-3" />
        </div>
        <div className="space-y-2">
          {session.map((it, i) => {
            const userPick = selected[i];
            const isOk = userPick === it.answer;
            return (
              <div key={i} className={`p-3 rounded-xl text-sm border ${isOk ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <span className="mr-2">{isOk ? '✅' : '❌'}</span>
                <span className="font-semibold text-orange-700">{it.answer}</span>
                <span className="text-gray-500 ml-2 text-xs">— {it.reason}</span>
              </div>
            );
          })}
        </div>
        <button onClick={handleRestart} className="w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all active:scale-95">
          🔄 Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Câu {idx + 1}/{session.length}
          {items.length > SESSION_SIZE && <span className="ml-1 text-xs text-gray-400">(chọn {SESSION_SIZE}/{items.length})</span>}
        </span>
        <span className="font-semibold text-green-600">✓ {correctCount}/{session.length} đúng</span>
      </div>
      <ProgressBar value={correctCount} max={session.length} color="orange" height="h-2" />

      <div className="flex gap-1.5 flex-wrap">
        {session.map((_, i) => {
          const userPick = selected[i];
          const done = userPick !== undefined;
          const ok = done && userPick === session[i]?.answer;
          return (
            <button key={i} onClick={() => setIdx(i)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${i === idx ? 'ring-2 ring-orange-400 ring-offset-1' : ''} ${
                done ? ok ? 'bg-green-400 text-white' : 'bg-red-400 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}>{i + 1}</button>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="text-center text-gray-600 font-medium text-sm">🔍 Từ nào KHÔNG cùng nhóm với các từ còn lại?</div>
        <div className="grid grid-cols-2 gap-3">
          {item.words.map((word, i) => {
            let cls = 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50';
            if (isAnswered) {
              if (word === item.answer) cls = 'bg-green-500 border-green-500 text-white';
              else if (word === selected[idx]) cls = 'bg-red-500 border-red-500 text-white';
              else cls = 'bg-gray-100 border-gray-200 text-gray-400';
            }
            return (
              <button key={i} onClick={() => handlePick(word)} disabled={isAnswered}
                className={`${cls} rounded-xl p-4 text-base font-semibold text-center transition-all duration-200 active:scale-95 disabled:cursor-not-allowed`}>
                {word}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`p-3 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="font-semibold">{isCorrect ? `✅ Đúng! "${item.answer}" là từ lạc!` : `❌ Đáp án đúng: "${item.answer}"`}</div>
            <div className="text-sm text-gray-600 mt-1">💡 {item.reason}</div>
          </div>
        )}

        {isAnswered && (
          <button
            onClick={() => { if (idx < session.length - 1) setIdx(idx + 1); else setFinished(true); }}
            className="w-full py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95">
            {idx < session.length - 1 ? 'Câu tiếp →' : 'Xem kết quả 🏆'}
          </button>
        )}
      </div>

      <div className="flex gap-3">
        <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-sm">
          ← Câu trước
        </button>
        <button onClick={() => setIdx(Math.min(session.length - 1, idx + 1))} disabled={idx >= session.length - 1}
          className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-sm">
          Câu tiếp →
        </button>
      </div>
    </div>
  );
}

export default function ReviewDrills({ unit }) {
  const review = unit.review;
  const [mode, setMode] = useState('error');

  if (!review) return null;

  const hasError = review.errorCorrection?.length > 0;
  const hasOdd = review.oddOneOut?.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {hasError && (
          <button
            onClick={() => setMode('error')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${mode === 'error' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            🔧 Sửa lỗi
          </button>
        )}
        {hasOdd && (
          <button
            onClick={() => setMode('odd')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${mode === 'odd' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            🔍 Từ lạc
          </button>
        )}
      </div>

      {mode === 'error' && hasError && (
        <ErrorCorrection key={`ec-${unit.id}`} items={review.errorCorrection} />
      )}
      {mode === 'odd' && hasOdd && (
        <OddOneOut key={`oo-${unit.id}`} items={review.oddOneOut} />
      )}
    </div>
  );
}
