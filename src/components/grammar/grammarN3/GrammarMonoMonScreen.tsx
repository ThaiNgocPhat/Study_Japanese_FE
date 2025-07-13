import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～（んだ）もの／もん」',
    explanation:
      '📌 Mẫu câu này dùng để **giải thích lý do, biện hộ hoặc than phiền** một cách nhẹ nhàng, thường dùng trong văn nói, đặc biệt bởi **phụ nữ và trẻ em**.\n\n' +
      '👉 Nghĩa: “Vì… mà”, “Tại… mà”, “Do… nên…”\n' +
      '💡 Dùng để thể hiện cảm xúc cá nhân, sự không hài lòng hoặc lý do mang tính chủ quan.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể thường + んだもの／もん\n' +
      '🔸 Tính từ -i + んだもの／もん\n' +
      '🔸 Tính từ -na + なんだもの／もん\n' +
      '🔸 Danh từ + なんだもの／もん\n\n' +
      '📌 Mẫu 「～んだもん」 là dạng rút gọn và thân mật hơn của 「～のですから」.\n\n' +
      '📝 Ví dụ:\n' +
      '・だって、疲れたんだもん。\n' +
      '→ Tại vì tôi mệt mà.\n\n' +
      '・子どもなんだもん、仕方がないよ。\n' +
      '→ Vì là trẻ con mà, đành chịu thôi.\n\n' +
      '・行きたくないもん。\n' +
      '→ Tớ không muốn đi mà.',
  },
  {
    title: '3. Lưu ý sử dụng',
    explanation:
      '💬 「～もん」 được dùng nhiều trong văn nói, và mang sắc thái **thân mật, cảm xúc**.\n\n' +
      '⚠️ Không dùng trong văn viết trang trọng hay trong các bài nói chính thức.\n\n' +
      '👧 Thường thấy trẻ con hoặc phụ nữ nói để biện hộ hoặc làm nũng:\n' +
      '・今行きたくないもん。\n' +
      '→ Giờ tớ không muốn đi mà.\n\n' +
      '・まだ食べてるんだもん。\n' +
      '→ Vì tớ vẫn đang ăn mà.',
  },
  {
    title: '4. So sánh với 「～から」「～ので」',
    explanation:
      '🔸 Cả ba mẫu đều chỉ lý do, nhưng:\n\n' +
      '🆚 ～から: trung tính, phổ biến, dùng cả nói và viết.\n' +
      '🆚 ～ので: nhẹ nhàng hơn, có thể dùng trong văn trang trọng.\n' +
      '🆚 ～もん／～んだもん: thân mật, cảm xúc, chủ quan, thường dùng trong hội thoại.\n\n' +
      '📖 Ví dụ so sánh:\n' +
      '・雨が降ったから、行きません。\n' +
      '・雨が降ったので、行きません。\n' +
      '・雨なんだもん、行きたくない。\n' +
      '→ Trời mưa mà, tớ không muốn đi.',
  },
]

const GrammarMonoMonScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～（んだ）もの/ もん" grammarSections={grammarSections} />
  )
}

export default GrammarMonoMonScreen
