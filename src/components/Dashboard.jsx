import { units } from '../data/curriculum';
import ProgressBar from './ProgressBar';

const colorMap = {
  blue:    { bg: "bg-blue-100",   border: "border-blue-300",   text: "text-blue-700",   btn: "bg-blue-500 hover:bg-blue-600" },
  purple:  { bg: "bg-purple-100", border: "border-purple-300", text: "text-purple-700", btn: "bg-purple-500 hover:bg-purple-600" },
  green:   { bg: "bg-green-100",  border: "border-green-300",  text: "text-green-700",  btn: "bg-green-500 hover:bg-green-600" },
  yellow:  { bg: "bg-yellow-100", border: "border-yellow-300", text: "text-yellow-700", btn: "bg-yellow-400 hover:bg-yellow-500" },
  red:     { bg: "bg-red-100",    border: "border-red-300",    text: "text-red-700",    btn: "bg-red-500 hover:bg-red-600" },
  orange:  { bg: "bg-orange-100", border: "border-orange-300", text: "text-orange-700", btn: "bg-orange-500 hover:bg-orange-600" },
  teal:    { bg: "bg-teal-100",   border: "border-teal-300",   text: "text-teal-700",   btn: "bg-teal-500 hover:bg-teal-600" },
  indigo:  { bg: "bg-indigo-100", border: "border-indigo-300", text: "text-indigo-700", btn: "bg-indigo-500 hover:bg-indigo-600" },
  cyan:    { bg: "bg-cyan-100",   border: "border-cyan-300",   text: "text-cyan-700",   btn: "bg-cyan-500 hover:bg-cyan-600" },
  pink:    { bg: "bg-pink-100",   border: "border-pink-300",   text: "text-pink-700",   btn: "bg-pink-500 hover:bg-pink-600" },
  emerald: { bg: "bg-emerald-100",border: "border-emerald-300",text: "text-emerald-700",btn: "bg-emerald-500 hover:bg-emerald-600" },
  sky:     { bg: "bg-sky-100",    border: "border-sky-300",    text: "text-sky-700",    btn: "bg-sky-500 hover:bg-sky-600" },
};

function getUnitProgress(unit, progress) {
  const up = progress[`unit${unit.id}`] || {};
  const vocabTotal = unit.vocabulary.length;
  const vocabDone = (up.vocabKnown || []).length;
  const grammarTotal = unit.grammar.length;
  const grammarDone = (up.grammarDone || []).filter(Boolean).length;
  const dictationTotal = unit.dictation.length;
  const dictationDone = (up.dictationScores || []).length;
  const writingDone = up.writingsCount || 0;
  const total = vocabTotal + grammarTotal + dictationTotal + 1;
  const done = vocabDone + grammarDone + dictationDone + Math.min(writingDone, 1);
  return { pct: Math.round((done / total) * 100), done, total, vocabDone, vocabTotal, grammarDone, grammarTotal, dictationDone, dictationTotal };
}

export default function Dashboard({ onSelectUnit, progress }) {
  const totalVocab = units.reduce((acc, u) => {
    const up = progress[`unit${u.id}`] || {};
    return acc + (up.vocabKnown || []).length;
  }, 0);
  const totalExercises = units.reduce((acc, u) => {
    const up = progress[`unit${u.id}`] || {};
    const g = (up.grammarDone || []).filter(Boolean).length;
    const d = (up.dictationScores || []).length;
    return acc + g + d;
  }, 0);
  const completedUnits = units.filter(u => getUnitProgress(u, progress).pct >= 80).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🌍</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Wonderful World 5</h1>
              <p className="text-sm text-gray-500">English for Grade 5 – Tiếng Anh Lớp 5</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{totalVocab}</div>
              <div className="text-xs text-gray-500">Từ đã học</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{totalExercises}</div>
              <div className="text-xs text-gray-500">Bài đã làm</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{completedUnits}</div>
              <div className="text-xs text-gray-500">Unit hoàn thành</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar (mobile) */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600">{totalVocab}</div>
            <div className="text-xs text-gray-500">Từ đã học</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">{totalExercises}</div>
            <div className="text-xs text-gray-500">Bài đã làm</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-600">{completedUnits}/12</div>
            <div className="text-xs text-gray-500">Hoàn thành</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-1">📖 12 Units – Chọn bài để học</h2>
          <p className="text-gray-500 text-sm">Mỗi bài có: Từ vựng • Ngữ pháp • Nghe-Chép • Viết • Nói</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {units.map(unit => {
            const c = colorMap[unit.color] || colorMap.blue;
            const prog = getUnitProgress(unit, progress);
            return (
              <div
                key={unit.id}
                onClick={() => onSelectUnit(unit.id)}
                className={`${c.bg} border-2 ${c.border} rounded-2xl p-5 cursor-pointer
                  hover:shadow-lg hover:-translate-y-1 transition-all duration-200
                  active:scale-95 select-none`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{unit.icon}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white ${c.text}`}>
                    Unit {unit.id}
                  </span>
                </div>
                <h3 className={`font-bold text-base ${c.text} mb-1 leading-tight`}>
                  {unit.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  {unit.vocabulary.length} từ vựng • {unit.grammar.length} bài tập
                </p>

                {/* Progress */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Tiến độ</span>
                    <span className="font-semibold">{prog.pct}%</span>
                  </div>
                  <ProgressBar value={prog.done} max={prog.total} color={unit.color} height="h-2" />
                </div>

                {/* Mini stats */}
                <div className="mt-3 flex gap-2 text-xs">
                  <span className="bg-white rounded-lg px-2 py-0.5 text-gray-600">
                    📚 {prog.vocabDone}/{prog.vocabTotal}
                  </span>
                  <span className="bg-white rounded-lg px-2 py-0.5 text-gray-600">
                    ✏️ {prog.grammarDone}/{prog.grammarTotal}
                  </span>
                </div>

                {prog.pct >= 80 && (
                  <div className="mt-2 flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <span className="text-xs text-yellow-600 font-semibold">Hoàn thành!</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer tip */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Wonderful World 5 • Grade 5 English • Học vui mỗi ngày 🌟</p>
        </div>
      </div>
    </div>
  );
}
