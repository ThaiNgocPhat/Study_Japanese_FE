import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～につれて',
    explanation:
      '📌「～につれて」là mẫu ngữ pháp dùng để diễn tả sự **thay đổi song song giữa hai hiện tượng**.\n' +
      'Nghĩa là: **Càng… thì càng…** hoặc **Khi… thì… cũng thay đổi**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể từ điển] + につれて\n🔹 [Danh từ] + につれて\n\nVí dụ:\n- 年を取るにつれて (Càng có tuổi thì…)\n- 時間がたつにつれて (Thời gian trôi qua thì…)',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '🟠 Dùng khi **một sự thay đổi kéo theo sự thay đổi khác**.\n' +
      '🟡 Thường dùng với các động từ thể hiện sự thay đổi như 増える, 減る, 進む, 広がる...\n' +
      '🟢 Vế sau không dùng để ra mệnh lệnh, sai khiến hay ý chí của người nói.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 年を取るにつれて、体の調子が悪くなってきた。\n→ Càng lớn tuổi thì sức khỏe càng yếu đi.\n\n' +
      '2. 経済が発展するにつれて、人々の生活も豊かになってきた。\n→ Kinh tế càng phát triển thì đời sống người dân cũng càng sung túc hơn.\n\n' +
      '3. 時間がたつにつれて、その事件のことを忘れてしまった。\n→ Khi thời gian trôi qua thì tôi cũng quên dần sự việc đó.\n\n' +
      '4. 暗くなるにつれて、気温が下がってきた。\n→ Trời càng tối thì nhiệt độ cũng càng giảm xuống.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ Mẫu câu này gần giống với 「～にしたがって」, nhưng:\n' +
      '-「～につれて」: nhấn mạnh vào **sự thay đổi tự nhiên**.\n' +
      '-「～にしたがって」: nhấn mạnh vào **sự thay đổi có tính logic, hệ quả**.\n\n' +
      '⚠️ Không dùng với mệnh lệnh, sai khiến, hay mong muốn ở vế sau.',
  },
]

const GrammarNiTsureteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～につれて" grammarSections={grammarSections} />
}

export default GrammarNiTsureteScreen
