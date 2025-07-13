import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～おかげで',
    explanation:
      '📌 Mẫu câu 「～おかげで」 được dùng để **diễn tả sự biết ơn hoặc nguyên nhân tích cực** dẫn đến kết quả tốt.\n\n' +
      '👉 Dịch nghĩa tiếng Việt thường là: **"nhờ có...", "nhờ vào..."**.\n' +
      '🔎 Thường dùng khi muốn **cảm ơn, thể hiện sự may mắn, thuận lợi** do một nguyên nhân nào đó mang lại.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Danh từ] + の + おかげで\n' +
      '🔹 [Động từ thể thường] + おかげで\n' +
      '🔹 [Tính từ -i/-na] + おかげで\n\n' +
      '✅ Có thể dùng「おかげだ」「おかげです」ở cuối câu để nhấn mạnh.',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🎯 Mẫu này thường dùng trong văn nói/lịch sự để:\n' +
      '・Biểu thị sự biết ơn đối với một người/sự việc đã giúp đỡ mình.\n' +
      '・Ngụ ý rằng nhờ vào nguyên nhân A mà kết quả B tích cực xảy ra.\n\n' +
      '⚠️ Lưu ý:\n' +
      '・Không dùng để nói về bản thân một cách khoe khoang.\n' +
      '・Trái nghĩa: ～せいで (chỉ nguyên nhân tiêu cực).',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 先生のおかげで、日本語が上手になりました。\n' +
      '→ Nhờ thầy giáo mà tôi đã giỏi tiếng Nhật hơn.\n\n' +
      '2. 両親のおかげで大学に行けました。\n' +
      '→ Nhờ bố mẹ mà tôi có thể vào đại học.\n\n' +
      '3. 薬を飲んだおかげで、風邪がよくなった。\n' +
      '→ Nhờ uống thuốc nên cảm đã đỡ.\n\n' +
      '4. 友達が手伝ってくれたおかげで、早く終わりました。\n' +
      '→ Nhờ bạn giúp nên tôi hoàn thành sớm.',
  },
  {
    title: '5. So sánh với ～せいで',
    explanation:
      '🔁 「～おかげで」 chỉ nguyên nhân tích cực.\n' +
      '🔁 「～せいで」 chỉ nguyên nhân tiêu cực.\n\n' +
      '📝 Ví dụ so sánh:\n' +
      '・雨が降った**おかげで**、涼しくなった。\n' +
      '→ Nhờ trời mưa nên trời mát hơn.\n\n' +
      '・雨が降った**せいで**、試合が中止になった。\n' +
      '→ Do trời mưa nên trận đấu bị hoãn.',
  },
]

const GrammarOkagedeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～おかげで" grammarSections={grammarSections} />
}

export default GrammarOkagedeScreen
