import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～おかげで」',
    explanation:
      '📌 Mẫu câu 「～おかげで」 được dùng để chỉ **nguyên nhân tích cực**, mang ý nghĩa "nhờ vào", "nhờ có... mà...".\n\n' +
      '👉 Diễn tả sự **biết ơn** hay công lao của ai/điều gì đó giúp dẫn đến kết quả tốt đẹp.\n\n' +
      '🔎 Trái nghĩa với nó là 「～せいで」 (vì… mà gặp kết quả xấu).',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể thường + おかげで\n' +
      '🔸 Tính từ -i + おかげで\n' +
      '🔸 Tính từ -na + な + おかげで\n' +
      '🔸 Danh từ + の + おかげで\n\n' +
      '📝 Ví dụ:\n' +
      '・先生のおかげで、N3に合格しました。\n' +
      '→ Nhờ thầy giáo mà tôi đã đậu N3.\n\n' +
      '・努力したおかげで、夢がかなった。\n' +
      '→ Nhờ nỗ lực mà giấc mơ đã thành hiện thực.\n\n' +
      '・いい天気のおかげで、楽しい旅行ができました。\n' +
      '→ Nhờ thời tiết đẹp mà chuyến du lịch rất vui.',
  },
  {
    title: '3. Lưu ý sử dụng',
    explanation:
      '✅ 「おかげで」 thường đi với kết quả **tốt**, nếu đi với kết quả **xấu** thì người nói đang dùng **mỉa mai/châm biếm**.\n\n' +
      '⚠️ Không dùng với ngữ cảnh trang trọng thái quá, thiên về văn nói hoặc văn viết thân mật.\n\n' +
      '🆚 Nếu nguyên nhân là tiêu cực, nên dùng: 「～せいで」 (vì… nên gặp chuyện xấu)\n\n' +
      '・彼のおかげで助かりました。\n' +
      '→ Nhờ anh ấy mà tôi được cứu giúp.\n\n' +
      '・あなたのアドバイスのおかげで、問題が解決できました。\n' +
      '→ Nhờ lời khuyên của bạn mà tôi đã giải quyết được vấn đề.',
  },
  {
    title: '4. So sánh với 「～せいで」',
    explanation:
      '🔸 Cả hai đều chỉ nguyên nhân dẫn đến kết quả, nhưng:\n\n' +
      '🟢 ～おかげで: Kết quả tích cực, thể hiện lòng biết ơn.\n' +
      '🔴 ～せいで: Kết quả tiêu cực, thể hiện sự trách móc.\n\n' +
      '📝 Ví dụ:\n' +
      '・病院に早く行ったおかげで、すぐ治った。\n' +
      '→ Nhờ đi bệnh viện sớm nên đã khỏi ngay.\n\n' +
      '・雨のせいで、試合が中止になった。\n' +
      '→ Tại trời mưa nên trận đấu bị hoãn.',
  },
]

const GrammarOkageDeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～おかげで" grammarSections={grammarSections} />
}

export default GrammarOkageDeScreen
