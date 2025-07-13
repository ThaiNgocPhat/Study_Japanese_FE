import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu chung',
    explanation:
      '📌 Mẫu câu 「～ばいい」「～たらいい」「～といい」 được dùng để **đưa ra lời khuyên, gợi ý**, hoặc **bày tỏ mong ước, hy vọng**.\n\n' +
      '🧠 Tùy vào ngữ cảnh, các mẫu này có thể dùng để:\n' +
      '・Gợi ý nhẹ nhàng: "Bạn nên…", "làm thế thì tốt đó"\n' +
      '・Thể hiện mong muốn: "Giá mà…", "Mong là…"',
  },
  {
    title: '2. Mẫu câu 「～たらいい」',
    explanation:
      '🔹 [Động từ thể た] + らいい\n\n' +
      '📌 Dùng trong hội thoại tự nhiên, mang tính nhẹ nhàng, thân thiện.\n\n' +
      '📝 Ví dụ:\n' +
      '・疲れたら、少し休んだらいいですよ。\n' +
      '→ Nếu mệt thì bạn nên nghỉ một chút.\n\n' +
      '・わからなかったら、先生に聞いたらいいよ。\n' +
      '→ Nếu không hiểu thì hỏi thầy giáo là được.',
  },
  {
    title: '3. Mẫu câu 「～ばいい」',
    explanation:
      '🔹 [Động từ thể điều kiện ～ば] + いい\n\n' +
      '📌 Trang trọng hơn một chút so với 「～たらいい」, thường dùng trong văn viết hoặc tình huống lịch sự hơn.\n\n' +
      '📝 Ví dụ:\n' +
      '・もっと勉強すればいいのに。\n' +
      '→ Phải chi bạn học thêm chút nữa thì tốt biết mấy.\n\n' +
      '・時間がなければ、後で来ればいいですよ。\n' +
      '→ Nếu không có thời gian thì đến sau cũng được.',
  },
  {
    title: '4. Mẫu câu 「～といい」',
    explanation:
      '🔹 [Động từ thể từ điển] + といい\n\n' +
      '📌 Dùng để thể hiện **mong muốn, hy vọng** điều gì đó sẽ xảy ra.\n\n' +
      '📝 Ví dụ:\n' +
      '・明日、晴れるといいですね。\n' +
      '→ Mong là ngày mai trời sẽ nắng.\n\n' +
      '・試験に合格するといいなあ。\n' +
      '→ Ước gì đậu kỳ thi.\n\n' +
      '📌 Với 「～といいと思う」 cũng là một cách nói nhẹ nhàng mong điều gì xảy ra:\n' +
      '・彼女が来るといいと思います。\n' +
      '→ Tôi hy vọng là cô ấy sẽ đến.',
  },
  {
    title: '5. So sánh nhanh',
    explanation:
      '🔸 「～たらいい」: tự nhiên, dùng nhiều trong hội thoại.\n' +
      '🔸 「～ばいい」: hơi trang trọng hơn, thường dùng khi đưa lời khuyên chính thức.\n' +
      '🔸 「～といい」: thể hiện mong muốn, hy vọng điều gì đó xảy ra.\n\n' +
      '🧩 Ví dụ đối chiếu:\n' +
      '・困ったら、友達に相談したらいい。\n' +
      '・もっと頑張ればいいのに。\n' +
      '・いい仕事が見つかるといいですね。',
  },
]

const GrammarBaTaraToIiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ばいい/ ～たらいい/ ～といい"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarBaTaraToIiScreen
