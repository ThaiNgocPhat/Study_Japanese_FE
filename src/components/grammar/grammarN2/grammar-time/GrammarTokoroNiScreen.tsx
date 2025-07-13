import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～ところに」diễn tả “vào đúng lúc/tại điểm mà một hành động hoặc sự việc nào đó xảy ra hoặc sắp xảy ra”.\n' +
      '👉 Thường nhấn mạnh thời điểm hành động xảy ra là quan trọng hoặc bất ngờ.\n' +
      '👉 Có thể dịch là “đúng lúc”, “vào lúc”, “tại thời điểm”.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể thường] + ところに\n' +
      '[Danh từ + の] + ところに',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng khi muốn nói hành động xảy ra ngay tại thời điểm hoặc vị trí của một hành động khác.\n' +
      '✅ Thường dùng để biểu thị sự việc bất ngờ, không mong đợi.\n' +
      '✅ Hành động ở vế sau thường là sự kiện bất ngờ hoặc xen vào.\n\n' +
      'Ví dụ:\n' +
      '・学校へ行くところに電話がかかってきた。\n' +
      '→ Đúng lúc tôi đang đi đến trường thì có điện thoại gọi đến.\n' +
      '・出かけるところに雨が降り始めた。\n' +
      '→ Đúng lúc tôi sắp đi thì trời bắt đầu mưa.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 彼が家に着くところに友達が来た。\n' +
      '→ Đúng lúc anh ấy đến nhà thì bạn đến.\n\n' +
      '② 今まさに話そうとするところに、電話が鳴った。\n' +
      '→ Đúng lúc tôi chuẩn bị nói thì điện thoại reo.\n\n' +
      '③ 出かけるところに母が来て、話をした。\n' +
      '→ Đúng lúc tôi sắp đi thì mẹ đến và nói chuyện.',
  },
]

const GrammarTokoroNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ところに" grammarSections={grammarSections} />
}

export default GrammarTokoroNiScreen
