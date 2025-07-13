import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に従って',
    explanation:
      '📌「～に従って」(にしたがって) là mẫu ngữ pháp diễn tả **sự thay đổi kéo theo một sự thay đổi khác**, thường mang ý nghĩa logic hoặc quy luật.\n' +
      'Nghĩa là: **Càng… thì càng…**, **Theo… thì…**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể từ điển] + に従って\n🔹 [Danh từ] + に従って\n\nVí dụ:\n- 経済の回復に従って (Theo sự phục hồi của kinh tế)\n- 気温が上がるに従って (Nhiệt độ càng tăng thì...)',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '🟠 Dùng khi một sự thay đổi xảy ra sẽ kéo theo một sự thay đổi khác một cách **logic và có quy luật**.\n' +
      '🟡 Vế sau không dùng để ra mệnh lệnh, ý chí hay mong muốn cá nhân.\n' +
      '🟢 Khác với「～につれて」ở chỗ:「～に従って」mạnh về tính quy luật, nguyên tắc hoặc kế hoạch có sẵn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 経済が回復するに従って、失業率も減ってきた。\n→ Khi kinh tế phục hồi thì tỷ lệ thất nghiệp cũng giảm.\n\n' +
      '2. 車が増えるに従って、交通事故も多くなった。\n→ Càng nhiều xe thì tai nạn giao thông cũng tăng.\n\n' +
      '3. 年を取るに従って、記憶力が低下していく。\n→ Càng lớn tuổi thì trí nhớ càng giảm.\n\n' +
      '4. 計画が進むに従って、問題点が明らかになった。\n→ Kế hoạch càng tiến triển thì các vấn đề càng trở nên rõ ràng.',
  },
  {
    title: '5. So sánh với các mẫu tương tự',
    explanation:
      '🔸「～につれて」: Nhấn mạnh vào **sự thay đổi tự nhiên**\n' +
      '🔹「～に従って」: Nhấn mạnh vào **sự thay đổi logic/quy luật hoặc theo tiến trình**\n\n' +
      '⚠️ Không dùng mệnh lệnh hay ý chí cá nhân ở vế sau.',
  },
]

const GrammarNiShitagatteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に従って" grammarSections={grammarSections} />
}

export default GrammarNiShitagatteScreen
