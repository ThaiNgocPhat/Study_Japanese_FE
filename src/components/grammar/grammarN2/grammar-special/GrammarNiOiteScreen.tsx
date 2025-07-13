import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～において」dùng để chỉ **địa điểm**, **thời điểm**, hoặc **bối cảnh** mà một hành động hoặc sự kiện xảy ra.\n\n' +
      '📌 Ý nghĩa: "Tại...", "Ở...", "Trong..."\n\n' +
      '📎 Cấu trúc:\n' +
      '[Danh từ (địa điểm/thời gian)] + において',
  },
  {
    title: '2. Đặc điểm',
    explanation:
      '✅ Là cách diễn đạt mang tính trang trọng, thường dùng trong văn viết, tin tức, phát biểu, báo cáo.\n' +
      '✅ Có thể thay thế bằng「で」trong nhiều trường hợp, nhưng「において」mang sắc thái cứng, trang trọng hơn.\n' +
      '✅ Cũng có thể dùng ở dạng:\n' +
      '　- においては: nhấn mạnh phạm vi\n' +
      '　- における + Danh từ: dạng bổ nghĩa cho danh từ',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 会議は第一会議室において行われます。\n→ Cuộc họp được tổ chức tại phòng họp số 1.\n\n' +
      '② 現代社会において、インターネットは欠かせない存在だ。\n→ Trong xã hội hiện đại, Internet là thứ không thể thiếu.\n\n' +
      '③ オリンピックは東京において開催されました。\n→ Olympic đã được tổ chức tại Tokyo.\n\n' +
      '④ 教育において重要なのは、個人の能力を伸ばすことです。\n→ Trong giáo dục, điều quan trọng là phát triển năng lực cá nhân.\n\n' +
      '⑤ 日本における少子化は深刻な問題です。\n→ Việc tỷ lệ sinh thấp ở Nhật Bản là một vấn đề nghiêm trọng.',
  },
  {
    title: '4. So sánh với 「で」',
    explanation:
      '🔸「で」: dùng trong văn nói hàng ngày, nhẹ nhàng hơn.\n' +
      '🔸「において」: trang trọng, dùng trong văn viết, báo cáo, văn bản hành chính.\n\n' +
      '🧠 Ví dụ:\n' +
      '・会議は東京で行われた。 (bình thường)\n' +
      '・会議は東京において行われた。 (trang trọng)',
  },
]

const GrammarNiOiteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～において" grammarSections={grammarSections} />
}

export default GrammarNiOiteScreen
