import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に相違ない',
    explanation:
      '📌「～に相違ない」là cách diễn đạt trang trọng hơn của「～に違いない」, dùng để thể hiện **suy đoán chắc chắn** của người nói.\n' +
      '👉 Nghĩa: “Chắc chắn là…”, “Không thể sai được…”',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thông thường (普通形) + に相違ない\n' +
      '🔹 Tính từ -i / -na + に相違ない\n' +
      '🔹 Danh từ + に相違ない\n\n' +
      '📍 Tính từ -na và Danh từ KHÔNG thêm 「だ」 trước 「に相違ない」',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Diễn tả sự **suy đoán chắc chắn dựa vào bằng chứng, hoàn cảnh** mà người nói cảm nhận được.\n' +
      '✅ Thường được sử dụng trong **văn viết, các bài báo, văn bản trang trọng**.\n' +
      '📝 Tương đương với「～に違いない」nhưng mang sắc thái **lịch sự, cứng nhắc** hơn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. この絵は彼の最高傑作（さいこうけっさく）に相違ない。\n' +
      '→ Bức tranh này chắc chắn là kiệt tác xuất sắc nhất của anh ấy.\n\n' +
      '2. この事件は計画的に行われたに相違ない。\n' +
      '→ Vụ việc này chắc chắn đã được thực hiện một cách có kế hoạch.\n\n' +
      '3. 彼が犯人に相違ありません。\n' +
      '→ Không nghi ngờ gì nữa, anh ta chính là thủ phạm.',
  },
  {
    title: '5. So sánh với ～に違いない',
    explanation:
      '🔸 ～に違いない：Dùng nhiều trong văn nói và hội thoại hằng ngày.\n' +
      '🔸 ～に相違ない：Mang tính trang trọng, thường dùng trong văn viết hoặc bối cảnh nghiêm túc.\n\n' +
      '📍Ví dụ:\n' +
      'この答えは正しいに違いない。\n' +
      '→ Câu trả lời này chắc chắn đúng. (thân mật)\n\n' +
      'この答えは正しいに相違ない。\n' +
      '→ Câu trả lời này chắc chắn đúng. (trang trọng)',
  },
]

const GrammarNiSouinaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に相違ない" grammarSections={grammarSections} />
}

export default GrammarNiSouinaiScreen
