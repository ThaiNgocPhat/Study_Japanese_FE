import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～にしろ～にしろ」dùng để đưa ra hai ví dụ đại diện và khẳng định rằng dù là cái nào thì kết luận ở vế sau cũng như nhau.\n\n' +
      '→ Nghĩa: "Dù là... hay là... thì cũng..."\n\n' +
      '📌 Cấu trúc:\n・[Danh từ] + にしろ + [Danh từ] + にしろ\n・[Động từ / Tính từ (thể thường)] + にしろ\n\n' +
      '💡 Có thể dùng thay thế cho ～にしても hoặc ～にせよ với cùng ý nghĩa.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 勉強するにしろ働くにしろ、目標が必要だ。\n→ Dù là học hay là làm việc thì cũng cần có mục tiêu.\n\n' +
      '② 肉にしろ魚にしろ、子どもは好き嫌いが多い。\n→ Dù là thịt hay cá, bọn trẻ thường rất kén ăn.\n\n' +
      '③ 行くにしろ行かないにしろ、早めに決めてください。\n→ Dù đi hay không đi, hãy quyết định sớm.\n\n' +
      '④ 本物にしろ偽物にしろ、値段が高すぎる。\n→ Dù là đồ thật hay đồ giả thì giá vẫn quá cao.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Có thể dùng với danh từ, động từ hoặc tính từ.\n' +
      '🔸 Cách dùng tương đương với:\n・～にしても～にしても\n・～にせよ～にせよ\n\n' +
      '⚠️ Vế sau KHÔNG được là mệnh lệnh hoặc ý chí (hãy, đừng, làm ơn...).\n\n' +
      '📌 Mẫu câu quan trọng cho JLPT N2.',
  },
]

const GrammarNishiroNishiroScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にしろ～にしろ" grammarSections={grammarSections} />
}

export default GrammarNishiroNishiroScreen
