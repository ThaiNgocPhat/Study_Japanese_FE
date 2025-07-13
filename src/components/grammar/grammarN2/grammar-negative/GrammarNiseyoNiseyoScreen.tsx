import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～にせよ～にせよ」dùng để nêu hai ví dụ đại diện và khẳng định rằng dù là cái nào đi nữa thì kết luận ở vế sau cũng không thay đổi.\n\n' +
      '→ Nghĩa: "Dù là... hay là... thì cũng..."\n\n' +
      '📌 Cấu trúc:\n・[Danh từ / Động từ / Tính từ (thể thường)] + にせよ + [Danh từ / Động từ / Tính từ] + にせよ\n\n' +
      '💡 Mẫu này tương đương với「～にしろ～にしろ」và「～にしても～にしても」về mặt ý nghĩa và cách dùng.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 留学するにせよ就職するにせよ、早く決めたほうがいい。\n→ Dù là đi du học hay đi làm thì cũng nên quyết định sớm.\n\n' +
      '② 行くにせよ行かないにせよ、連絡してください。\n→ Dù đi hay không thì cũng hãy liên lạc.\n\n' +
      '③ 本物にせよ偽物にせよ、そんな高い物は買わない方がいい。\n→ Dù là đồ thật hay đồ giả thì cũng không nên mua đồ đắt như thế.\n\n' +
      '④ 結果が良いにせよ悪いにせよ、最後まで頑張るべきです。\n→ Dù kết quả tốt hay xấu thì cũng nên cố gắng đến cùng.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Có thể dùng với danh từ, động từ hoặc tính từ ở thể thông thường.\n' +
      '🔸 Cách dùng giống với:\n・～にしろ～にしろ\n・～にしても～にしても\n\n' +
      '⚠️ Không dùng với mệnh lệnh hay câu mang ý chí ở vế sau.\n\n' +
      '📌 Đây là mẫu ngữ pháp thường xuất hiện trong kỳ thi JLPT N2.',
  },
]

const GrammarNiseyoNiseyoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にせよ～にせよ" grammarSections={grammarSections} />
}

export default GrammarNiseyoNiseyoScreen
