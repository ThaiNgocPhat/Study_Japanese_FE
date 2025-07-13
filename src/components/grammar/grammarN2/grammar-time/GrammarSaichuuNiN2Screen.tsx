import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～最中に」diễn tả ý nghĩa "đúng vào lúc đang làm gì đó thì có sự việc khác xảy ra".\n' +
      '👉 Thường nhấn mạnh thời điểm hành động đang diễn ra thì bị gián đoạn hoặc có chuyện gì đó xảy ra.\n' +
      '👉 Cách dùng trang trọng hơn 「～とき」.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể ている] + 最中に\n' +
      'Danh từ + の最中に',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng khi muốn nhấn mạnh hành động đang được thực hiện thì một việc khác chen vào.\n' +
      '✅ Thường dùng với các hành động mang tính tiếp diễn (động từ thể ている).\n' +
      '✅ Phía sau thường là những sự việc bất ngờ, không mong muốn xảy ra.\n\n' +
      'Ví dụ:\n' +
      '・会議の最中に電話がかかってきた。\n' +
      '→ Đúng lúc đang họp thì điện thoại reo.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 映画を見ている最中に停電が起こった。\n' +
      '→ Đúng lúc đang xem phim thì mất điện.\n\n' +
      '② ご飯を食べている最中に友達が訪ねてきた。\n' +
      '→ Đúng lúc đang ăn cơm thì bạn đến thăm.\n\n' +
      '③ 勉強している最中に電話が鳴った。\n' +
      '→ Đúng lúc đang học thì điện thoại reo.',
  },
]

const GrammarSaichuuNiN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～最中に" grammarSections={grammarSections} />
}

export default GrammarSaichuuNiN2Screen
