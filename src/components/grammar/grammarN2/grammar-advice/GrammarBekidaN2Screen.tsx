import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～べきだ / ～べきではない',
    explanation:
      '📌 Mẫu ngữ pháp này dùng để thể hiện **ý kiến của người nói về việc nên hoặc không nên làm điều gì đó**.\n' +
      '👉 「～べきだ」= nên làm ~  ／「～べきではない」= không nên làm ~\n' +
      'Thể hiện nhận định mạnh mẽ về mặt đạo đức, lẽ thường, trách nhiệm.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển + べきだ / べきではない\n' +
      '🔸 ※ 例外（ngoại lệ）:\n' +
      '・する → すべきだ（hoặc）するべきだ\n' +
      '・しない → すべきではない（hoặc）するべきではない',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Dùng khi muốn đưa ra lời khuyên, quan điểm cá nhân mang tính đạo lý, đạo đức hoặc lẽ thường.\n' +
      '👉 Không dùng cho hành vi của cấp trên, người có vị thế cao hơn.\n' +
      '👉 「～べきではない」 dùng để nói về điều **không nên làm** vì lý do đạo đức, xã hội.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 学生はもっと勉強すべきだ。\n→ Học sinh nên học nhiều hơn.\n\n' +
      '2. 人をだますようなことをすべきではない。\n→ Không nên làm những việc như lừa gạt người khác.\n\n' +
      '3. 約束は守るべきだと思います。\n→ Tôi nghĩ là nên giữ lời hứa.\n\n' +
      '4. 社会人として時間を守るべきだ。\n→ Là người đi làm thì nên tuân thủ thời gian.\n\n' +
      '5. 無理をすべきではありません。\n→ Không nên cố quá sức.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ So sánh với「～たほうがいい」:\n' +
      '・「～たほうがいい」→ lời khuyên nhẹ nhàng, thân mật\n' +
      '・「～べきだ」→ mang tính đạo lý, nghiêm túc hơn\n\n' +
      '⚠️ Không dùng mẫu này để nói về **hành vi của người bề trên**, hoặc **mang tính ra lệnh** quá mạnh.',
  },
]

const GrammarBekidaN2Screen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～べきだ / ～べきではない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarBekidaN2Screen
