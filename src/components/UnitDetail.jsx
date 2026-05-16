import { useState } from 'react';
import VocabQuiz from './VocabQuiz';
import GrammarDrills from './GrammarDrills';
import DictationPractice from './DictationPractice';
import WritingWorkshop from './WritingWorkshop';
import ReadingComprehension from './ReadingComprehension';
import ListenFill from './ListenFill';
import ReviewDrills from './ReviewDrills';
import ProgressBar from './ProgressBar';

const colorMap = {
  blue:    { header: "from-blue-500 to-blue-600",    tab: "bg-blue-500 text-white",    tabHover: "hover:bg-blue-50 hover:text-blue-700",   border: "border-blue-400" },
  purple:  { header: "from-purple-500 to-purple-600", tab: "bg-purple-500 text-white", tabHover: "hover:bg-purple-50 hover:text-purple-700", border: "border-purple-400" },
  green:   { header: "from-green-500 to-green-600",  tab: "bg-green-500 text-white",  tabHover: "hover:bg-green-50 hover:text-green-700",   border: "border-green-400" },
  yellow:  { header: "from-yellow-400 to-yellow-500",tab: "bg-yellow-400 text-white", tabHover: "hover:bg-yellow-50 hover:text-yellow-700", border: "border-yellow-400" },
  red:     { header: "from-red-500 to-red-600",      tab: "bg-red-500 text-white",    tabHover: "hover:bg-red-50 hover:text-red-700",       border: "border-red-400" },
  orange:  { header: "from-orange-500 to-orange-600",tab: "bg-orange-500 text-white", tabHover: "hover:bg-orange-50 hover:text-orange-700", border: "border-orange-400" },
  teal:    { header: "from-teal-500 to-teal-600",    tab: "bg-teal-500 text-white",   tabHover: "hover:bg-teal-50 hover:text-teal-700",     border: "border-teal-400" },
  indigo:  { header: "from-indigo-500 to-indigo-600",tab: "bg-indigo-500 text-white", tabHover: "hover:bg-indigo-50 hover:text-indigo-700", border: "border-indigo-400" },
  cyan:    { header: "from-cyan-500 to-cyan-600",    tab: "bg-cyan-500 text-white",   tabHover: "hover:bg-cyan-50 hover:text-cyan-700",     border: "border-cyan-400" },
  pink:    { header: "from-pink-500 to-pink-600",    tab: "bg-pink-500 text-white",   tabHover: "hover:bg-pink-50 hover:text-pink-700",     border: "border-pink-400" },
  emerald: { header: "from-emerald-500 to-emerald-600", tab: "bg-emerald-500 text-white", tabHover: "hover:bg-emerald-50 hover:text-emerald-700", border: "border-emerald-400" },
  sky:     { header: "from-sky-500 to-sky-600",      tab: "bg-sky-500 text-white",    tabHover: "hover:bg-sky-50 hover:text-sky-700",       border: "border-sky-400" },
};

const baseTabs = [
  { id: 'vocab',      label: '📚 Từ vựng' },
  { id: 'grammar',    label: '✏️ Ngữ pháp' },
  { id: 'dictation',  label: '👂 Nghe-Chép' },
  { id: 'reading',    label: '📖 Đọc hiểu' },
  { id: 'listenfill', label: '🎧 Nghe điền' },
  { id: 'writing',    label: '📝 Viết' },
  { id: 'speaking',   label: '🎤 Nói' },
];

export default function UnitDetail({ unit, progress, onUpdateProgress, onBack, onSpeaking }) {
  const [activeTab, setActiveTab] = useState('vocab');
  const c = colorMap[unit.color] || colorMap.blue;
  const tabs = unit.review
    ? [...baseTabs, { id: 'review', label: '📋 Ôn tập' }]
    : baseTabs;

  const up = progress[`unit${unit.id}`] || {};
  const vocabKnown = (up.vocabKnown || []).length;
  const grammarDone = (up.grammarDone || []).filter(Boolean).length;
  const dictationDone = (up.dictationScores || []).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${c.header} text-white shadow-md`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="text-white text-opacity-80 hover:text-opacity-100 text-sm mb-2 flex items-center gap-1 transition-all"
          >
            ← Về trang chủ
          </button>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{unit.icon}</span>
            <div>
              <div className="text-sm opacity-80 font-medium">Unit {unit.id}</div>
              <h1 className="text-2xl font-bold">{unit.title}</h1>
              <div className="flex gap-4 mt-1 text-sm opacity-80">
                <span>📚 {vocabKnown}/{unit.vocabulary.length} từ</span>
                <span>✏️ {grammarDone}/{unit.grammar.length} bài</span>
                <span>👂 {dictationDone}/{unit.dictation.length} câu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Tabs */}
        <div className="flex gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => tab.id === 'speaking' ? onSpeaking() : setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all active:scale-95 flex-shrink-0 ${
                tab.id === 'speaking'
                  ? `bg-white border-2 ${c.border} text-gray-700 hover:bg-gray-50`
                  : activeTab === tab.id
                    ? c.tab
                    : `bg-white text-gray-500 border border-gray-200 ${c.tabHover}`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {activeTab === 'vocab' && (
            <VocabQuiz unit={unit} progress={progress} onUpdateProgress={onUpdateProgress} />
          )}
          {activeTab === 'grammar' && (
            <GrammarDrills unit={unit} progress={progress} onUpdateProgress={onUpdateProgress} />
          )}
          {activeTab === 'dictation' && (
            <DictationPractice unit={unit} progress={progress} onUpdateProgress={onUpdateProgress} />
          )}
          {activeTab === 'reading' && (
            <ReadingComprehension unit={unit} progress={progress} onUpdateProgress={onUpdateProgress} />
          )}
          {activeTab === 'listenfill' && (
            <ListenFill unit={unit} progress={progress} onUpdateProgress={onUpdateProgress} />
          )}
          {activeTab === 'writing' && (
            <WritingWorkshop unit={unit} progress={progress} onUpdateProgress={onUpdateProgress} />
          )}
          {activeTab === 'review' && (
            <ReviewDrills unit={unit} />
          )}
        </div>
      </div>
    </div>
  );
}
