import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Mẫu 「～られる」 ngoài nghĩa là thể bị động, còn có một cách dùng đặc biệt gọi là **tự phát**.\n\n' +
      '📌 Ý nghĩa: Diễn tả **tự nhiên nghĩ/ cảm thấy/ làm điều gì đó** mà **không có chủ ý rõ ràng**.\n' +
      '→ Giống như nói “chợt thấy…”, “tự nhiên nghĩ đến…”, “bỗng dưng muốn…” trong tiếng Việt.\n\n' +
      '📎 Cấu trúc:\n' +
      '[Động từ nhóm II (V2)] られる\n' +
      '[Động từ nhóm I (V1)] chuyển sang thể bị động\n\n' +
      '✅ Thường dùng với các động từ liên quan đến: 思う (nghĩ), 感じる (cảm nhận), 見える (trông thấy), 聞こえる (nghe thấy), v.v.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① この曲を聞くと、学生時代が思い出される。\n→ Nghe bài này, tôi chợt nhớ lại thời học sinh.\n\n' +
      '② 子どもたちの笑顔を見ると、心が温かく感じられる。\n→ Nhìn nụ cười của bọn trẻ, tôi tự nhiên cảm thấy ấm lòng.\n\n' +
      '③ 遠くの山が美しく見られます。\n→ Có thể nhìn thấy ngọn núi ở xa thật đẹp.\n\n' +
      '④ その話を聞いて、涙が出されました。\n→ Nghe chuyện đó, nước mắt tôi bỗng trào ra.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Đây không phải là câu bị động (bị ai đó làm gì), mà là cảm xúc, phản ứng **tự nhiên phát sinh**.\n' +
      '🔸 Thường dùng trong văn viết, văn phong nhẹ nhàng, sâu lắng.\n' +
      '🔸 Cần phân biệt rõ với thể bị động thông thường để tránh hiểu sai nghĩa.\n\n' +
      '📘 Là điểm ngữ pháp trong chương trình JLPT N2.',
  },
]

const GrammarRareruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～られる（tự発）" grammarSections={grammarSections} />
}

export default GrammarRareruScreen
