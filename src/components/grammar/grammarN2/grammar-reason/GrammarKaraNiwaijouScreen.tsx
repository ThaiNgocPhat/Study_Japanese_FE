import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～からには / ～以上は',
    explanation:
      '📌「～からには」 và 「～以上は」 đều dùng để diễn đạt ý nghĩa: **"một khi đã... thì đương nhiên..."**.\n' +
      '👉 Mẫu này thể hiện sự quyết tâm, bổn phận, trách nhiệm, hoặc kỳ vọng hiển nhiên dựa trên một sự thật đã biết.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + からには / 以上は\n' +
      '🔹 Tính từ + からには / 以上は\n' +
      '🔹 Danh từ + である + からには / 以上は\n\n' +
      '※ Chủ yếu dùng với mệnh đề sau mang nghĩa: "phải...", "nên...", "đương nhiên...", "muốn..."',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔍 Diễn tả sự **bắt buộc, quyết tâm hoặc nghĩa vụ** khi đã xác định một tình huống, điều kiện nào đó.\n' +
      '💬 Có thể dịch là:\n' +
      '・"Một khi đã... thì..."\n' +
      '・"Đã... thì đương nhiên phải..."\n' +
      '・"Vì đã... nên..."',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 日本に来たからには、日本語をしっかり勉強したい。\n' +
      '→ Một khi đã đến Nhật, tôi muốn học tiếng Nhật nghiêm túc.\n\n' +
      '2. 約束したからには、守らなければなりません。\n' +
      '→ Một khi đã hứa thì phải giữ lời.\n\n' +
      '3. 試合に出る以上は、勝ちたいと思う。\n' +
      '→ Đã tham gia thi đấu thì tôi muốn thắng.\n\n' +
      '4. 学生である以上は、勉強を第一にすべきだ。\n' +
      '→ Đã là học sinh thì nên đặt việc học lên hàng đầu.',
  },
  {
    title: '5. So sánh 「～からには」 và 「～以上は」',
    explanation:
      '🔸 Hai mẫu này rất giống nhau và có thể thay thế cho nhau trong hầu hết trường hợp.\n' +
      '🔹「～からには」 thường dùng trong văn nói hơn, mang tính cảm xúc nhiều hơn.\n' +
      '🔹「～以上は」 thiên về văn viết, trang trọng hơn một chút.\n' +
      '📝 Ví dụ:\n' +
      '・やるからには、最後までやるべきだ。\n' +
      '・やる以上は、最後までやるべきだ。',
  },
]

const GrammarKaraNiwaijouScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～からには / ～以上は" grammarSections={grammarSections} />
  )
}

export default GrammarKaraNiwaijouScreen
