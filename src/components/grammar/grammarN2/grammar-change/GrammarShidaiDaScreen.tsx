import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～次第だ',
    explanation:
      '📌「～次第だ」được dùng để giải thích lý do, kết quả hoặc nói rằng kết quả phụ thuộc vào điều gì đó. Đây là cách diễn đạt khá trang trọng, thường thấy trong văn viết hoặc các bài phát biểu.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể từ điển] / [Danh từ] + 次第だ\n\n🔸 Các dạng phổ biến:\n- ～というわけで、こうなった次第です。\n- ～によって、～するかどうかが決まる次第だ。\n\nVí dụ:\n- このたび、担当者が退職した次第で、ご連絡いたしました。',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ **① Giải thích lý do, hoàn cảnh (văn viết/lịch sự):**\n→ Dùng ở cuối câu để thể hiện lý do khiến sự việc trở nên như vậy.\n\n' +
      '✅ **② Phụ thuộc vào…:**\n→ Diễn đạt rằng kết quả, hành động trong tương lai phụ thuộc vào điều gì đó. Mang nghĩa "tùy thuộc vào…", gần giống với 「～によって」.\n\n' +
      '⚠️ Không dùng trong hội thoại thân mật hàng ngày.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 急用が入った次第で、今日は欠席させていただきます。\n→ Do có việc gấp phát sinh nên hôm nay tôi xin phép vắng mặt.\n\n' +
      '2. この書類を提出しなかったために、参加できなかった次第です。\n→ Vì không nộp tài liệu nên tôi đã không thể tham gia.\n\n' +
      '3. 成功するかどうかは、君の努力次第だ。\n→ Thành công hay không là phụ thuộc vào sự cố gắng của cậu.\n\n' +
      '4. 天候次第で、旅行を中止するかもしれません。\n→ Có thể hủy chuyến du lịch tùy thuộc vào thời tiết.',
  },
  {
    title: '5. Ghi nhớ',
    explanation:
      '🔹「～次第です」là cách kết câu lịch sự, dùng để giải thích hoặc trình bày lý do trang trọng.\n' +
      '🔸 Không nhầm với「～次第で／次第では」(một mẫu ngữ pháp khác mang nghĩa "tùy theo / tùy vào") sẽ được học riêng.',
  },
]

const GrammarShidaiDaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～次第だ" grammarSections={grammarSections} />
}

export default GrammarShidaiDaScreen
