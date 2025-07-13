import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～わけがない',
    explanation:
      '📌「～わけがない」diễn đạt ý phủ định mạnh mẽ: "lẽ nào lại...", "không thể nào...", "không có lý nào...".\n' +
      '👉 Mẫu này thể hiện **niềm tin chắc chắn của người nói rằng điều đó hoàn toàn không thể xảy ra**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể thường] + わけがない\n' +
      '🔹 [Tính từ -i] + わけがない\n' +
      '🔹 [Tính từ -na] + な + わけがない\n' +
      '🔹 [Danh từ] + の + わけがない',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Diễn tả sự **phủ định hoàn toàn** một khả năng, sự việc nào đó. Dùng khi người nói tin chắc điều đó **không thể xảy ra**, hoặc **vô lý** nếu xảy ra.\n\n' +
      '🗣 Có thể dịch là:\n' +
      '　・Làm gì có chuyện...\n' +
      '　・Không thể nào...\n' +
      '　・Không lý nào...\n' +
      '　・Chắc chắn không...',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. あの強いチームに勝てるわけがない。\n' +
      '→ Không thể nào thắng được đội mạnh như vậy.\n\n' +
      '2. この問題は小学生には解けるわけがない。\n' +
      '→ Vấn đề này học sinh tiểu học không thể nào giải được.\n\n' +
      '3. あんなに食べたら、太らないわけがないよ。\n' +
      '→ Ăn nhiều như vậy thì không mập mới là lạ đấy.\n\n' +
      '4. まじめな彼がそんなことをするわけがない。\n' +
      '→ Một người nghiêm túc như anh ấy thì không thể làm chuyện như thế.\n\n' +
      '5. このレストラン、美味しくないわけがないよ。いつも満席だもん。\n' +
      '→ Nhà hàng này không thể nào dở được đâu, vì lúc nào cũng kín chỗ mà.',
  },
  {
    title: '5. Lưu ý sử dụng',
    explanation:
      '🔸 Là cách nói thể hiện **chắc chắn về sự phủ định** dựa trên kinh nghiệm, logic hoặc cảm giác của người nói.\n' +
      '🔸 Có thể dùng thay thế với 「～はずがない」, tuy nhiên 「～わけがない」 có **sắc thái phủ định mạnh hơn**.\n' +
      '🔸 Không nên dùng với người lớn hơn trong tình huống trang trọng.',
  },
]

const GrammarWakeganaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～わけがない" grammarSections={grammarSections} />
}

export default GrammarWakeganaiScreen
