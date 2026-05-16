import { useState } from 'react';
import SpeakButton from './SpeakButton';
import ProgressBar from './ProgressBar';

export default function ReadingComprehension({ unit, progress, onUpdateProgress }) {
  const reading = unit.reading;

  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [shortInput, setShortInput] = useState('');
  const [submitted, setSubmitted] = useState({});
  const [finished, setFinished] = useState(false);

  if (!reading) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-4xl mb-3">📖</div>
        <p>Chưa có bài đọc cho unit này.</p>
      </div>
    );
  }

  const questions = reading.questions;
  const currentQ = questions[qIdx];

  const isAnswered = (i) => submitted[i] !== undefined;
  const correctCount = Object.entries(submitted).filter(([i, v]) => v).length;

  const checkAnswer = (userAnswer) => {
    const q = questions[qIdx];
    let correct = false;

    if (q.type === 'multiple_choice') {
      correct = userAnswer === q.answer;
    } else if (q.type === 'true_false') {
      correct = userAnswer === q.answer;
    } else if (q.type === 'short_answer') {
      const ua = userAnswer.trim().toLowerCase();
      const ans = q.answer.trim().toLowerCase();
      // Accept partial match: any word in correct answer
      correct = ua === ans || ans.split(/\s+/).some(word => ua.includes(word));
    }

    setAnswers(prev => ({ ...prev, [qIdx]: userAnswer }));
    setSubmitted(prev => ({ ...prev, [qIdx]: correct }));
    setShortInput('');
  };

  const goToQ = (i) => {
    setQIdx(i);
    setShortInput('');
  };

  const handleFinish = () => setFinished(true);

  const handleRestart = () => {
    setQIdx(0);
    setAnswers({});
    setSubmitted({});
    setShortInput('');
    setFinished(false);
  };

  const pct = Math.round((correctCount / questions.length) * 100);

  if (finished) {
    return (
      <div className="space-y-5">
        <div className="text-center space-y-3">
          <div className="text-5xl">
            {pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Kết quả đọc hiểu</h3>
          <div className="text-4xl font-bold text-blue-600">{correctCount}/{questions.length}</div>
          <div className={`text-lg font-semibold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
            {pct >= 80 ? 'Xuất sắc! Em hiểu bài rất tốt!' : pct >= 50 ? 'Tốt! Đọc lại để hiểu hơn nhé!' : 'Hãy đọc lại bài và thử lần nữa!'}
          </div>
          <ProgressBar value={correctCount} max={questions.length} color="blue" height="h-3" />
        </div>

        {/* Review answers */}
        <div className="space-y-2">
          {questions.map((q, i) => (
            <div key={i} className={`flex items-start gap-2 p-3 rounded-xl text-sm ${submitted[i] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <span className="text-lg">{submitted[i] ? '✅' : '❌'}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{q.question}</div>
                {!submitted[i] && (
                  <div className="text-gray-500 mt-0.5">
                    Đáp án đúng: <span className="font-semibold text-green-700">
                      {q.type === 'true_false' ? (q.answer ? 'Đúng' : 'Sai') : String(q.answer)}
                    </span>
                  </div>
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
      {/* Score tracker */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Câu {qIdx + 1}/{questions.length}</span>
        <span className="font-semibold text-green-600">✓ {correctCount}/{questions.length} đúng</span>
      </div>
      <ProgressBar value={correctCount} max={questions.length} color="blue" height="h-2" />

      {/* Question dots */}
      <div className="flex gap-1.5 flex-wrap">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => goToQ(i)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
              i === qIdx ? 'ring-2 ring-blue-400 ring-offset-1' : ''
            } ${
              isAnswered(i)
                ? submitted[i] ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Reading passage */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-blue-800 text-base">{reading.title}</h3>
          <SpeakButton text={reading.passage} size="md" label="Đọc bài" />
        </div>
        <div className="max-h-48 overflow-y-auto text-sm text-gray-700 leading-relaxed whitespace-pre-line scrollbar-thin">
          {reading.passage}
        </div>
      </div>

      {/* Current question */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <div className="flex items-start gap-2">
          <p className="text-base font-semibold text-gray-800 leading-relaxed flex-1">{currentQ.question}</p>
          <SpeakButton text={currentQ.question} size="sm" className="flex-shrink-0" />
        </div>

        {/* Multiple choice */}
        {currentQ.type === 'multiple_choice' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, i) => {
              let cls = 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50';
              if (isAnswered(qIdx)) {
                if (opt === currentQ.answer) cls = 'bg-green-500 border-green-500 text-white';
                else if (opt === answers[qIdx]) cls = 'bg-red-500 border-red-500 text-white';
                else cls = 'bg-gray-100 border-gray-200 text-gray-400';
              }
              return (
                <button
                  key={i}
                  onClick={() => !isAnswered(qIdx) && checkAnswer(opt)}
                  disabled={isAnswered(qIdx)}
                  className={`${cls} rounded-xl p-3 text-sm font-semibold text-left transition-all duration-200 active:scale-95 disabled:cursor-default`}
                >
                  <span className="text-gray-400 mr-2">{['A', 'B', 'C', 'D'][i]}.</span>{opt}
                </button>
              );
            })}
          </div>
        )}

        {/* True / False */}
        {currentQ.type === 'true_false' && (
          <div className="flex gap-4">
            {[true, false].map((val) => {
              let cls = val
                ? 'bg-white border-2 border-green-300 text-green-700 hover:bg-green-50'
                : 'bg-white border-2 border-red-300 text-red-700 hover:bg-red-50';
              if (isAnswered(qIdx)) {
                if (val === currentQ.answer) cls = val ? 'bg-green-500 border-green-500 text-white' : 'bg-green-500 border-green-500 text-white';
                else if (val === answers[qIdx]) cls = 'bg-red-500 border-red-500 text-white';
                else cls = 'bg-gray-100 border-gray-200 text-gray-400';
              }
              return (
                <button
                  key={String(val)}
                  onClick={() => !isAnswered(qIdx) && checkAnswer(val)}
                  disabled={isAnswered(qIdx)}
                  className={`${cls} flex-1 py-4 rounded-xl text-lg font-bold transition-all duration-200 active:scale-95 disabled:cursor-default`}
                >
                  {val ? '✓ Đúng' : '✗ Sai'}
                </button>
              );
            })}
          </div>
        )}

        {/* Short answer */}
        {currentQ.type === 'short_answer' && (
          <div className="space-y-3">
            {isAnswered(qIdx) ? (
              <div className={`p-3 rounded-xl ${submitted[qIdx] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="font-semibold">
                  {submitted[qIdx] ? '✅ Đúng rồi!' : `❌ Đáp án đúng: "${currentQ.answer}"`}
                </div>
                <div className="text-sm text-gray-500 mt-1">Câu trả lời của bạn: "{answers[qIdx]}"</div>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={shortInput}
                  onChange={e => setShortInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && shortInput.trim() && checkAnswer(shortInput)}
                  className="flex-1 border-2 border-blue-300 rounded-xl px-4 py-2 text-base focus:outline-none focus:border-blue-500"
                  placeholder="Gõ câu trả lời..."
                  autoFocus
                />
                <button
                  onClick={() => shortInput.trim() && checkAnswer(shortInput)}
                  disabled={!shortInput.trim()}
                  className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50"
                >
                  OK
                </button>
              </div>
            )}
          </div>
        )}

        {/* Feedback */}
        {isAnswered(qIdx) && (
          <div className={`text-sm font-semibold ${submitted[qIdx] ? 'text-green-600' : 'text-red-600'}`}>
            {submitted[qIdx] ? '🎉 Chính xác!' : '💡 Xem lại đoạn văn và thử lần sau!'}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => goToQ(Math.max(0, qIdx - 1))}
          disabled={qIdx === 0}
          className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Câu trước
        </button>
        {qIdx < questions.length - 1 ? (
          <button
            onClick={() => goToQ(qIdx + 1)}
            className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95"
          >
            Câu tiếp →
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="flex-1 py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95"
          >
            Xem kết quả 🏆
          </button>
        )}
      </div>
    </div>
  );
}
