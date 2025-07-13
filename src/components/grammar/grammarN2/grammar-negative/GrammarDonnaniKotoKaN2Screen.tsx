import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「どんなに～ことか」là mẫu câu dùng để nhấn mạnh mức độ của cảm xúc, suy nghĩ, mong muốn, v.v... thường đi với các động từ, tính từ biểu thị cảm xúc.\n\n' +
      '→ Nghĩa: “...biết bao”, “...biết chừng nào”\n\n' +
      '📌 Cấu trúc:\n・どんなに + [Động từ/Tính từ] + ことか\n\n' +
      '💡 Đây là cách diễn đạt cảm xúc mạnh, thường dùng trong văn viết hoặc lời kể, hồi tưởng.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 国に帰りたかったことか。\n→ Tôi đã muốn về nước biết bao nhiêu.\n\n' +
      '② 子どものころ、弟とけんかして、どんなに泣いたことか。\n→ Hồi nhỏ, sau khi cãi nhau với em trai, tôi đã khóc biết bao nhiêu.\n\n' +
      '③ この日をどんなに待っていたことか。\n→ Tôi đã mong chờ ngày này biết bao nhiêu.\n\n' +
      '④ 両親がどんなに心配したことか。\n→ Bố mẹ đã lo lắng biết bao nhiêu.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Mẫu câu này thường dùng với các từ thể hiện cảm xúc như: 悲しい, 嬉しい, 寂しい, 心配する, ～たい, v.v.\n' +
      '🔸 Cuối câu thường không cần thêm trợ từ, và có thể lược bỏ chủ ngữ nếu đã rõ trong ngữ cảnh.\n\n' +
      '⚠️ Thường dùng trong văn viết, diễn văn, nhật ký, thư từ hoặc lời kể.\n\n' +
      '📌 Đây là mẫu ngữ pháp thường gặp trong đề thi JLPT N2.',
  },
]

const GrammarDonnaniKotoKaN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="どんなに～ことか" grammarSections={grammarSections} />
}

export default GrammarDonnaniKotoKaN2Screen
