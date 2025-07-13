import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～ということ／～というの」',
    explanation:
      '📌 Mẫu 「～ということ」 hoặc 「～というの」 được dùng để **biến một mệnh đề (câu) thành danh từ**, giống như việc “định nghĩa”, “giải thích”, hoặc “tóm lại là…”.\n' +
      '👉 Có thể dịch là: “Việc mà…”, “Chuyện là…”, “Có nghĩa là…”.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 [Mệnh đề / Câu hoàn chỉnh] + ということ\n' +
      '🔸 [Mệnh đề / Câu hoàn chỉnh] + というの\n\n' +
      '📝 Ví dụ:\n' +
      '・彼が結婚したということを知らなかった。\n' +
      '→ Tôi không biết chuyện anh ấy đã kết hôn.\n\n' +
      '・JLPTに合格したというのは、本当ですか？\n' +
      '→ Cái chuyện đậu JLPT là thật à?',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Dùng để **biến đổi một câu/mệnh đề thành danh từ**, để có thể làm chủ ngữ, tân ngữ trong câu.\n' +
      '🔹 「ということ」 thiên về **văn viết hoặc trang trọng**, trong khi 「というの」 thiên về **văn nói hoặc nhẹ nhàng hơn**.\n\n' +
      '📍 Một số mẫu hay dùng:\n' +
      '・～ということは…（＝ Tức là, có nghĩa là…）\n' +
      '・～というのは…（＝ Chuyện đó là… / Định nghĩa là…）',
  },
  {
    title: '4. Ví dụ mở rộng',
    explanation:
      '・試験に合格したというのは、努力の結果です。\n' +
      '→ Việc đậu kỳ thi là kết quả của sự nỗ lực.\n\n' +
      '・「ありがとう」というのは、感謝の気持ちを表す言葉です。\n' +
      '→ “Arigatou” là từ thể hiện lòng biết ơn.\n\n' +
      '・毎日運動するということは、健康にいいです。\n' +
      '→ Việc tập thể dục mỗi ngày thì tốt cho sức khỏe.',
  },
]

const GrammarToIuKotoScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ということ/というの" grammarSections={grammarSections} />
  )
}

export default GrammarToIuKotoScreen
