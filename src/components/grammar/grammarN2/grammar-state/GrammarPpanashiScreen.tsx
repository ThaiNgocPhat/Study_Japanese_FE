import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～っぱなし」diễn tả một hành động hay trạng thái nào đó được giữ nguyên, kéo dài suốt một khoảng thời gian mà không thay đổi hoặc không dừng lại.\n' +
      '👉 Nghĩa tiếng Việt: "suốt, cứ để nguyên, cứ làm mãi".\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể ます (bỏ ます)] + っぱなし',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để chỉ hành động hoặc trạng thái kéo dài không thay đổi, thường mang nghĩa không tốt hoặc trách móc (ví dụ: để nguyên cửa mở, để máy chạy không tắt).\n' +
      '✅ Có thể dùng với các động từ tự động từ hoặc tha động từ.\n\n' +
      'Ví dụ:\n' +
      '・テレビをつけっぱなしにする。\n' +
      '→ Cứ để nguyên TV bật.\n' +
      '・ドアを開けっぱなしにする。\n' +
      '→ Cứ để nguyên cửa mở.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 窓を開けっぱなしで出かけたら、雨が入ってきた。\n' +
      '→ Tôi đã đi ra ngoài mà để nguyên cửa sổ mở, nên mưa đã lọt vào.\n\n' +
      '② 彼は宿題をやりっぱなしで遊びに行った。\n' +
      '→ Anh ta để nguyên bài tập chưa làm xong mà đi chơi.\n\n' +
      '③ 電気をつけっぱなしにしないでください。\n' +
      '→ Đừng có để nguyên đèn bật suốt như vậy.',
  },
]

const GrammarPpanashiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～っぱなし" grammarSections={grammarSections} />
}

export default GrammarPpanashiScreen
