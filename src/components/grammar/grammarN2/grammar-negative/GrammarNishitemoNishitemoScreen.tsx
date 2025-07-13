import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～にしても～にしても」dùng để nêu ra hai ví dụ tiêu biểu và khẳng định rằng cho dù là cái nào đi nữa thì kết luận ở vế sau vẫn không thay đổi.\n\n' +
      '→ Có thể hiểu là: "Dù là... hay là..., thì cũng..."\n\n' +
      '📌 Cấu trúc:\n・[Danh từ] + にしても + [Danh từ] + にしても\n\n' +
      '💡 Thường đi kèm với các cặp từ có tính đối lập hoặc tương đồng để nhấn mạnh tính phổ quát hoặc không phân biệt.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 野菜にしても肉にしても、材料はすべて国産です。\n→ Dù là rau hay thịt thì nguyên liệu đều là hàng nội địa.\n\n' +
      '② 勉強にしても運動にしても、続けることが大切だ。\n→ Dù là học hay là tập luyện, việc duy trì đều quan trọng.\n\n' +
      '③ 行くにしても行かないにしても、連絡だけはしてください。\n→ Dù đi hay không thì cũng hãy báo cho tôi một tiếng.\n\n' +
      '④ 子どもにしても大人にしても、この映画は楽しめる。\n→ Dù là trẻ em hay người lớn thì bộ phim này đều có thể thưởng thức được.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Mẫu câu này có thể thay bằng:\n・～にしろ～にしろ\n・～にせよ～にせよ\n→ Cả ba mẫu đều có cách dùng tương tự nhau.\n\n' +
      '🔸 Vế sau thường là đánh giá chung, nhận định hoặc điều kiện không thay đổi dù có lựa chọn nào đi nữa.\n\n' +
      '📌 Là mẫu ngữ pháp quan trọng trong JLPT N2.',
  },
]

const GrammarNishitemoNishitemoScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～にしても～にしても" grammarSections={grammarSections} />
  )
}

export default GrammarNishitemoNishitemoScreen
