import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～にすぎない」có nghĩa là "chỉ là...", "không quá...", "không hơn..."\n' +
      '→ Dùng để diễn tả sự khiêm tốn hoặc đánh giá thấp về mức độ, quy mô của sự vật, sự việc.\n\n' +
      '📌 Cấu trúc:\n・[Danh từ] + にすぎない\n・[Thể thường (普通形)] + にすぎない\n  ※ Tính từ -na và danh từ: thêm である trước にすぎない\n\n' +
      '💡 Là cách nói trang trọng, hay dùng trong văn viết hoặc trong lập luận.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 彼はただの学生にすぎない。\n→ Anh ta chỉ là một sinh viên bình thường mà thôi.\n\n' +
      '② 私は命令に従ったにすぎません。\n→ Tôi chẳng qua chỉ làm theo mệnh lệnh mà thôi.\n\n' +
      '③ それはうわさにすぎない。\n→ Điều đó chỉ là tin đồn mà thôi.\n\n' +
      '④ この数字は参考にすぎないので、あまり気にしないでください。\n→ Con số này chỉ để tham khảo nên đừng quá lo lắng.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Nhấn mạnh rằng điều gì đó không quan trọng, không vượt quá giới hạn nào đó.\n\n' +
      '🔸 Thường đi với các từ như: ただ, ほんの, 単なる (chỉ là, đơn thuần là)... để tăng cường sắc thái giảm nhẹ.\n\n' +
      '📌 Đây là mẫu ngữ pháp thường gặp trong JLPT N2.',
  },
]

const GrammarNiSuginaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にすぎない" grammarSections={grammarSections} />
}

export default GrammarNiSuginaiScreen
