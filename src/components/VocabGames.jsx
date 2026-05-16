import { useState, useEffect, useCallback, useRef } from 'react';
import SpeakButton from './SpeakButton';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function blankOut(example, word) {
  return example.replace(new RegExp(`\\b${word}\\b`, 'gi'), '_____');
}

function shortMeaning(m) {
  const first = m.split(';')[0].trim();
  return first.length > 32 ? first.slice(0, 32) + '…' : first;
}

// ── Shared result screen ────────────────────────────────────────────────────
function ResultScreen({ correct, total, bonus, onRestart }) {
  const pct = Math.round((correct / total) * 100);
  return (
    <div className="text-center space-y-4 py-2">
      <div className="text-5xl">{pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
      <div className="text-3xl font-bold text-blue-600">{correct}/{total}</div>
      {bonus && <div className="text-sm font-semibold text-indigo-500">{bonus}</div>}
      <div className={`font-semibold text-lg ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
        {pct === 100 ? 'Hoàn hảo! Tuyệt vời!' : pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Khá tốt! Cố lên!' : 'Cần luyện thêm!'}
      </div>
      <button
        onClick={onRestart}
        className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-all active:scale-95"
      >
        🔄 Chơi lại
      </button>
    </div>
  );
}

// ── Game Menu ────────────────────────────────────────────────────────────────
function GameMenu({ onSelect }) {
  const games = [
    { id: 'scramble', icon: '🔀', name: 'Xáo chữ cái', desc: 'Ghép lại các chữ cái thành từ đúng' },
    { id: 'matching', icon: '🔗', name: 'Nối cặp',      desc: 'Nối từ tiếng Anh với nghĩa tương ứng' },
    { id: 'hangman',  icon: '🎯', name: 'Đoán từ',       desc: 'Đoán từng chữ cái để tìm ra từ bí ẩn' },
    { id: 'speed',    icon: '⚡', name: 'Gõ nhanh',      desc: 'Gõ đúng từ trước khi đồng hồ về 0' },
  ];
  return (
    <div className="space-y-3">
      <div className="text-center text-sm text-gray-400">Chọn trò chơi</div>
      <div className="grid grid-cols-2 gap-3">
        {games.map(g => (
          <button
            key={g.id}
            onClick={() => onSelect(g.id)}
            className="bg-white border-2 border-gray-200 rounded-2xl p-4 text-left hover:border-indigo-400 hover:bg-indigo-50 transition-all active:scale-95 shadow-sm"
          >
            <div className="text-3xl mb-2">{g.icon}</div>
            <div className="font-bold text-gray-800 text-sm">{g.name}</div>
            <div className="text-xs text-gray-500 mt-1 leading-snug">{g.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Game 1: Word Scramble ────────────────────────────────────────────────────
function WordScramble({ vocabulary, onRestart }) {
  const TOTAL = Math.min(vocabulary.length, 10);
  const [words] = useState(() => shuffle(vocabulary).slice(0, TOTAL));
  const [wIdx, setWIdx] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [status, setStatus] = useState(null); // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { speak } = useTextToSpeech();

  const current = words[wIdx];

  const buildTiles = useCallback((word) =>
    shuffle(word.split('').map((char, i) => ({ char, id: i, used: false }))),
  []);

  useEffect(() => {
    setTiles(buildTiles(current.word));
    setAnswer([]);
    setStatus(null);
  }, [wIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTile = (tile) => {
    if (tile.used || status === 'correct') return;
    setTiles(prev => prev.map(t => t.id === tile.id ? { ...t, used: true } : t));
    const next = [...answer, tile];
    setAnswer(next);
    if (next.length === current.word.length) {
      const typed = next.map(t => t.char).join('');
      if (typed.toLowerCase() === current.word.toLowerCase()) {
        setStatus('correct');
        setScore(s => s + 1);
        speak(current.word);
      } else {
        setStatus('wrong');
        setTimeout(() => {
          setTiles(buildTiles(current.word));
          setAnswer([]);
          setStatus(null);
        }, 700);
      }
    }
  };

  const removeLast = () => {
    if (!answer.length || status === 'correct') return;
    const last = answer[answer.length - 1];
    setTiles(prev => prev.map(t => t.id === last.id ? { ...t, used: false } : t));
    setAnswer(prev => prev.slice(0, -1));
  };

  const next = () => {
    if (wIdx + 1 >= TOTAL) setFinished(true);
    else setWIdx(i => i + 1);
  };

  if (finished) return <ResultScreen correct={score} total={TOTAL} onRestart={onRestart} />;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-500">
        <span>Từ {wIdx + 1}/{TOTAL}</span>
        <span>Đúng: <span className="font-bold text-green-600">{score}</span></span>
      </div>

      <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-4 text-white text-center shadow">
        <div className="text-xs opacity-75 mb-1">Nghĩa</div>
        <div className="font-semibold leading-snug">{current.meaning}</div>
        <div className="text-xs italic opacity-80 mt-1">"{blankOut(current.example, current.word)}"</div>
      </div>

      {/* Answer tray */}
      <div className={`min-h-14 flex items-center justify-center gap-1.5 flex-wrap rounded-xl p-3 border-2 transition-all ${
        status === 'correct' ? 'border-green-400 bg-green-50' :
        status === 'wrong'   ? 'border-red-400 bg-red-50' :
                               'border-dashed border-gray-300 bg-gray-50'
      }`}>
        {answer.length === 0
          ? <span className="text-gray-300 text-sm">Bấm chữ cái để ghép từ...</span>
          : answer.map((t, i) => (
            <span key={i} className={`w-9 h-9 flex items-center justify-center rounded-lg text-lg font-bold border-2 ${
              status === 'correct' ? 'bg-green-500 border-green-500 text-white' :
              status === 'wrong'   ? 'bg-red-400 border-red-400 text-white' :
                                     'bg-white border-blue-300 text-blue-700'
            }`}>{t.char}</span>
          ))
        }
      </div>

      {/* Letter tiles */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tiles.map(t => (
          <button
            key={t.id}
            onClick={() => handleTile(t)}
            disabled={t.used || status === 'correct'}
            className={`w-10 h-10 rounded-lg text-lg font-bold border-2 transition-all active:scale-90 ${
              t.used
                ? 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed'
                : 'bg-white border-indigo-300 text-indigo-700 hover:bg-indigo-50 shadow-sm'
            }`}
          >{t.char}</button>
        ))}
      </div>

      <div className="flex gap-2">
        {status !== 'correct' && (
          <button
            onClick={removeLast}
            disabled={!answer.length}
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-200 disabled:opacity-40 transition-all"
          >
            ← Xoá
          </button>
        )}
        {status === 'correct' && (
          <button
            onClick={next}
            className="flex-1 py-2.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all active:scale-95"
          >
            {wIdx + 1 >= TOTAL ? 'Xem kết quả 🏁' : 'Từ tiếp theo →'}
          </button>
        )}
      </div>

      {status === 'correct' && (
        <div className="text-center text-green-600 font-semibold flex items-center justify-center gap-2">
          ✓ Chính xác! <SpeakButton text={current.word} size="sm" />
        </div>
      )}
    </div>
  );
}

// ── Game 2: Matching Pairs ───────────────────────────────────────────────────
function MatchingPairs({ vocabulary, onRestart }) {
  const PAIRS = Math.min(vocabulary.length, 5);
  const [words] = useState(() => shuffle(vocabulary).slice(0, PAIRS));
  const [leftItems]  = useState(() => words.map((w, i) => ({ id: i, text: w.word })));
  const [rightItems] = useState(() => shuffle(words.map((w, i) => ({ id: i, text: shortMeaning(w.meaning) }))));
  const [leftSel,  setLeftSel]  = useState(null);
  const [rightSel, setRightSel] = useState(null);
  const [matched,  setMatched]  = useState(new Set());
  const [wrongPair, setWrongPair] = useState(null);
  const [errors,   setErrors]   = useState(0);
  const [finished, setFinished] = useState(false);
  const { speak } = useTextToSpeech();

  useEffect(() => {
    if (matched.size === PAIRS && PAIRS > 0) {
      setTimeout(() => setFinished(true), 500);
    }
  }, [matched.size, PAIRS]);

  useEffect(() => {
    if (leftSel === null || rightSel === null) return;
    if (leftSel === rightSel) {
      setMatched(prev => new Set([...prev, leftSel]));
      speak(words[leftSel].word);
      setLeftSel(null);
      setRightSel(null);
    } else {
      setWrongPair({ left: leftSel, right: rightSel });
      setErrors(e => e + 1);
      setTimeout(() => {
        setWrongPair(null);
        setLeftSel(null);
        setRightSel(null);
      }, 700);
    }
  }, [leftSel, rightSel]); // eslint-disable-line react-hooks/exhaustive-deps

  const cls = (id, side) => {
    const isMatched   = matched.has(id);
    const isSelected  = side === 'left' ? leftSel === id : rightSel === id;
    const isWrong     = wrongPair && (side === 'left' ? wrongPair.left === id : wrongPair.right === id);
    if (isMatched)  return 'bg-green-100 border-green-400 text-green-700 cursor-default';
    if (isWrong)    return 'bg-red-100 border-red-400 text-red-700';
    if (isSelected) return 'bg-blue-500 border-blue-500 text-white shadow-lg scale-105';
    return 'bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
  };

  if (finished) return (
    <ResultScreen
      correct={PAIRS}
      total={PAIRS}
      bonus={errors === 0 ? '🌟 Không sai lần nào!' : `Số lần sai: ${errors}`}
      onRestart={onRestart}
    />
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-500">
        <span>Đã nối: {matched.size}/{PAIRS}</span>
        <span>Sai: <span className="text-red-500 font-bold">{errors}</span></span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-gray-400 text-center pb-1">Từ tiếng Anh</div>
          {leftItems.map(item => (
            <button
              key={item.id}
              onClick={() => !matched.has(item.id) && setLeftSel(item.id)}
              disabled={matched.has(item.id)}
              className={`w-full p-3 rounded-xl border-2 text-sm font-bold text-center transition-all duration-150 ${cls(item.id, 'left')}`}
            >
              {matched.has(item.id) && '✓ '}{item.text}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          <div className="text-xs font-semibold text-gray-400 text-center pb-1">Nghĩa</div>
          {rightItems.map(item => (
            <button
              key={item.id}
              onClick={() => !matched.has(item.id) && setRightSel(item.id)}
              disabled={matched.has(item.id)}
              className={`w-full p-3 rounded-xl border-2 text-xs font-medium text-center transition-all duration-150 leading-snug ${cls(item.id, 'right')}`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Game 3: Hangman ──────────────────────────────────────────────────────────
const FACES = ['😀', '😟', '😰', '😨', '😱', '😵', '💀'];
const KEYBOARD_ROWS = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m'],
];

function HangmanGame({ vocabulary, onRestart }) {
  const TOTAL = Math.min(vocabulary.length, 8);
  const MAX_WRONG = 6;
  const [words] = useState(() => shuffle(vocabulary).slice(0, TOTAL));
  const [wIdx, setWIdx] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [roundDone, setRoundDone] = useState(false);
  const [roundWon, setRoundWon] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { speak } = useTextToSpeech();

  const current = words[wIdx];
  const letters = current.word.toLowerCase().replace(/ /g, '').split('');
  const wrong   = [...guessed].filter(l => !current.word.toLowerCase().includes(l));
  const lives   = MAX_WRONG - wrong.length;
  const won     = letters.every(l => guessed.has(l));

  useEffect(() => {
    if (roundDone) return;
    if (won) {
      setRoundDone(true);
      setRoundWon(true);
      setScore(s => s + 1);
      speak(current.word);
    } else if (lives <= 0) {
      setRoundDone(true);
      setRoundWon(false);
    }
  }, [won, lives]); // eslint-disable-line react-hooks/exhaustive-deps

  const guess = (letter) => {
    if (guessed.has(letter) || roundDone) return;
    setGuessed(prev => new Set([...prev, letter]));
  };

  const nextWord = () => {
    if (wIdx + 1 >= TOTAL) setFinished(true);
    else {
      setWIdx(i => i + 1);
      setGuessed(new Set());
      setRoundDone(false);
      setRoundWon(false);
    }
  };

  if (finished) return <ResultScreen correct={score} total={TOTAL} onRestart={onRestart} />;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-500">
        <span>Từ {wIdx + 1}/{TOTAL}</span>
        <span>Điểm: <span className="font-bold text-blue-600">{score}</span></span>
      </div>

      {/* Lives */}
      <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl p-3">
        <span className="text-3xl">{FACES[Math.min(wrong.length, 6)]}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: MAX_WRONG }).map((_, i) => (
            <span key={i} className={`text-base ${i < lives ? 'opacity-100' : 'opacity-20'}`}>❤️</span>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center">
        <div className="text-xs text-indigo-400 mb-1">Gợi ý</div>
        <div className="text-sm text-indigo-800 font-medium leading-snug">{current.meaning}</div>
      </div>

      {/* Word blanks */}
      <div className="flex justify-center gap-1.5 flex-wrap">
        {current.word.split('').map((char, i) =>
          char === ' ' ? (
            <div key={i} className="w-5" />
          ) : (
            <div key={i} className={`w-8 h-10 flex items-center justify-center border-b-2 text-xl font-bold transition-all ${
              guessed.has(char.toLowerCase()) || (roundDone && !roundWon)
                ? guessed.has(char.toLowerCase())
                  ? 'text-green-600 border-green-400'
                  : 'text-red-500 border-red-300'
                : 'text-transparent border-gray-400'
            }`}>
              {guessed.has(char.toLowerCase()) || (roundDone && !roundWon) ? char : '_'}
            </div>
          )
        )}
      </div>

      {wrong.length > 0 && (
        <div className="text-center text-xs text-red-400">
          Sai: <span className="font-mono">{wrong.join('  ')}</span>
        </div>
      )}

      {/* Keyboard */}
      {!roundDone ? (
        <div className="space-y-1.5">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-1">
              {row.map(letter => (
                <button
                  key={letter}
                  onClick={() => guess(letter)}
                  disabled={guessed.has(letter)}
                  className={`w-8 h-9 rounded-lg text-sm font-bold transition-all active:scale-90 ${
                    guessed.has(letter)
                      ? current.word.toLowerCase().includes(letter)
                        ? 'bg-green-500 text-white border border-green-500'
                        : 'bg-gray-200 text-gray-400 border border-gray-200'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400 shadow-sm'
                  }`}
                >{letter}</button>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center space-y-3">
          <div className={`text-lg font-bold ${roundWon ? 'text-green-600' : 'text-red-500'}`}>
            {roundWon
              ? <span className="flex items-center justify-center gap-2">🎉 Đúng rồi! <SpeakButton text={current.word} size="sm" /></span>
              : `💔 Đáp án: "${current.word}"`
            }
          </div>
          <button
            onClick={nextWord}
            className="px-6 py-2.5 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-all active:scale-95"
          >
            {wIdx + 1 >= TOTAL ? 'Xem kết quả 🏁' : 'Từ tiếp theo →'}
          </button>
        </div>
      )}
    </div>
  );
}

// ── Game 4: Speed Typing ─────────────────────────────────────────────────────
function SpeedTyping({ vocabulary, onRestart }) {
  const TOTAL = Math.min(vocabulary.length, 10);
  const TIME  = 8;
  const [words] = useState(() => shuffle(vocabulary).slice(0, TOTAL));
  const [wIdx,      setWIdx]      = useState(0);
  const [input,     setInput]     = useState('');
  const [timeLeft,  setTimeLeft]  = useState(TIME);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score,     setScore]     = useState(0);
  const [streak,    setStreak]    = useState(0);
  const [totalPts,  setTotalPts]  = useState(0);
  const [finished,  setFinished]  = useState(false);
  const inputRef   = useRef(null);
  const timeRef    = useRef(TIME);
  const { speak }  = useTextToSpeech();

  const current = words[wIdx];

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    setTimeLeft(TIME);
    timeRef.current = TIME;
  }, [wIdx]);

  const handleSubmit = useCallback((timedOut = false) => {
    if (submitted) return;
    const typed   = timedOut ? '' : input.trim();
    const correct = !timedOut && typed.toLowerCase() === current.word.toLowerCase();
    const pts     = correct ? 10 + Math.floor(timeRef.current * 2) : 0;
    setIsCorrect(correct);
    setSubmitted(true);
    setTotalPts(p => p + pts);
    setScore(s => s + (correct ? 1 : 0));
    setStreak(str => correct ? str + 1 : 0);
    if (correct) speak(current.word);
  }, [submitted, input, current, speak]);

  useEffect(() => {
    if (submitted || finished) return;
    if (timeLeft <= 0) { handleSubmit(true); return; }
    const t = setTimeout(() => {
      const next = timeLeft - 1;
      timeRef.current = next;
      setTimeLeft(next);
    }, 1000);
    return () => clearTimeout(t);
  }, [timeLeft, submitted, finished, handleSubmit]);

  const handleNext = () => {
    if (wIdx + 1 >= TOTAL) setFinished(true);
    else {
      setWIdx(i => i + 1);
      setInput('');
      setSubmitted(false);
      setIsCorrect(false);
    }
  };

  if (finished) return (
    <ResultScreen
      correct={score}
      total={TOTAL}
      bonus={`Tổng điểm: ${totalPts}`}
      onRestart={onRestart}
    />
  );

  const timerPct = (timeLeft / TIME) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-500 items-center">
        <span>Từ {wIdx + 1}/{TOTAL}</span>
        <span className="flex items-center gap-2">
          {streak >= 3 && <span className="text-orange-500 font-bold animate-pulse">🔥 {streak}</span>}
          <span>Điểm: <span className="font-bold text-blue-600">{totalPts}</span></span>
        </span>
      </div>

      {/* Timer */}
      <div className="relative pb-1">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full ${timeLeft > 4 ? 'bg-green-400' : timeLeft > 2 ? 'bg-yellow-400' : 'bg-red-500'}`}
            style={{ width: `${timerPct}%`, transition: 'width 1s linear' }}
          />
        </div>
        <span className="absolute right-0 -top-5 text-xs font-bold text-gray-500">{timeLeft}s</span>
      </div>

      {/* Clue */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-5 text-white text-center shadow-lg">
        <div className="text-xs opacity-70 mb-1">Gõ từ tiếng Anh có nghĩa là:</div>
        <div className="text-xl font-bold leading-snug">{current.meaning}</div>
        <div className="text-xs italic opacity-70 mt-2">"{blankOut(current.example, current.word)}"</div>
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={e => !submitted && setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && !submitted && handleSubmit()}
        disabled={submitted}
        placeholder="Gõ từ... (Enter để kiểm tra)"
        className={`w-full px-4 py-3 text-lg font-semibold rounded-xl border-2 outline-none transition-all ${
          submitted
            ? isCorrect
              ? 'border-green-400 bg-green-50 text-green-700'
              : 'border-red-400 bg-red-50 text-red-700'
            : 'border-gray-300 focus:border-blue-400 bg-white'
        }`}
      />

      {submitted && (
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {isCorrect
            ? <><span>✓ Chính xác!</span><SpeakButton text={current.word} size="sm" /></>
            : <><span>✗ Đáp án:</span><span className="font-bold">{current.word}</span><SpeakButton text={current.word} size="sm" /></>
          }
        </div>
      )}

      {submitted && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all active:scale-95"
        >
          {wIdx + 1 >= TOTAL ? 'Xem kết quả 🏁' : 'Tiếp theo →'}
        </button>
      )}
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function VocabGames({ vocabulary }) {
  const [game,    setGame]    = useState(null);
  const [gameKey, setGameKey] = useState(0);

  const play = (id) => { setGame(id); setGameKey(k => k + 1); };

  return (
    <div className="space-y-3">
      {game && (
        <button
          onClick={() => setGame(null)}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-600 transition-colors"
        >
          ← Chọn trò chơi khác
        </button>
      )}
      {!game                  && <GameMenu onSelect={play} />}
      {game === 'scramble'    && <WordScramble  key={gameKey} vocabulary={vocabulary} onRestart={() => play('scramble')} />}
      {game === 'matching'    && <MatchingPairs key={gameKey} vocabulary={vocabulary} onRestart={() => play('matching')} />}
      {game === 'hangman'     && <HangmanGame   key={gameKey} vocabulary={vocabulary} onRestart={() => play('hangman')}  />}
      {game === 'speed'       && <SpeedTyping   key={gameKey} vocabulary={vocabulary} onRestart={() => play('speed')}    />}
    </div>
  );
}
