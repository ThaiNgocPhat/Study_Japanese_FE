import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「いくら～ても」là mẫu câu dùng để diễn tả rằng dù có làm gì, ở mức độ nào thì kết quả vẫn không thay đổi, vẫn không đạt được điều mong muốn.\n\n' +
      '→ Nghĩa: “Dù có… bao nhiêu đi nữa thì…”\n\n' +
      '📌 Cấu trúc:\n・いくら + [Động từ/Tính từ] + ても\n・いくら + [Tính từ -na/Danh từ] + でも\n\n' +
      '💡 Dùng để nhấn mạnh mức độ nỗ lực, số lượng, hay cảm xúc, nhưng kết quả vẫn như cũ.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① いくら勉強しても、日本語がうまくならない。\n→ Dù có học bao nhiêu đi nữa thì tiếng Nhật vẫn không giỏi lên.\n\n' +
      '② いくら高くても、それを買います。\n→ Dù đắt bao nhiêu đi nữa, tôi vẫn sẽ mua nó.\n\n' +
      '③ いくら頼んでも、彼はやってくれない。\n→ Dù có nhờ vả bao nhiêu lần đi nữa, anh ấy vẫn không chịu làm.\n\n' +
      '④ いくら好きでも、そんな高い物は買えません。\n→ Dù thích đến mấy, tôi cũng không thể mua món đồ đắt như vậy.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Mẫu câu thường dùng với nghĩa tiêu cực hoặc thể hiện sự bất lực.\n' +
      '🔸 Thường đứng đầu câu để nhấn mạnh mức độ "いくら".\n\n' +
      '⚠️ Không dùng mẫu này cho kết quả có thể thay đổi hay điều chỉnh được.\n\n' +
      '📌 Đây là mẫu câu xuất hiện thường xuyên trong đề thi JLPT N2.',
  },
]

const GrammarIkuraTemoScreen = () => {
  return <GrammarTemplateScreen screenTitle="いくら～ても" grammarSections={grammarSections} />
}

export default GrammarIkuraTemoScreen
