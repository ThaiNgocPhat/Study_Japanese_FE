import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ことだ',
    explanation:
      '📌 Mẫu câu này dùng để **đưa ra lời khuyên hoặc gợi ý nên làm gì** trong một tình huống cụ thể.\n' +
      '👉 Thường dùng trong văn viết hoặc khi đưa ra lời khuyên một cách nhẹ nhàng, lịch sự.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển + ことだ\n' +
      '🔹 Động từ thể ない + ことだ\n\n' +
      '※ Không dùng với danh từ hay tính từ.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Diễn tả **việc nên/không nên làm** trong hoàn cảnh nhất định.\n' +
      '👉 Dùng khi người nói muốn nhấn mạnh "điều quan trọng" là nên làm gì hoặc không làm gì.\n' +
      '⚠️ Không dùng để miêu tả bản thân hành động đang xảy ra, mà là lời khuyên mang tính chung.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 風邪をひいたときは、無理をしないことだ。\n→ Khi bị cảm thì đừng nên làm việc quá sức.\n\n' +
      '2. 日本語が上手になりたければ、毎日練習することだ。\n→ Nếu muốn giỏi tiếng Nhật thì nên luyện tập mỗi ngày.\n\n' +
      '3. 太りたくなければ、夜遅く食べないことだ。\n→ Nếu không muốn tăng cân thì đừng ăn khuya.\n\n' +
      '4. 人の話はよく聞くことだ。\n→ Nên lắng nghe người khác nói.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ Đây là cách nói **mang tính khuyên nhủ nhẹ nhàng nhưng chắc chắn**.\n' +
      '✅ Dùng nhiều trong bài viết, sách vở, hoặc khi đưa lời khuyên trực tiếp.\n' +
      '❌ Không dùng để ra lệnh hay thể hiện ý chí mạnh như mệnh lệnh hay sai khiến.',
  },
]

const GrammarKotoDaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ことだ" grammarSections={grammarSections} />
}

export default GrammarKotoDaScreen
