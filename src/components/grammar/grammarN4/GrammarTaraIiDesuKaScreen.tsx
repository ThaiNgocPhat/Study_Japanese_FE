import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu chung',
    explanation:
      '📌 Cả hai mẫu ～たらいいですか và ～たらどうですか đều sử dụng **thể た** của động từ, mang nghĩa: "nếu làm A thì tốt không?" hoặc "nên làm A thì sao?".\n\n' +
      '💡 Tuy giống nhau về mặt cấu trúc nhưng chúng có **mục đích sử dụng khác nhau**:\n' +
      '・～たらいいですか: dùng để **hỏi ý kiến**.\n' +
      '・～たらどうですか: dùng để **đưa ra lời khuyên nhẹ nhàng**.',
  },
  {
    title: '2. ～たらいいですか：Hỏi ý kiến, xin lời khuyên',
    explanation:
      '🧠 Dùng để hỏi người khác xem nên làm gì, làm thế nào là tốt nhất trong một tình huống nào đó.\n\n' +
      '✏️ Cấu trúc:\n' +
      '[Động từ thể た] + ら + いいですか？\n\n' +
      '📝 Ví dụ:\n' +
      '・どこで切符を買ったらいいですか？\n' +
      '→ Tôi nên mua vé ở đâu thì tốt?\n\n' +
      '・だれに聞いたらいいですか？\n' +
      '→ Tôi nên hỏi ai thì được nhỉ?\n\n' +
      '・日本語を上手になりたいんですが、何をしたらいいですか？\n' +
      '→ Tôi muốn giỏi tiếng Nhật, nên làm gì thì tốt ạ?',
  },
  {
    title: '3. ～たらどうですか：Đưa ra lời khuyên',
    explanation:
      '🧠 Dùng khi bạn muốn **đề xuất hoặc gợi ý** một hành động cho người khác một cách nhẹ nhàng (như "sao không thử...?", "làm A đi thì sao?").\n\n' +
      '✏️ Cấu trúc:\n' +
      '[Động từ thể た] + ら + どうですか？\n\n' +
      '📝 Ví dụ:\n' +
      '・熱があるんですね。病院へ行ったらどうですか？\n' +
      '→ Bạn bị sốt à? Sao không đi bệnh viện?\n\n' +
      '・疲れているなら、ちょっと休んだらどうですか？\n' +
      '→ Nếu mệt thì sao không nghỉ một chút?\n\n' +
      '・日本語で日記を書いたらどうですか？\n' +
      '→ Viết nhật ký bằng tiếng Nhật xem sao?',
  },
  {
    title: '4. So sánh nhanh ～たらいいですか và ～たらどうですか',
    explanation:
      '・～たらいいですか: Mang nghĩa "Nên làm gì thì tốt?", dùng khi muốn hỏi ý kiến hoặc lời khuyên từ người khác một cách lịch sự.\n' +
      '  Ví dụ: 日本語を上手になりたかったら、どうしたらいいですか？\n\n' +
      '・～たらどうですか: Mang nghĩa "Sao không thử làm...?", dùng để đưa ra lời khuyên nhẹ nhàng, gợi ý.\n' +
      '  Ví dụ: 疲れているなら、早く寝たらどうですか？\n\n' +
      '🧠 Cả hai mẫu đều mang tính lịch sự và thường được dùng trong hội thoại hằng ngày.',
  },
  {
    title: '5. Biến thể thường gặp',
    explanation:
      '🗣 Văn nói thường rút gọn:\n' +
      '・～たらどう？（thân mật, không có ですか）\n' +
      '・～たらいい？（dạng thân mật của ～たらいいですか）\n\n' +
      '📝 Ví dụ:\n' +
      '・もう寝たらどう？ → Sao không ngủ đi?\n' +
      '・どうしたらいい？ → Làm sao mới tốt đây?',
  },
]

const GrammarTaraIiDesuKaScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～たらいいですか/ ～たらどうですか"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarTaraIiDesuKaScreen
