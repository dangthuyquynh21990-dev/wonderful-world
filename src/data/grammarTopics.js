// Maps unit ID → array of grammar topics, each with exercise IDs
export const grammarTopics = {
  1: [
    { id: "both_and",  name: "Both...and",           icon: "🔗", ids: ["g1","g5","g10","g13","g14"] },
    { id: "adj_adv",   name: "Tính từ & Trạng từ",   icon: "✏️", ids: ["g3","g4","g7","g8","g11","g12","g15","g16"] },
    { id: "misc",      name: "Liên từ & Sở hữu cách",icon: "💬", ids: ["g2","g6","g9"] },
  ],
  2: [
    { id: "was_were",  name: "Was / Were",            icon: "⏪", ids: ["g1","g5","g9","g10"] },
    { id: "prep",      name: "Giới từ vị trí",        icon: "📍", ids: ["g2","g6","g8","g11"] },
    { id: "conj",      name: "Liên từ (and / but)",   icon: "🔀", ids: ["g3","g4","g13","g14"] },
    { id: "misc",      name: "Từ vựng & Cấu trúc",    icon: "📝", ids: ["g7","g12"] },
  ],
  3: [
    { id: "adv_freq",  name: "Trạng từ tần suất",     icon: "🔄", ids: ["g2","g3","g4","g6","g7","g8","g9","g10","g11","g12"] },
    { id: "can",       name: "Can / Can't",            icon: "💪", ids: ["g1","g14"] },
    { id: "pronunc",   name: "Phát âm",                icon: "🔊", ids: ["g5","g13"] },
  ],
  4: [
    { id: "good_at",   name: "Be good at + V-ing",    icon: "⭐", ids: ["g1","g4","g5","g8","g11","g12"] },
    { id: "can",       name: "Can / Can't",            icon: "💪", ids: ["g2","g7"] },
    { id: "gerunds",   name: "Gerunds (V-ing)",        icon: "🔡", ids: ["g3","g6","g9","g10","g13"] },
  ],
  5: [
    { id: "past",      name: "Quá khứ đơn",           icon: "⏪", ids: ["g2","g3","g4","g5","g6","g8","g9","g10","g12","g13"] },
    { id: "imperative",name: "Câu mệnh lệnh (Let's)", icon: "📢", ids: ["g1","g7","g11"] },
  ],
  6: [
    { id: "some_any",  name: "Some / Any",             icon: "🔢", ids: ["g2","g5","g8","g12"] },
    { id: "countable", name: "Danh từ đếm/không đếm", icon: "📦", ids: ["g1","g4","g6","g9"] },
    { id: "article",   name: "Mạo từ & Đơn vị tính", icon: "🍽️", ids: ["g3","g7","g10","g11","g13"] },
  ],
  7: [
    { id: "modal",     name: "Can / Must / Mustn't",  icon: "🚦", ids: ["g2","g3","g5","g6","g8","g12"] },
    { id: "pres_cont", name: "Hiện tại tiếp diễn",    icon: "🎬", ids: ["g1","g9","g10"] },
    { id: "adv_freq",  name: "Trạng từ tần suất",     icon: "🔄", ids: ["g4","g7","g11","g13"] },
  ],
  8: [
    { id: "should",    name: "Should / Shouldn't",    icon: "💡", ids: ["g2","g3","g5","g8"] },
    { id: "because_so",name: "Because / So",           icon: "🔗", ids: ["g4","g6","g9","g12","g13"] },
    { id: "question",  name: "Câu hỏi & Trả lời",     icon: "❓", ids: ["g1","g7","g10","g11"] },
  ],
  9: [
    { id: "past",      name: "Quá khứ đơn",           icon: "⏪", ids: ["g1","g2","g3","g4","g6","g7","g8","g9","g10","g12","g13"] },
    { id: "pronunc",   name: "Phát âm đuôi -ed",      icon: "🔊", ids: ["g5","g11"] },
  ],
  10: [
    { id: "past_neg",  name: "Phủ định quá khứ",      icon: "⏪", ids: ["g1","g2","g5","g6","g9","g10","g11","g13"] },
    { id: "did_q",     name: "Did + V-nguyên thể",     icon: "❓", ids: ["g3","g7","g12"] },
    { id: "possessive",name: "Đại từ sở hữu",          icon: "👤", ids: ["g4","g8"] },
  ],
  11: [
    { id: "comparative",name: "So sánh hơn (-er/more)",icon: "📈", ids: ["g1","g3","g5","g8","g9","g12","g13"] },
    { id: "as_as",     name: "So sánh bằng (as…as)",  icon: "⚖️", ids: ["g10"] },
    { id: "superlative",name: "So sánh nhất",          icon: "🏆", ids: ["g6"] },
    { id: "very",      name: "Very / Really + adj",    icon: "⭐", ids: ["g2","g4","g7","g11"] },
  ],
  12: [
    { id: "will",      name: "Tương lai với Will",     icon: "🔮", ids: ["g1","g2","g4","g5","g6","g7","g9","g10","g11","g12","g13"] },
    { id: "going_to",  name: "Going to",               icon: "📅", ids: ["g3","g8"] },
  ],
};
