export default function ProgressBar({ value, max, color = "blue", showLabel = false, height = "h-2" }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  const colorMap = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
    orange: "bg-orange-500",
    teal: "bg-teal-500",
    indigo: "bg-indigo-500",
    cyan: "bg-cyan-500",
    pink: "bg-pink-500",
    emerald: "bg-emerald-500",
    sky: "bg-sky-500",
  };
  const barColor = colorMap[color] || "bg-blue-500";

  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}>
        <div
          className={`${barColor} ${height} rounded-full transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-gray-500 mt-1 text-right">{pct}%</p>
      )}
    </div>
  );
}
