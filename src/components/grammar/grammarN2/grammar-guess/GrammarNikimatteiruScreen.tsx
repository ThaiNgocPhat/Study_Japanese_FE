import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に決まっている',
    explanation:
      '📌「～に決まっている」là mẫu câu dùng để **khẳng định mạnh mẽ phán đoán chủ quan** của người nói.\n' +
      '👉 Nghĩa: "Nhất định là...", "Chắc chắn là...", "Rõ ràng là..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thông thường (普通形) + に決まっている\n' +
      '🔹 Tính từ -i / -na + に決まっている\n' +
      '🔹 Danh từ + に決まっている\n\n' +
      '📍 Tính từ -na và danh từ **không thêm「だ」** trước 「に決まっている」.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng để diễn tả **phán đoán đầy tự tin, chắc chắn** của người nói, thường dựa trên kinh nghiệm hoặc cảm tính.\n' +
      '✅ Sắc thái khá mạnh, đôi khi mang chút cảm xúc chủ quan, thiên về trực giác hơn là lý luận logic.\n' +
      '🗣 Thường dùng trong **văn nói**.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. こんなに難しい問題、彼にできるに決まっている。\n' +
      '→ Bài khó thế này thì chắc chắn anh ấy làm được.\n\n' +
      '2. あの店、高いに決まってるよ。\n' +
      '→ Cái tiệm kia chắc chắn đắt rồi.\n\n' +
      '3. うそに決まっている！\n' +
      '→ Chắc chắn là nói dối rồi!\n\n' +
      '4. あんな下手な歌手が売れるわけない。失敗するに決まっているよ。\n' +
      '→ Ca sĩ dở như vậy sao bán được đĩa, chắc chắn sẽ thất bại thôi.',
  },
  {
    title: '5. So sánh với ～に違いない và ～に相違ない',
    explanation:
      '🔹 ～に違いない：Suy đoán có căn cứ, mang sắc thái trung lập.\n' +
      '🔹 ～に相違ない：Giống ～に違いない nhưng mang tính văn viết, trang trọng.\n' +
      '🔹 ～に決まっている：Mạnh mẽ, thiên về cảm xúc chủ quan, dùng trong văn nói.\n\n' +
      '📍Ví dụ:\n' +
      '彼が犯人に違いない。→ (dựa trên logic, có bằng chứng)\n' +
      '彼が犯人に決まっている。→ (cảm giác, chắc chắn là vậy)',
  },
]

const GrammarNikimatteiruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にきまっている" grammarSections={grammarSections} />
}

export default GrammarNikimatteiruScreen
