import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～うちに」diễn tả ý nghĩa “trong lúc đang diễn ra một trạng thái hoặc hành động nào đó thì một sự việc khác xảy ra hoặc có sự thay đổi”.\n' +
      '👉 Có thể là hành động chủ động hoặc sự thay đổi xảy ra tự nhiên.\n' +
      '👉 Thường nhấn mạnh thời điểm giới hạn để hành động thứ hai xảy ra.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể thường] + うちに\n' +
      '[い形容詞 thể thường] + うちに\n' +
      '[な形容詞/ Danh từ] + のうちに',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng khi muốn nói “trong lúc còn đang (điều kiện A), thì (điều kiện B) xảy ra”.\n' +
      '✅ Hành động ở mệnh đề 2 có thể là sự thay đổi hoặc hành động chủ động.\n' +
      '✅ Khác với 「～間に」(khoảng thời gian), 「～うちに」nhấn mạnh việc hành động/thay đổi xảy ra trong khoảng thời gian còn giới hạn.\n\n' +
      'Ví dụ:\n' +
      '・若いうちにたくさん勉強しなさい。\n' +
      '→ Hãy học nhiều trong lúc còn trẻ.\n' +
      '・音楽を聞いているうちに眠くなってしまった。\n' +
      '→ Trong lúc nghe nhạc thì tôi đã buồn ngủ.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 雨が降らないうちに帰りましょう。\n' +
      '→ Hãy về nhà trước khi trời mưa.\n\n' +
      '② 若いうちに海外旅行したい。\n' +
      '→ Tôi muốn đi du lịch nước ngoài khi còn trẻ.\n\n' +
      '③ テレビを見ているうちに、だんだん眠くなった。\n' +
      '→ Trong lúc xem TV, tôi dần dần cảm thấy buồn ngủ.',
  },
]

const GrammarUchiNiN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～うちに" grammarSections={grammarSections} />
}

export default GrammarUchiNiN2Screen
