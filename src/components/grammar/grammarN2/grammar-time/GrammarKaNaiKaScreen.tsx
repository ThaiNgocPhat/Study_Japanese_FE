import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～か～ないかのうちに」diễn tả hai hành động xảy ra gần như đồng thời, vế sau xảy ra ngay khi hoặc ngay sau khi vế trước bắt đầu.\n' +
      '👉 Có thể hiểu là “ngay sau khi A xảy ra thì B cũng xảy ra”.\n' +
      '👉 Mẫu này nhấn mạnh sự đồng thời hoặc gần như đồng thời của hai sự việc.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể thường (thể khả năng hoặc phủ định) + か + Động từ thể phủ định (ない) + かのうちに]',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để nối hai hành động xảy ra gần như đồng thời, vế sau xảy ra ngay khi hoặc ngay sau khi vế trước bắt đầu.\n' +
      '✅ Thường dùng trong trường hợp hành động diễn ra nhanh, không có thời gian chờ đợi.\n' +
      '✅ Mẫu này thường dùng trong văn nói, văn viết để nhấn mạnh tính tức thời.\n\n' +
      'Ví dụ:\n' +
      '・ベルが鳴るか鳴らないかのうちに、ドアが開いた。\n' +
      '→ Chuông vừa kêu thì cửa đã mở.\n' +
      '・彼が来るか来ないかのうちに、電話がかかってきた。',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 電車が発車するかしないかのうちに、またドアが閉まった。\n' +
      '→ Tàu điện vừa mới sắp chạy thì cửa lại đóng ngay.\n\n' +
      '② 赤ちゃんが泣くか泣かないかのうちに、母親が抱き上げた。\n' +
      '→ Em bé vừa mới khóc thì mẹ đã bế lên ngay.\n\n' +
      '③ 授業が始まるか始まらないかのうちに、先生が教室に入った。',
  },
]

const GrammarKaNaiKaScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～か～ないかのうちに" grammarSections={grammarSections} />
  )
}

export default GrammarKaNaiKaScreen
