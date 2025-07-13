import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～くせに',
    explanation:
      '📌「～くせに」dùng để diễn đạt sự **phê phán, chỉ trích, bất mãn** đối với người khác khi họ **làm một việc không phù hợp với hoàn cảnh hay năng lực của mình**.\n\n' +
      '👉 Nghĩa: "mặc dù...", "dù… nhưng lại…" (mang ý coi thường, trách móc)',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + くせに\n' +
      '🔹 Tính từ -i + くせに\n' +
      '🔹 Tính từ -na + な + くせに\n' +
      '🔹 Danh từ + の + くせに\n\n' +
      '📍 *Chủ ngữ ở cả hai vế thường là cùng một người.*',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Diễn tả một **thực tế trái với điều đáng lẽ phải xảy ra**, đi kèm với cảm xúc **khó chịu, bực tức** của người nói.\n' +
      '✅ Không dùng để nói về bản thân một cách khiêm tốn.\n' +
      '✅ Cường độ phê phán mạnh hơn「のに」, mang sắc thái tiêu cực rõ hơn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 知っているくせに、教えてくれなかった。\n' +
      '→ Biết rồi mà lại không nói cho tôi.\n\n' +
      '2. 彼は学生のくせに、全然勉強しない。\n' +
      '→ Dù là học sinh mà chẳng học gì cả.\n\n' +
      '3. 元気なくせに、病気のふりをしている。\n' +
      '→ Dù khỏe mạnh nhưng lại giả vờ bị bệnh.\n\n' +
      '4. よく知らないくせに、あれこれ言わないで。\n' +
      '→ Không biết rõ mà lại cứ nói này nói nọ.\n\n' +
      '5. あの人は自分の失敗のくせに、人のせいにしている。\n' +
      '→ Chính lỗi của anh ta mà lại đổ cho người khác.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔸「～くせに」mang nghĩa **tiêu cực, chỉ trích**, nên không dùng trong các ngữ cảnh trang trọng hay lịch sự.\n' +
      '🔸 Không dùng để nói về bản thân trong cách khiêm nhường – nếu muốn nhẹ nhàng hơn có thể dùng「のに」.',
  },
]

const GrammarKuseniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～くせに" grammarSections={grammarSections} />
}

export default GrammarKuseniScreen
