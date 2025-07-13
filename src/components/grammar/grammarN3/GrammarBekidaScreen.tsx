import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～べきだ／～べきではない」',
    explanation:
      '📌 Mẫu câu 「～べきだ」 dùng để **nói về điều nên làm** theo lẽ thường, đạo lý hay quan điểm chung.\n' +
      '📌 「～べきではない」 dùng để **nói về điều không nên làm**.\n\n' +
      '👉 Dịch nghĩa: **nên/phải…**, **không nên…** (mạnh hơn 「～たほうがいい」)',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 [Động từ thể từ điển] + べきだ／べきではない\n' +
      '📍 Ngoại lệ duy nhất: 「する」 → 「すべき」 hoặc 「するべき」 (cả hai đều được)\n\n' +
      '📝 Ví dụ:\n' +
      '・学生はもっと勉強する**べきだ**。\n' +
      '→ Học sinh **nên** học nhiều hơn.\n\n' +
      '・うそは言う**べきではありません**。\n' +
      '→ **Không nên** nói dối.\n\n' +
      '・約束は守る**べきです**。\n' +
      '→ **Phải** giữ lời hứa.',
  },
  {
    title: '3. Cách dùng và sắc thái',
    explanation:
      '📌 Dùng khi muốn nêu **quan điểm mạnh mẽ** hoặc **lời khuyên mang tính đạo đức/xã hội**.\n' +
      '📍 Không nên dùng với người lớn tuổi/cấp trên nếu không thân thiết – vì nghe dễ phán xét.\n\n' +
      '📝 Ví dụ:\n' +
      '・お年寄りには席をゆずる**べきだ**と思います。\n' +
      '→ Tôi nghĩ **nên nhường ghế** cho người già.\n\n' +
      '・他人の悪口を言う**べきではない**。\n' +
      '→ **Không nên** nói xấu người khác.',
  },
  {
    title: '4. So sánh với mẫu khác',
    explanation:
      '🔸 「～たほうがいい」 → Khuyên nhẹ nhàng, không chắc chắn\n' +
      '🔸 「～べきだ」 → Mạnh mẽ hơn, mang tính nguyên tắc, đạo đức\n\n' +
      '📝 So sánh:\n' +
      '・早く寝たほうがいい。\n' +
      '→ Nên đi ngủ sớm. (khuyên nhẹ)\n\n' +
      '・子どもは早く寝るべきだ。\n' +
      '→ Trẻ con **phải** ngủ sớm. (ý mạnh, như quy tắc)',
  },
]

const GrammarBekidaScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～べきだ/ べきではない" grammarSections={grammarSections} />
  )
}

export default GrammarBekidaScreen
