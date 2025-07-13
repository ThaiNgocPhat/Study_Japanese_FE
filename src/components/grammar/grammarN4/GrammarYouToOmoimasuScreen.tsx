import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Mẫu câu ～ようと思います／～ようと思っています là gì?',
    explanation:
      '🌟 Dùng để **nói về ý định, dự định** làm gì đó.\n\n' +
      '📌 Cấu trúc:\n' +
      '・Vよう + と思います → Ý định nhất thời, chủ quan (của người nói)\n' +
      '・Vよう + と思っています → Dự định đã có chuẩn bị, chắc chắn hơn',
  },
  {
    title: '2. Ví dụ dễ hiểu',
    explanation:
      '📝 Với 「と思います」 (ý định của chính mình):\n' +
      '・あした早く起きようと思います。\n' +
      '→ Mai tôi sẽ dậy sớm.\n\n' +
      '・きょうから日記を書こうと思います。\n' +
      '→ Từ hôm nay tôi định viết nhật ký.\n\n' +
      '📝 Với 「と思っています」 (ý định đã lên kế hoạch rõ ràng):\n' +
      '・夏休みに旅行しようと思っています。\n' +
      '→ Nghỉ hè tôi sẽ đi du lịch.\n\n' +
      '・妹は日本語の先生になろうと思っています。\n' +
      '→ Em gái tôi dự định sẽ trở thành giáo viên tiếng Nhật.',
  },
  {
    title: '3. Khi nào dùng ～と思っています?',
    explanation:
      '🔍 Dùng khi:\n' +
      '・Bạn đã có kế hoạch cụ thể\n' +
      '・Bạn đang nói về ý định của **người khác** (người thứ ba)\n\n' +
      '✅ Ví dụ đúng:\n' +
      '・木村さんは留学しようと思っています。\n' +
      '→ Anh Kimura dự định đi du học.\n\n' +
      '❌ Ví dụ sai:\n' +
      '・木村さんは留学しようと思います。🚫 (sai ngữ pháp)',
  },
  {
    title: '4. Hỏi người khác thì dùng mẫu nào?',
    explanation:
      '🗣 Khi muốn hỏi ý định của người **đang nói chuyện với mình**, bạn dùng:\n' +
      '・Vよう + と思いますか。\n\n' +
      '📌 Ví dụ:\n' +
      '・木村さんは留学しようと思いますか。\n' +
      '→ Anh Kimura có định đi du học không?',
  },
]

const GrammarYouToOmoimasuScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ようと思います/～ようと思っています"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarYouToOmoimasuScreen
