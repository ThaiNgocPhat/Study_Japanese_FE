import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に限らず',
    explanation:
      '📌「～に限らず」dùng để nói rằng **không chỉ A, mà còn cả B/C…** cũng vậy.\n' +
      '👉 Nghĩa: “không chỉ… mà còn…”, “không riêng gì…”\n' +
      '🔎 Hay dùng để mở rộng phạm vi đối tượng.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + に限らず\n\n' +
      '📌 Theo sau là những từ thể hiện phạm vi rộng hơn, như: みんな、さまざま、いろいろ、誰でも、全国、いつも、etc.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Diễn tả ý nghĩa: không chỉ một đối tượng cụ thể nào đó mà phạm vi còn mở rộng hơn nữa.\n' +
      '✅ Thường dùng trong văn viết hoặc ngôn ngữ trang trọng.\n' +
      '✅ Điểm đặc biệt là nhấn mạnh sự **không giới hạn** phạm vi.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. この番組は若者に限らず、年配の人にも人気がある。\n' +
      '→ Chương trình này không chỉ giới trẻ mà cả người lớn tuổi cũng yêu thích.\n\n' +
      '2. 日本に限らず、アジア全体でこの製品は売れている。\n' +
      '→ Không chỉ ở Nhật Bản, sản phẩm này bán chạy trên toàn châu Á.\n\n' +
      '3. 会員に限らず、誰でも参加できます。\n' +
      '→ Không chỉ hội viên, ai cũng có thể tham gia.\n\n' +
      '4. 雨の日に限らず、毎日ジョギングをしています。\n' +
      '→ Không chỉ ngày mưa, tôi chạy bộ mỗi ngày.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔸 ～だけでなく: cũng mang nghĩa “không chỉ… mà còn”, phổ biến hơn trong hội thoại.\n' +
      '🔸 ～に限らず: thường dùng trong văn viết hoặc mang tính mở rộng phạm vi rõ rệt hơn.\n' +
      '🔸 ～ばかりでなく: gần nghĩa, nhưng nhấn mạnh hơn về mức độ hơn là phạm vi.',
  },
]

const GrammarNiKagirazuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に限らず" grammarSections={grammarSections} />
}

export default GrammarNiKagirazuScreen
