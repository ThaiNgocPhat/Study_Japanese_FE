import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～かわりに',
    explanation:
      '📌「～かわりに」dùng để diễn tả:\n' +
      '1. Thay cho một người/vật/hành động khác\n' +
      '2. Đổi lại một mặt tích cực thì có một mặt tiêu cực hoặc ngược lại\n\n' +
      '👉 Nghĩa: "thay vì...", "thay cho...", "bù lại thì...", "đổi lại thì..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển + かわりに\n' +
      '🔹 Danh từ + の + かわりに\n' +
      '🔹 Tính từ -i / Tính từ -na（な）+ かわりに',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Khi muốn nói "làm A thay cho B"\n' +
      '✅ Khi muốn thể hiện "đổi lại, bù lại"\n' +
      '✅ Vế trước và sau thường có sự **bù trừ** hoặc **so sánh đối lập**',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 病気の友だちのかわりに、私がアルバイトに行きました。\n' +
      '→ Tôi đã đi làm thêm thay cho người bạn bị ốm.\n\n' +
      '2. 車で来たので、お酒のかわりにジュースを飲みました。\n' +
      '→ Vì đến bằng ô tô nên tôi đã uống nước hoa quả thay vì uống rượu.\n\n' +
      '3. この仕事は給料が高いかわりに、とてもきついです。\n' +
      '→ Công việc này lương cao, nhưng đổi lại rất vất vả.\n\n' +
      '4. 日本語は話せるかわりに、英語はあまりできません。\n' +
      '→ Tôi nói được tiếng Nhật, nhưng đổi lại tiếng Anh thì không giỏi lắm.\n\n' +
      '5. 父は自由に使える時間が少ないかわりに、収入（しゅうにゅう）は多いです。\n' +
      '→ Bố tôi ít thời gian rảnh, nhưng đổi lại thu nhập cao.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔸 Phân biệt:\n' +
      '・「～にかわって」: chỉ sự thay thế người/vật cụ thể\n' +
      '・「～かわりに」: ngoài thay thế, còn mang nghĩa bù lại, đối lập\n\n' +
      '🔸 Có thể dùng trong cả văn nói và văn viết, nhưng dùng trong phân tích, so sánh sẽ phù hợp hơn.',
  },
]

const GrammarKawariniN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～かわりに" grammarSections={grammarSections} />
}

export default GrammarKawariniN2Screen
