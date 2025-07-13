import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～かと思うと」diễn tả “vừa mới nghĩ rằng A thì ngay lập tức xảy ra B”.\n' +
      '👉 Mẫu câu này dùng để diễn tả sự thay đổi nhanh chóng hoặc sự việc xảy ra ngay sau một hành động/thời điểm nào đó.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể thường + かと思うと／かと思ったら]',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Thường dùng để nối hai sự việc xảy ra liên tiếp, có sự đối lập hoặc thay đổi bất ngờ.\n' +
      '✅ Hành động vế sau thường diễn ra ngay sau hoặc gần như đồng thời với hành động vế trước.\n' +
      '✅ Mẫu câu này thường dùng trong văn nói và văn viết để nhấn mạnh sự chuyển biến đột ngột.\n\n' +
      'Ví dụ:\n' +
      '・赤ちゃんが泣いたかと思うと、もう笑っていた。\n' +
      '→ Vừa mới nghĩ là em bé khóc thì ngay lập tức lại cười.\n' +
      '・空が暗くなったかと思ったら、急に雨が降り出した。',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 彼は部屋に入ったかと思うと、すぐに出て行った。\n' +
      '→ Vừa mới nghĩ là anh ấy vào phòng thì ngay lập tức lại đi ra.\n\n' +
      '② テレビをつけたかと思ったら、画面が真っ暗になった。\n' +
      '→ Vừa bật TV lên thì màn hình đã tối đen.\n\n' +
      '③ 友達が電話をかけてきたかと思うと、すぐに話が変わった。',
  },
]

const GrammarKaToOmoutoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かと思うと" grammarSections={grammarSections} />
}

export default GrammarKaToOmoutoScreen
