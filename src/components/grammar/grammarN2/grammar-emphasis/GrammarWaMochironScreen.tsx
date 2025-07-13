import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～はもちろん',
    explanation:
      '📌 「～はもちろん」dùng để đưa ra một ví dụ **hiển nhiên, đương nhiên**, sau đó nói đến những thứ khác **cũng như vậy** hoặc **còn hơn thế**.\n\n' +
      '👉 Nghĩa: “~ là điều đương nhiên rồi, … (cái khác) cũng…”\n' +
      '👉 Tương đương tiếng Việt: “không chỉ… mà… cũng…”, “A thì là tất nhiên rồi, B cũng…”',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + はもちろん\n\n' +
      '📌 Thường đi kèm với các từ như「も」「まで」「さえ」ở vế sau để nhấn mạnh phạm vi mở rộng.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng để liệt kê, nhấn mạnh rằng điều được nêu ra ở vế trước là điều đương nhiên, nhưng không chỉ dừng ở đó mà còn có thêm những điều khác.\n' +
      '✅ Chủ yếu dùng trong văn viết, hoặc văn nói trang trọng, thuyết trình.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 漢字は日本人はもちろん、外国人にとっても難しい。\n' +
      '→ Kanji thì với người Nhật là đương nhiên rồi, với người nước ngoài lại càng khó.\n\n' +
      '2. このレストランは味はもちろん、サービスもとてもいいです。\n' +
      '→ Nhà hàng này thì hương vị là tất nhiên rồi, dịch vụ cũng rất tốt.\n\n' +
      '3. 子供の教育は家庭はもちろん、学校でも大切にされるべきだ。\n' +
      '→ Giáo dục trẻ em thì gia đình là điều hiển nhiên rồi, nhưng ở trường cũng cần được coi trọng.\n\n' +
      '4. 彼は勉強はもちろん、スポーツも得意です。\n' +
      '→ Anh ấy thì học là điều rõ ràng rồi, thể thao cũng giỏi nữa.',
  },
  {
    title: '5. So sánh với các mẫu tương tự',
    explanation:
      '🔸 「～だけでなく」: Không chỉ… mà còn… (trung lập hơn)\n' +
      '🔸 「～はもちろん」: Nhấn mạnh tính hiển nhiên của vế trước\n' +
      '🔸 「～ばかりか」: Dùng khi muốn thể hiện sự bất ngờ ở vế sau',
  },
]

const GrammarWaMochironScreen = () => {
  return <GrammarTemplateScreen screenTitle="～はもちろん" grammarSections={grammarSections} />
}

export default GrammarWaMochironScreen
