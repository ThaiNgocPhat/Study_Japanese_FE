import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～てばかりいる」diễn tả hành động nào đó chỉ được thực hiện liên tục, thường mang nghĩa phê phán, chỉ trích ai đó chỉ làm việc đó mà không làm những việc khác.\n' +
      '👉 Nghĩa tiếng Việt: "suốt ngày chỉ...","toàn... suốt" (với hàm ý không tốt).\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể て] + ばかりいる',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để phê phán, than phiền người khác chỉ làm một việc nào đó mà không chịu làm việc khác hoặc không chịu thay đổi.\n' +
      '✅ Thường dùng trong trường hợp không hài lòng hoặc thất vọng về hành động của ai đó.\n\n' +
      'Ví dụ:\n' +
      '・ゲームばかりしている。\n' +
      '→ Suốt ngày chỉ chơi game.\n' +
      '・文句ばかり言っている。\n' +
      '→ Toàn than phiền suốt.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 彼は遊んでばかりいるから、成績が悪くなった。\n' +
      '→ Anh ta suốt ngày chỉ chơi nên thành tích học tập kém đi.\n\n' +
      '② 子供はお菓子を食べてばかりいる。\n' +
      '→ Đứa trẻ suốt ngày chỉ ăn bánh kẹo.\n\n' +
      '③ そんなに文句を言ってばかりいないで、少しは手伝いなさい。\n' +
      '→ Đừng có than phiền suốt như vậy nữa, hãy giúp đỡ một chút đi.',
  },
]

const GrammarTebakariIruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てばかりいる" grammarSections={grammarSections} />
}

export default GrammarTebakariIruScreen
