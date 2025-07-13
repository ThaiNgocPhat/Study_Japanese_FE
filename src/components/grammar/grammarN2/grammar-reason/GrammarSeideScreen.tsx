import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～せいで',
    explanation:
      '📌 「～せいで」 dùng để **chỉ nguyên nhân dẫn đến kết quả tiêu cực, không mong muốn**.\n' +
      '👉 Dịch nghĩa tiếng Việt: **"tại...", "vì... nên..."** (theo nghĩa trách móc, tiêu cực).\n' +
      '⚠️ Mẫu này mang ý nghĩa trách móc hoặc phàn nàn về nguyên nhân.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Danh từ] + の + せいで\n' +
      '🔹 [Động từ thể thường] + せいで\n' +
      '🔹 [Tính từ -i/-na] + せいで\n\n' +
      '❗Có thể dùng dưới dạng 「～せいか」 khi không chắc chắn nguyên nhân.',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔎 Dùng khi muốn nói rằng **do nguyên nhân nào đó mà dẫn đến hậu quả xấu**.\n' +
      '❗Người nói thường cảm thấy không hài lòng với kết quả.\n\n' +
      '💡 Trái nghĩa: ～おかげで (chỉ nguyên nhân tích cực).',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 雨のせいで、試合が中止になった。\n' +
      '→ Tại trời mưa nên trận đấu bị hoãn.\n\n' +
      '2. 疲れたせいで、集中できなかった。\n' +
      '→ Vì mệt nên không thể tập trung được.\n\n' +
      '3. 道が混んでいたせいで、遅刻しました。\n' +
      '→ Vì đường đông nên tôi đã đến muộn.\n\n' +
      '4. あなたのせいで、みんな困っているんですよ！\n' +
      '→ Tại anh mà mọi người đang khổ sở đấy!',
  },
  {
    title: '5. So sánh với ～おかげで',
    explanation:
      '🔁 「～せいで」: nguyên nhân tiêu cực → kết quả xấu.\n' +
      '🔁 「～おかげで」: nguyên nhân tích cực → kết quả tốt.\n\n' +
      '📝 Ví dụ so sánh:\n' +
      '・雨が降った**せいで**、電車が止まった。\n' +
      '→ Vì mưa nên tàu dừng lại. (kết quả tiêu cực)\n\n' +
      '・雨が降った**おかげで**、涼しくなった。\n' +
      '→ Nhờ có mưa mà trời trở nên mát mẻ. (kết quả tích cực)',
  },
]

const GrammarSeideScreen = () => {
  return <GrammarTemplateScreen screenTitle="～せいで" grammarSections={grammarSections} />
}

export default GrammarSeideScreen
