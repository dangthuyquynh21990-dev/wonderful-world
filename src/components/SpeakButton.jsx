import { useTextToSpeech } from '../hooks/useTextToSpeech';

const sizes = {
  sm: 'w-7 h-7 text-sm',
  md: 'w-9 h-9 text-base',
  lg: 'w-11 h-11 text-lg',
};

export default function SpeakButton({ text, size = 'md', className = '', rate, label }) {
  const { speak, stop, speaking, supported } = useTextToSpeech();
  if (!supported) return null;
  return (
    <button
      onClick={e => { e.stopPropagation(); speaking ? stop() : speak(text, { rate: rate ?? 0.82 }); }}
      title={speaking ? 'Dừng' : 'Nghe phát âm'}
      className={`relative inline-flex items-center justify-center rounded-full
        transition-all active:scale-90
        ${speaking ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500'}
        ${sizes[size] || sizes.md} ${className}`}
    >
      {speaking && (
        <span className="absolute inset-0 rounded-full bg-blue-300 opacity-40 animate-ping" />
      )}
      <span className="relative">{speaking ? '⏹' : '🔊'}</span>
      {label && <span className="ml-1 text-xs font-medium">{label}</span>}
    </button>
  );
}
