import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～としても」diễn tả giả định rằng “cho dù là… thì cũng…”, nhấn mạnh rằng ngay cả khi điều đó đúng thì kết quả cũng không thay đổi.\n\n' +
      '→ Nghĩa: "Dù là… thì cũng…", "Giả sử là… thì cũng…"\n\n' +
      '📌 Cấu trúc:\n・[Động từ thể thường / Tính từ / Danh từ] + としても\n\n' +
      '💡 Mẫu câu này thường dùng để thể hiện ý kiến, phán đoán mang tính chủ quan ở vế sau.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 留学するとしても、来年以降だと思います。\n→ Dù có đi du học thì chắc cũng phải từ năm sau trở đi.\n\n' +
      '② 社長としても、社員の気持ちは理解できないかもしれない。\n→ Dù là giám đốc thì cũng chưa chắc hiểu được cảm xúc của nhân viên.\n\n' +
      '③ お金があるとしても、そんな高い車は買わない。\n→ Dù có tiền đi nữa thì tôi cũng không mua chiếc xe đắt như vậy.\n\n' +
      '④ 試験に合格したとしても、自信が持てない。\n→ Dù có đỗ kỳ thi đi nữa thì tôi cũng không cảm thấy tự tin.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸「～としても」thường đi kèm với các phó từ như たとえ (giả sử), もし (nếu), いくら (bao nhiêu đi nữa)...\n' +
      '🔸 So với「～ても」, mẫu này nhấn mạnh vào điều kiện giả định hơn, mang sắc thái lý luận.\n\n' +
      '📌 Đây là mẫu câu phổ biến trong giao tiếp lẫn văn viết, đặc biệt ở trình độ JLPT N2.',
  },
]

const GrammarToshitemoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～としても" grammarSections={grammarSections} />
}

export default GrammarToshitemoScreen
