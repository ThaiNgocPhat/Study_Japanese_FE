import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const grammarSections = [
  {
    title: '1. Mẫu câu khuyên nhủ: ～ほうがいいです',
    explanation:
      '📌 Mẫu câu này dùng để **đưa ra lời khuyên hoặc gợi ý** cho người nghe.\n\n' +
      '👉 Cấu trúc:\n' +
      '・[Động từ thể た] + ほうがいいです。→ **Nên làm gì**\n' +
      '・[Động từ thể ない] + ほうがいいです。→ **Không nên làm gì**',
  },
  {
    title: '2. Ví dụ với "nên làm gì"',
    explanation:
      '🔹 かぜなら、くすりを すぐ のんだほうがいいですよ。\n' +
      '→ Nếu bị cảm thì nên uống thuốc ngay.\n\n' +
      '🔹 やさいを たくさん たべたほうがいいですね。\n' +
      '→ Nên ăn thật nhiều rau thì tốt nhỉ.\n\n' +
      '🔹 もう じかんが ないんです。タクシーで いったほうがいいです。\n' +
      '→ Không còn thời gian. Nên đi bằng taxi thôi.',
  },
  {
    title: '3. Ví dụ với "không nên làm gì"',
    explanation:
      '🔹 おさけを たくさん のまないほうがいい。\n' +
      '→ Không nên uống nhiều rượu.\n\n' +
      '🔹 そとに でかけないほうがいいです。大雨なんですよ。\n' +
      '→ Tốt hơn là đừng ra ngoài. Trời đang mưa to đó.\n\n' +
      '🔹 このパソコンを かわないほうがいいです。たかすぎるんです。\n' +
      '→ Đừng nên mua chiếc máy tính này. Đắt quá đấy.',
  },
  {
    title: '4. Lưu ý',
    explanation:
      '✅ Mẫu câu này thể hiện **quan điểm cá nhân** của người nói.\n' +
      '👉 Thường dùng để khuyên nhủ nhẹ nhàng, lịch sự.\n' +
      '👉 Có thể đi kèm với các mẫu như: ですよ、ね、と思います。… để tăng sự mềm mại.',
  },
]

const GrammarHougaiiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ほうがいいです：Nên/không nên"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarHougaiiScreen
