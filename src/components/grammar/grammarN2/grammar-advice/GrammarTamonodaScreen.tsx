import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～たものだ',
    explanation:
      '📌「～たものだ」là mẫu câu dùng để **hồi tưởng lại những việc đã từng làm trong quá khứ**, thể hiện sự **hoài niệm** hoặc **cảm xúc sâu sắc** về kỷ niệm đó.\n\n' +
      '👉 Thường dùng để nói về thói quen trong quá khứ hoặc cảm xúc khi nhớ lại những sự việc đã qua.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể た + ものだ\n\n' +
      '※ Không dùng để nói về hành động chỉ xảy ra một lần mà dùng cho những việc lặp lại hoặc kéo dài trong quá khứ.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '🟠 Diễn đạt một việc **từng làm thường xuyên**, là **thói quen trong quá khứ**.\n' +
      '🟡 Cũng có thể dùng để **thể hiện cảm xúc sâu sắc, cảm thán** về một sự kiện trong quá khứ.\n' +
      '🟢 Mang ý nghĩa hoài niệm, nhẹ nhàng, thường dùng khi kể chuyện.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 子どものころは、よく川で遊んだものだ。\n→ Hồi nhỏ tôi thường chơi ở sông suối lắm.\n\n' +
      '2. 学生時代は毎日遅くまで勉強したものだ。\n→ Hồi còn là sinh viên, ngày nào tôi cũng học đến khuya.\n\n' +
      '3. よく母に叱られたものだ。\n→ Tôi thường hay bị mẹ mắng lắm.\n\n' +
      '4. 昔はこの辺もにぎやかだったものだ。\n→ Ngày xưa khu này cũng náo nhiệt lắm.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅「～たものだ」khác với「～ていた」ở chỗ nhấn mạnh vào **cảm xúc hoài niệm** chứ không đơn thuần mô tả hành động.\n\n' +
      '✅ Còn có thể đi cùng với cảm thán như:\n- よく～たものだ: Ngày xưa thường hay…\n- 本当によく～たものだ: Thật sự là đã từng…',
  },
]

const GrammarTamonodaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～たものだ" grammarSections={grammarSections} />
}

export default GrammarTamonodaScreen
