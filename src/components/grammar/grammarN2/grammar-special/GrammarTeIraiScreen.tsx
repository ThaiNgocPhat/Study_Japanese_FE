import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～て以来」diễn tả từ khi một sự việc xảy ra thì trạng thái hoặc hành động nào đó kéo dài tiếp tục cho đến hiện tại.\n' +
      '👉 Mang nghĩa "kể từ khi...", nhấn mạnh khoảng thời gian kéo dài.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể て] + 以来\n\n' +
      'Ví dụ: 「日本に来て以来、日本語を勉強しています。」(Kể từ khi đến Nhật, tôi đã học tiếng Nhật.)',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để nhấn mạnh thời điểm bắt đầu một trạng thái, hành động và trạng thái đó tiếp tục kéo dài đến hiện tại.\n' +
      '✅ Thường dùng với các trạng từ chỉ thời gian như 「ずっと」, 「今まで」 để nhấn mạnh sự kéo dài.\n\n' +
      'Ví dụ:\n' +
      '・彼とは卒業して以来、会っていない。\n' +
      '→ Kể từ khi tốt nghiệp, tôi chưa gặp anh ấy.\n' +
      '・事故を起こして以来、彼は運転を控えている。\n' +
      '→ Kể từ khi xảy ra tai nạn, anh ấy hạn chế lái xe.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 彼女は結婚して以来、幸せそうだ。\n' +
      '→ Cô ấy trông hạnh phúc kể từ khi kết hôn.\n\n' +
      '② 日本に来て以来、日本語の勉強を続けている。\n' +
      '→ Kể từ khi đến Nhật, tôi vẫn tiếp tục học tiếng Nhật.\n\n' +
      '③ 彼が転勤して以来、連絡が途絶えた。\n' +
      '→ Kể từ khi anh ấy chuyển công tác, liên lạc đã đứt.',
  },
]

const GrammarTeIraiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～て以来" grammarSections={grammarSections} />
}

export default GrammarTeIraiScreen
